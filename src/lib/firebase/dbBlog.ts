import db from '.';
import { formatDT } from '$lib/utils/formatters/formatDate';

export const blog = {
   img: {
      makeId: (img: File) => {
         const now = formatDT.getId();
         return `${now}-${img.name}`;
      },
      upload: async function upload(img: FileList): Promise<null|string> {
         if (!img || img === undefined) { 
            return null
         } else {
            const imgFile = img[0];
            const id = db.blog.img.makeId(imgFile);
            try {
               await db.insert.file({ id, file: imgFile });
               console.log(`🔥 File uploaded successfully as ${id}`); 
               return id;
            } catch (err) { 
               console.error('🔥 Error uploading file', err);
               return null;
            };
         }
      },
   }

}

export default blog;