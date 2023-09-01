import type { DocumentReference, Timestamp } from "firebase/firestore"
import type { LocaleString } from "@/lib/i18n/navigation"

// TAG
export interface TagItem {
   id: string,
   color: string,
   title: LocaleString,
}

// CLIENT
export interface ClientItemBase {
   id: string,
   name: string,
   url: string,
   description: LocaleString,
   logo: string,
}
export interface ClientItemDb extends ClientItemBase {
   client_since: Timestamp,
   portfolio?: DocumentReference[],
}
export interface ClientItem extends ClientItemBase {
   client_since: Date,
   portfolio?: PortfolioItem[],
}

// PORTFOLIO ITEM
export interface PortfolioItemBase {
   id: string,
   featured: boolean,
   enabled: boolean,
   title: string,
   solution: string,
   href: string,
   cover_img: string,
   gallery: string[],	
}
export interface PortfolioItemDb extends PortfolioItemBase {
   client: DocumentReference,
   tags: DocumentReference[],
   text: LocaleString,
}
export interface PortfolioItem extends PortfolioItemBase {
   client: ClientItem,
   tags: TagItem[],
   description: LocaleString,
}
export interface PortfolioItemModal {
   title: string,
   solution: string,
   href: string,
   img: string,
   client: ClientItem,
   tags: TagItem[],
   description: string,
}