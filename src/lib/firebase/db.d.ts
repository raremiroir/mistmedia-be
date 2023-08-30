import type { FirebaseApp } from "firebase/app";
import type { Auth } from "firebase/auth";
import type { DocumentData, Firestore } from "firebase/firestore";
import type { FirebaseStorage, SettableMetadata } from "firebase/storage";

export type DbId = string;
export type DbCollection = string;

export interface DocId {
   id: DbId;
}

export interface DocProps extends DocId {
   collection: DbCollection;
}

export interface DocPropsInsert extends DocProps {
   values: {
      [key:string]: any;
   }
}

export interface FileProps {
   collection?: DbCollection;
   id: DbId;
   file: File,
   meta?: { [key:string]: string };
}
export interface FilePropsFetch extends DocId {
   refType?: 'default' | 'gs' | 'https' | 'download';
}

export interface FilePropsOrder {
   collection: DbCollection;
   orderBy: string;
   limit?: number;
   direction?: 'asc' | 'desc';
}


// ========================
// DATABASE
export type DbApp = {
   app: FirebaseApp;
   firestore: Firestore;
   auth: Auth;
   storage: FirebaseStorage;
}

export type DatabaseFunctions = {
   init: () => Promise<DbApp>;
   // FETCH
   fetch: {
      // Fetch Doc/Docs
      doc: (props: DocProps) => Promise<DocumentData | null>
      docs: (props: DocProps) => Promise<DocumentData[]>
      // Fetch File/Files
      file: (props: FilePropsFetch) => Promise<StorageReference | StorageReference[]>
      files: (collectionRef: string) => Promise<StorageReference[]>
   },
   // EXISTS
   exists: {
      doc: (props: DocProps) => Promise<boolean>
   },
   // INSERT
   insert: {
      // Insert file
      file: (props: FileProps) => Promise<void>
      // Insert document
      doc: (props: DocPropsInsert) => Promise<void>
   },
   // UPDATE
   update: {
      // Update file
      file: (props: FileProps) => Promise<void>
      // Update document
      doc: (props: DocPropsInsert) => Promise<void>
   },
   // DELETE
   delete: {
      // Delete file
      file: (props: FileProps) => Promise<void>
      // Delete document
      doc: (props: DocProps) => Promise<void>

      undo: {
         file: (props: FileProps) => Promise<void>
         doc: (props: DocProps) => Promise<void>
      }
   },
   
}