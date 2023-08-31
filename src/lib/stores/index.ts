import { atom, type WritableAtom } from "nanostores";


// Trigger for mobile nav menu
export const openMobile: WritableAtom<boolean> = atom(false);