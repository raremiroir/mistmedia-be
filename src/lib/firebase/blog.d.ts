import type { Timestamp } from "firebase/firestore";
import type { StorageReference } from "firebase/storage";

export interface Post {
   id: string;
   author: string;
   title: string;
   excerpt?: string;
   body: string;
   created_at: Timestamp;
   updated_at: Timestamp;
   deleted_at: Timestamp|null;
   is_draft: boolean;
   tags: string[];
   time_to_read?: number;
   img?: string|StorageReference;
}

export interface FormPostValues {
   author: string;
   title: string;
   excerpt: string;
   body: string;
   img: FileList | undefined;
   tags: string[];
   time_to_read: number;
   is_draft: boolean;
}

export type Posts = Post[];

export type ImgType = FileList|undefined;