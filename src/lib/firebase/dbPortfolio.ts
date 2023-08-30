import type { DocumentData, DocumentReference } from "firebase/firestore";
import type { ClientItem, ClientItemDb, PortfolioItem, PortfolioItemDb } from "../types/portfolio";
import db from ".";

export const getClient = async (client: DocumentReference): Promise<any> => {
   const clientDb = await db.fetch.docFromRef(client) as ClientItemDb;
   const clientItem: ClientItem = {
      id: clientDb.id,
      client_since: new Date(clientDb.client_since.seconds * 1000),
      description: clientDb.description,
      logo: clientDb.logo,
      name: clientDb.name,
      portfolio: [],
      url: clientDb.url,
   }
   return clientItem;
};

export const getPortfolioItem = async (item: DocumentData): Promise<PortfolioItem> => {
   return {
      id: item.id,
      title: item.title,
      featured: item.featured,
      enabled: item.enabled,
      description: item.text,
      solution: item.solution,
      href: item.href,
      cover_img: item.cover_img,
      gallery: item.gallery,
      client: await getClient(item.client),
      tags: [],
   }
}