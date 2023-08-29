interface NavItemBase {
   title: string;
   href: string;
   icon?: string;
}

export interface NavItemType extends NavItemBase {
   items?: NavItemBase[];
}

export type OnKeyDownEvent = KeyboardEvent & { currentTarget: EventTarget & HTMLDivElement };
