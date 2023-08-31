import { derived, writable, type Writable } from "svelte/store";
import type { PortfolioItemModal } from "../types/portfolio";
import type { ModalComponent, ModalStore } from "@skeletonlabs/skeleton";


// MODALS
   // Modal Store
   export const modalStore: Writable<ModalStore> = writable();
   // Modal stores
   export const currentModalRegistry: Writable<Record<string, ModalComponent>> = writable({})
   // Current modal title + slot (not applicable to portfolio modal)
   export const currentModal: Writable<{ title: string, slot: string, icon?: string }> = writable({ title: '', slot: '' });
   // Current portfolio item modal
   export const currentPortfolioItem: Writable<PortfolioItemModal> = writable({
      title: '',
      solution: '',
      href: '',
      img: '',
      client: {
         id: '',
         name: '',
         url: '',
         description: {
            nl: '',
            en: '',
         },
         logo: '',
         client_since: new Date(),
      },
      tags: [],
      description: '',
   });