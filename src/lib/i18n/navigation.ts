export type LocaleString = {
   [key: string]: string;
}

export type NavItem = {
   title: LocaleString;
   slug: LocaleString;
}
export type NavItemDropdown = NavItem & {
   items: {
      [key: string]: NavItem
   }
}
export type Navigation = {
   home: NavItem;
   about: NavItem;
   cases: NavItem;
   solutions: NavItemDropdown;
   blog: NavItem;
   contact: NavItem;
   portfolio: NavItem;
}

export const navigation: Navigation = {
   home: {
      title: { nl: 'Home', en: 'Home' },
      slug: { nl: '', en: '' }
   },
   about: {
      title: { nl: 'Over ons', en: 'About us' },
      slug: { nl: 'over-ons', en: 'about-us' }
   },
   cases: {
      title: { nl: 'Cases', en: 'Cases' },
      slug: { nl: 'cases', en: 'cases' },
   },
   solutions: {
      title: { nl: 'Solutions', en: 'Solutions' },
      slug: { nl: 'solutions', en: 'solutions' },
      items: {
         web: {
            title: { nl: 'Web', en: 'Web' },
            slug: { nl: 'web', en: 'web' },
         },
         graphic: {
            title: { nl: 'Grafisch Ontwerp', en: 'Graphic Design' },
            slug: { nl: 'grafisch-ontwerp', en: 'graphic-design' },
         },
         marketing: {
            title: { nl: 'Online Marketing', en: 'Online Marketing' },
            slug: { nl: 'online-marketing', en: 'online-marketing' },
         },
         three_d: {
            title: { nl: '3D', en: '3D' },
            slug: { nl: '3d-visualisatie', en: '3d-visualisation' },
         },
         av: {
            title: { nl: 'Audiovisueel', en: 'Audiovisual' },
            slug: { nl: 'audiovisueel', en: 'audiovisual' },
         },
         ai: {
            title: { nl: 'AI', en: 'AI' },
            slug: { nl: 'artificiële-intelligentie', en: 'artificial-intelligence' },
         }
      }
   },
   blog: {
      title: { nl: 'Blog', en: 'Blog' },
      slug: { nl: 'blog', en: 'blog' }
   },
   contact: {
      title: { nl: 'Contact', en: 'Contact' },
      slug: { nl: 'contact', en: 'contact' }
   },
   portfolio: {
      title: { nl: 'Portfolio', en: 'Portfolio' },
      slug: { nl: 'portfolio', en: 'portfolio' }
   }
}
export default navigation;