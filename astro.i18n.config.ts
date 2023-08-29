import { defineAstroI18nConfig } from "astro-i18n"

import nl_common from "./public/i18n/nl/common.json"
import nl_form from "./public/i18n/nl/form.json"
import nl_nav from "./public/i18n/nl/nav.json"
import nl_others from "./public/i18n/nl/others.json"
import nl_pages from "./public/i18n/nl/pages.json"
import nl_portfolio_tags from "./public/i18n/nl/portfolio_tags.json"
import nl_services from "./public/i18n/nl/services.json"
import en_common from "./public/i18n/en/common.json"
import en_form from "./public/i18n/en/form.json"
import en_nav from "./public/i18n/en/nav.json"
import en_others from "./public/i18n/en/others.json"
import en_pages from "./public/i18n/en/pages.json"
import en_portfolio_tags from "./public/i18n/en/portfolio_tags.json"
import en_services from "./public/i18n/en/services.json"

export const languages = [ "nl", "en" ]

export default defineAstroI18nConfig({
	defaultLangCode: "nl",
	supportedLangCodes: ["en"],
	showDefaultLangCode: false,
	trailingSlash: 'never',
	translations: {
		nl: {
			common: nl_common,
			form: nl_form,
			nav: nl_nav,
			others: nl_others,
			pages: nl_pages,
			portfolio_tags: nl_portfolio_tags,
			services: nl_services,
		},
		en: {
			common: en_common,
			form: en_form,
			nav: en_nav,
			others: en_others,
			pages: en_pages,
			portfolio_tags: en_portfolio_tags,
			services: en_services,
		}
	},
	routeTranslations: {
		en: {
			"": "",
			"over-ons": "about-us",
			"cases": "cases",
			"solutions": 'solutions',
			"solutions/web": "solutions/web",
			"solutions/grafisch-ontwerp": "solutions/graphic-design",
			"solutions/online-marketing": "solutions/online-marketing",
			"solutions/3d-visualisatie": "solutions/3d-visualisation",
			"solutions/audiovisueel": "solutions/audiovisual",
			"solutions/artificiele-intelligentie": "solutions/artificial-intelligence",
			"contact": "contact",
			"blog": "blog",
		}
	},
})