import { initializeApp } from 'firebase/app';
import type { FirebaseApp } from 'firebase/app';
import { 
   getAnalytics,
   type Analytics, 
   isSupported
} from 'firebase/analytics';

// Add SDK's for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import type { Auth } from 'firebase/auth';
import { 
   getAuth, 
   setPersistence,
   browserSessionPersistence
} from 'firebase/auth';
import {
   collection, getFirestore, 
   doc, Timestamp, 
   getDocs, getDoc, 
   setDoc, updateDoc, Firestore, query, limit, orderBy, deleteDoc, DocumentReference,
} from 'firebase/firestore';
import { deleteObject, getMetadata, getStorage, list, listAll, ref, updateMetadata, uploadBytes } from 'firebase/storage';
import type { FirebaseStorage, FullMetadata, SettableMetadata, StorageReference } from 'firebase/storage';

const FB_REGION = import.meta.env.FB_REGION;
const FB_API_KEY = import.meta.env.FB_API_KEY;
const FB_AUTH_DOMAIN = import.meta.env.FB_AUTH_DOMAIN;
const FB_PROJECT_ID = import.meta.env.FB_PROJECT_ID;
const FB_STORAGE_BUCKET = import.meta.env.FB_STORAGE_BUCKET;
const FB_MESSAGING_SENDER_ID = import.meta.env.FB_MESSAGING_SENDER_ID;
const FB_APP_ID = import.meta.env.FB_APP_ID;
const FB_MEASUREMENT_ID = import.meta.env.FB_MEASUREMENT_ID;

import type { DbCollection, DocId, DocProps, DocPropsInsert, FileProps, FilePropsFetch, FilePropsOrder } from './db';
import blog from './dbBlog';

// Firebase config
const config = {
	useEmulators: false,
	region: FB_REGION,
	firebase: {
		apiKey: FB_API_KEY,
		authDomain: FB_AUTH_DOMAIN,
		projectId: FB_PROJECT_ID,
		storageBucket: FB_STORAGE_BUCKET,
		messagingSenderId: FB_MESSAGING_SENDER_ID,
		appId: FB_APP_ID,
      measurementId: FB_MEASUREMENT_ID
	}
};

let app: FirebaseApp;
let analytics: Analytics; 
let auth: Auth;
let firestore: Firestore;
let storage: FirebaseStorage;


/* =================================================================== */
/* These functions should be called in onMount when used in components */
/* =================================================================== */
export const db = {
   // Initialize Firebase SDK
   init: async () => {
      // console.log('🔥 Initializing Firebase SDK');
      app = initializeApp(config.firebase);
      await isSupported().then((res) => { if (res) analytics = getAnalytics(app); });
      firestore = getFirestore(app);
      auth = getAuth(app);
      storage = getStorage(app);
      setPersistence(auth, browserSessionPersistence); // log out when browser is closed
      return { app, analytics, firestore, auth, storage }; 
   },
   // FETCH
   fetch: {
      // Fetch Doc/Docs
      docFromRef: async (docRef: DocumentReference) => {
         const docSnapshot = await getDoc(docRef);
         if (docSnapshot.exists()) { return docSnapshot.data(); } 
         else { console.error("No such document in Firestore Database!"); return null; }
      },
      doc: async (props: DocProps) => {
         const { firestore } = await db.init();
         return await db.fetch.docFromRef(doc(firestore, props.collection, props.id));
      },
      file: async (props: FilePropsFetch) => {
         const { storage } = await db.init();
         switch (props.refType) {
            case 'gs':    return ref(storage, `gs://${props.id}`);
            case 'https': return ref(storage, `https://firebasestorage.googleapis.com/b/bucket/o/${props.id}`);
            default:      return ref(storage, props.id);
            
            // case 'download': 
            //    result = getDownloadURL(ref(storage, props.id))
            //    .then((res) => { /* console.log(res); */  return res; })
            //    .catch((err) => { console.error(err); return 'no link'; });
         }
      },
      fileMeta: async (storageRef: StorageReference) => {
         const fileRef = ref(storageRef);
         const fileMeta = await getMetadata(fileRef);
         return fileMeta;
      },
      all: {
         // DOCS
         docs: async (collectionRef: DbCollection) => {
            const { firestore } = await db.init();
            const postSnapshot = await getDocs(collection(firestore, collectionRef));
            const postList = postSnapshot.docs.map(doc => doc.data());
            return postList;
         },
         order: async (props: FilePropsOrder) => {
            var direction = props.direction || 'asc';
            const { firestore } = await db.init();
            const collRef = collection(firestore, props.collection);
            const q = query(collRef, orderBy(props.orderBy, direction), limit(props.limit || 1000));
            const colSnapshot = await getDocs(q);
            const resList = colSnapshot.docs.map(doc => doc.data());
            return resList;
         },
         // FILES
         files: async (collectionRef?:string) => {
            const { storage } = await db.init();
            const listRef = collectionRef ? ref(storage, collectionRef) : ref(storage);
            const res = await listAll(listRef);
            return res.items;
         },
      }
   },
   // EXISTS
   exists: {
      doc: async (props: DocProps) => {
         const { firestore } = await db.init();
         const docSnapshot = await getDoc(doc(firestore, props.collection, props.id));
         return docSnapshot.exists();
      },
   },
   // INSERT
   insert: {
      // Insert file
      file: async (props: FileProps) => {
         const { storage } = await db.init();
         const name:string = props.collection ? `${props.collection}/${props.id}` : props.id;
         const fileRef = ref(storage, name);
         uploadBytes(fileRef, props.file).then((snapshot) => { console.log('🔥 Image uploaded!') })

         const customMeta = props.meta ? props.meta : {};
         const newMeta: SettableMetadata = { 
            cacheControl: 'public, max-age=31536000',
            contentType: props.file.type,
            customMetadata: customMeta 
         };
         updateMetadata(fileRef, newMeta);
      },
      // Insert document
      doc: async (props: DocPropsInsert) => {
         const { firestore } = await db.init();
         await setDoc(doc(firestore, props.collection, props.id), props.values);
      },
   },
   // UPDATE
   update: {
      doc: async (props: DocPropsInsert) => {
         const { firestore } = await db.init();
         await updateDoc(doc(
            firestore,
            props.collection,
            props.id
         ), props.values);
      },
      // fileMeta: async () => {

      // }
   },
   // DELETE
   delete: {
      doc: async (props: DocProps) => {
         const { firestore } = await db.init();
         await deleteDoc(doc(firestore, props.collection, props.id));
      },
      file: async (id: string) => {
         const { storage } = await db.init();
         const storRef = ref(storage, id);
         db.delete.fileByRef(storRef);
      },
      fileByRef: async (storageRef: StorageReference) => {
         deleteObject(storageRef)
            .then(() => { console.log('🔥 Image deleted!'); })
            .catch((err) => { console.error(err); })
      },
      soft: {
         doc: async (props: DocProps) => {
            const { firestore } = await db.init();
            await updateDoc(doc(firestore, props.collection, props.id), {
               deleted_at: Timestamp.fromDate(new Date())
            });
         },
         undoDoc: async (props: DocProps) => {
            const { firestore } = await db.init();
            await updateDoc(doc(firestore, props.collection, props.id), {
               deleted_at: null
            });
         },
      },
   },
   // CUSTOM
   blog: blog,
}

export default db;