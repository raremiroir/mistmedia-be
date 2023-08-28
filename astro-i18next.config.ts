import type { AstroI18nextConfig } from "astro-i18next";

const { COUNTRY = "nl" } = process.env;

export default {
  defaultLocale: "nl",
  locales: [
    "nl", 
    "en",
    // "fr",
  ],
  fallbackLocale: "nl",
  showDefaultLocale: false, // might enable later
  returnObjects: true,

  backend: {
    loadPath: "./public/locales/{{lng}}/{{ns}}.json",
  },
  
  // optional
  namespaces: ["common", "site", "home", "about", "services"],
  defaultNamespace: "common",

  load: ["server", "client"],
  routes: {
    nl: {
      about: "over-ons",
      cases: "cases",
      solutions: {
        index: "solutions",
        web: "web",
        graphic: "grafisch-ontwerp",
        marketing: "marketing",
        "3d": "3d-visualisatie",
        av: "audiovisueel",
        ai: "artificiele-intelligentie",
      },
      contact: "contact",
      blog: "blog",
    },
    en: {
      about: "about",
      cases: "cases",
      solutions: {
        index: "solutions",
        web: "web",
        graphic: "graphic-design",
        marketing: "marketing",
        "3d": "3d-visualisation",
        av: "audiovisual",
        ai: "artificial-intelligence",
      },
      contact: "contact",
      blog: "blog",
    },
    // fr: {
    //   "over-ons": "a-propos",
    //   cases: "cas",
    //   solutions: {
    //     index: "solutions",
    //     web: "web",
    //     "grafisch-ontwerp": "design-graphique",
    //     marketing: "marketing",
    //     "3d-visualisatie": "visualisation-3d",
    //     audiovisueel: "audiovisuel",
    //   },
    //   contact: "contact",
    //   blog: "blog",
    // },
  },

  i18nextServer: {
    returnObjects: true,
    debug: false,
    lng: COUNTRY,
    fallbackLng: "nl",
    preload: ["nl", "en"],
    ns: ["common", "site", "home", "about", "services"],
    defaultNS: "common",
  },
  i18nextClient: {
    returnObjects: true,
    debug: false,
    lng: COUNTRY,
    fallbackLng: "nl",
    preload: ["nl", "en"],
    ns: ["common", "site", "home", "about", "services"],
    defaultNS: "common",
    load: "languageOnly",
  }
};