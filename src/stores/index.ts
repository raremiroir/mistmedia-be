import type { ModalComponent } from "@skeletonlabs/skeleton";
import { derived, writable, type Readable, type Writable } from "svelte/store";
import { atom, type WritableAtom } from "nanostores";


// Trigger for mobile nav menu
export const openMobile: WritableAtom<boolean> = atom(false);


// Modal stores
export const currentModalRegistry: Writable<Record<string, ModalComponent>> = writable({})