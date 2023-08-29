/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />
/// <reference types="@astrojs/image/client" />

interface ImportMetaEnv {

   readonly SITE_URL: string;
   readonly SITE_DOMAIN: string;

   readonly CONTACT_EMAIL: string;
   readonly CONTACT_PHONE: string;
   readonly SOCIAL_LINKEDIN: string;
   readonly SOCIAL_FACEBOOK: string;
   readonly SOCIAL_INSTAGRAM: string;
   readonly SOCIAL_TWITTER: string;
   readonly SOCIAL_GITHUB: string;

   readonly SITEKEY_TURNSTILE: string;
   readonly PRIVATE_KEY_TURNSTILE: string;

   readonly MG_DOMAIN: string;
   readonly MG_API_KEY: string;
   readonly MG_BASE_URL: string;
   
   readonly FB_REGION: string;
   readonly FB_API_KEY: string;
   readonly FB_AUTH_DOMAIN: string;
   readonly FB_PROJECT_ID: string;
   readonly FB_STORAGE_BUCKET: string;
   readonly FB_MESSAGING_SENDER_ID: string;
   readonly FB_APP_ID: string;
   readonly FB_MEASUREMENT_ID: string;
}
/// <reference path="..\.astro-i18n\generated.d.ts" />
