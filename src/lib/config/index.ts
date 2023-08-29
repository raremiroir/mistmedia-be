const SOCIAL_LINKEDIN = import.meta.env.SOCIAL_LINKEDIN
const SOCIAL_FACEBOOK = import.meta.env.SOCIAL_FACEBOOK
const SOCIAL_INSTAGRAM = import.meta.env.SOCIAL_INSTAGRAM
const SOCIAL_TWITTER = import.meta.env.SOCIAL_TWITTER
const SOCIAL_GITHUB = import.meta.env.SOCIAL_GITHUB
const SITE_URL = import.meta.env.SITE_URL
const SITE_DOMAIN = import.meta.env.SITE_DOMAIN
const CONTACT_EMAIL = import.meta.env.CONTACT_EMAIL
const CONTACT_PHONE = import.meta.env.CONTACT_PHONE


import type { Locales } from "@/lib/types";

export const socials = {
   linkedin: `https://www.linkedin.com/in/${SOCIAL_LINKEDIN}/`,
   instagram: `https://www.instagram.com/${SOCIAL_INSTAGRAM}/`,
   facebook: `https://www.facebook.com/${SOCIAL_FACEBOOK}/`,
   twitter: `https://twitter.com/${SOCIAL_TWITTER}/`,
   github: `https://github.com/${SOCIAL_GITHUB}/`,
}

const siteTitle = `Mist Media`
const orgTitle = `Mist Media`

const dev = true;

export const langs: Locales[] = ['nl', 'en']
export const baseLang: Locales = 'nl'

export const website = {
   title: siteTitle,
   description: '',

   siteUrl: dev ? 'http://localhost:3000' : SITE_URL,
   domain: SITE_DOMAIN,
   author: orgTitle,
   ogLanguage: `nl_BE`,
   siteLanguage: `nl_BE`,
   bgColor: `#ffffff`,
   themeColor: `#ffffff`,
   contact: {
      email: CONTACT_EMAIL,
      phone: CONTACT_PHONE,
   }
}
export const SEO = {
   openingHours: {
      hours: {
         monday: `10:00-22:00`,
         tuesday: `10:00-22:00`,
         wednesday: `10:00-22:00`,
         thursday: `10:00-22:00`,
         friday: `10:00-22:00`,
         saturday: `10:00-22:00`,
         sunday: `14:00-22:00`,
      }
   }
}

/* 
================================================
           GOOGLE TAG MANAGER CONFIG
================================================= 
*/

// CSS variables
export const gtm: {
   [key: string]: {
      [key: string]: string
   }
} = {
   contact: {
      open: `contact_open`,
      close: `contact_close`,
      finish: `contact_finish`
   }
}

const config = {
   website,
   socials,
   SEO,
   gtm
}
export default config;