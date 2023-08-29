type DefaultLangCode = "nl"
type SupportedLangCode = "en"
type LangCode = DefaultLangCode | SupportedLangCode
type RouteUri = | "/blog" | "/solutions" | "/cases" | "/contact" | "/" | "/over-ons" 
type RouteParams = {"/blog": undefined; "/solutions": undefined; "/cases": undefined; "/contact": undefined; "/": undefined; "/over-ons": undefined; }
type TranslationPath = "common.word.about" | "common.btn.more_info" | "common.btn.back_to_home" | "common.btn.close" | "common.btn.visit_website" | "common.btn.visit_website_of" | "common.btn.read_more" | "common.btn.read_more_about" | "common.actions.change_to_dark" | "common.actions.change_to_light" | "common.actions.change_language" | "common.actions.change_language_to" | "common.messages.no_items_yet" | "common.messages.check_back_soon" | "common.geo.lang.nl" | "common.geo.lang.en" | "common.geo.lang.fr" | "common.contact.us" | "common.contact.leads.cta" | "common.contact.leads.answer_within" | "common.contact.via.form" | "common.footer.socials.follow_us_on" | "common.footer.socials.check_out_our" | "common.footer.socials.social_media" | "common.footer.socials.page" | "common.footer.rights_reserved" | "common.cookies_prefs.title" | "common.cookies_prefs.text" | "common.cookies_prefs.text_more" | "common.cookies_prefs.types.necessary.label" | "common.cookies_prefs.types.necessary.text" | "common.cookies_prefs.types.tracking.label" | "common.cookies_prefs.types.tracking.text" | "common.cookies_prefs.types.analytics.label" | "common.cookies_prefs.types.analytics.text" | "common.cookies_prefs.types.marketing.label" | "common.cookies_prefs.types.marketing.text" | "common.cookies_prefs.btns.accept" | "common.cookies_prefs.btns.accept_tip" | "common.cookies_prefs.btns.decline" | "common.cookies_prefs.btns.decline_tip" | "common.cookies_prefs.btns.save" | "common.cookies_prefs.btns.save_tip" | "common.cookies_prefs.btns.save_close" | "common.cookies_prefs.btns.settings" | "common.cookies_prefs.btns.preferences" | "common.cookies_prefs.btns.view_policy" | "form.message" | "form.validation.optional" | "form.validation.required" | "form.validation.is_required" | "form.validation.is_too_short" | "form.validation.is_too_long" | "form.validation.only_alphanumeric" | "form.validation.only_numeric" | "form.validation.only_alpha" | "form.validation.email" | "form.validation.phone" | "form.validation.terms" | "form.fields.name.first" | "form.fields.name.last" | "form.fields.email" | "form.fields.phone" | "form.fields.company" | "form.fields.job" | "form.fields.subject" | "form.fields.message" | "form.fields.file" | "form.fields.terms" | "form.fields.turnstile" | "form.actions.submit.do" | "form.actions.submit.doing" | "form.actions.submit.done" | "form.actions.send.do" | "form.actions.send.doing" | "form.actions.send.done" | "form.actions.send_message.do" | "form.actions.send_message.doing" | "form.actions.send_message.done" | "form.actions.clear.field" | "form.actions.clear.form" | "nav.home.title" | "nav.home.slug" | "nav.about.title" | "nav.about.slug" | "nav.cases.title" | "nav.cases.slug" | "nav.solutions.title" | "nav.solutions.slug" | "nav.solutions.items.web.title" | "nav.solutions.items.web.slug" | "nav.solutions.items.graphic.title" | "nav.solutions.items.graphic.slug" | "nav.solutions.items.marketing.title" | "nav.solutions.items.marketing.slug" | "nav.solutions.items.3d.title" | "nav.solutions.items.3d.slug" | "nav.solutions.items.av.title" | "nav.solutions.items.av.slug" | "nav.solutions.items.ai.title" | "nav.solutions.items.ai.slug" | "nav.blog.title" | "nav.blog.slug" | "nav.contact.title" | "nav.contact.slug" | "nav.portfolio.title" | "nav.portfolio.slug" | "others.terms_conditions.title" | "others.privacy_policy.title" | "pages.common.cta.id" | "pages.common.cta.title" | "pages.home.title" | "pages.home.slug" | "pages.home.hero.typewriter.1" | "pages.home.hero.typewriter.2" | "pages.home.hero.typewriter.3" | "pages.home.hero.typewriter.4" | "pages.home.hero.typewriter.5" | "pages.home.hero.typewriter.6" | "pages.home.hero.typewriter.7" | "pages.home.hero.typewriter.8" | "pages.home.hero.typewriter.9" | "pages.home.hero.typewriter.10" | "pages.home.hero.typewriter.11" | "pages.home.hero.typewriter.12" | "pages.home.hero.typewriter.13" | "pages.home.hero.buttons.what_do_we_do" | "pages.home.hero.buttons.discover_our_services" | "pages.home.sections.what_we_do.id" | "pages.home.sections.what_we_do.title" | "pages.home.sections.faq.id" | "pages.home.sections.faq.title" | "pages.home.sections.faq.text" | "pages.home.sections.faq.items.1.question" | "pages.home.sections.faq.items.1.answer" | "pages.home.sections.faq.items.2.question" | "pages.home.sections.faq.items.2.answer" | "pages.home.sections.faq.items.3.question" | "pages.home.sections.faq.items.3.answer" | "pages.home.sections.faq.items.4.question" | "pages.home.sections.faq.items.4.answer" | "pages.about.title" | "pages.about.slug" | "pages.about.more_about_us" | "pages.about.more_about_myself" | "pages.about.more_about_me" | "pages.about.intro" | "pages.about.sections.about_me.id" | "pages.about.sections.about_me.title" | "pages.about.sections.about_me.lead.title" | "pages.about.sections.about_me.lead.text" | "pages.about.sections.about_me.content.title" | "pages.about.sections.about_me.content.text" | "pages.about.sections.difference.id" | "pages.about.sections.difference.title" | "pages.about.sections.difference.subtitle" | "pages.about.sections.difference.items.polyvalence.title" | "pages.about.sections.difference.items.polyvalence.text" | "pages.about.sections.difference.items.transparence.title" | "pages.about.sections.difference.items.transparence.text" | "pages.about.sections.difference.items.efficiency.title" | "pages.about.sections.difference.items.efficiency.text" | "pages.about.sections.difference.items.creativity.title" | "pages.about.sections.difference.items.creativity.text" | "pages.cases.title" | "pages.cases.slug" | "pages.cases.intro" | "pages.solutions.title" | "pages.solutions.slug" | "pages.solutions.sections.features.id" | "pages.solutions.sections.services.id" | "pages.solutions.sections.services.title" | "pages.solutions.sections.portfolio.id" | "pages.solutions.sections.portfolio.title" | "pages.solutions.sections.portfolio.default_intro" | "pages.blog.title" | "pages.blog.slug" | "pages.blog.intro" | "pages.blog.no_posts" | "pages.contact.title" | "pages.contact.slug" | "pages.contact.id" | "pages.portfolio.title" | "pages.portfolio.slug" | "pages.portfolio.intro" | "portfolio_tags.solutions.web" | "portfolio_tags.solutions.graphic" | "portfolio_tags.solutions.seo" | "portfolio_tags.solutions.marketing" | "portfolio_tags.solutions.3d" | "portfolio_tags.solutions.av" | "portfolio_tags.solutions.photo" | "portfolio_tags.solutions.ai" | "portfolio_tags.tags.web_design" | "portfolio_tags.tags.web_development" | "portfolio_tags.tags.web_management" | "portfolio_tags.tags.seo" | "portfolio_tags.tags.marketing" | "portfolio_tags.tags.hosting" | "portfolio_tags.tags.graphic_design" | "portfolio_tags.tags.logo_design" | "portfolio_tags.tags.branding" | "portfolio_tags.tags.print_design" | "portfolio_tags.tags.social_media" | "portfolio_tags.tags.photography" | "portfolio_tags.tags.video" | "portfolio_tags.tags.copywriting" | "portfolio_tags.tags.illustration" | "portfolio_tags.tags.animation" | "portfolio_tags.tags.webshop" | "portfolio_tags.tags.wordpress" | "portfolio_tags.tags.content_creation" | "portfolio_tags.tags.content_management" | "services.common.our_services" | "services.common.leads.cta" | "services.web.title" | "services.web.title_short" | "services.web.slug" | "services.web.intro" | "services.web.intro_card.title" | "services.web.intro_card.text" | "services.web.services_intro" | "services.web.features.fast.title" | "services.web.features.fast.title_alt" | "services.web.features.fast.text" | "services.web.features.responsive.title" | "services.web.features.responsive.title_alt" | "services.web.features.responsive.text" | "services.web.features.secure.title" | "services.web.features.secure.title_alt" | "services.web.features.secure.text" | "services.web.features.accessible.title" | "services.web.features.accessible.title_alt" | "services.web.features.accessible.text" | "services.web.features.seo.title" | "services.web.features.seo.title_alt" | "services.web.features.seo.text" | "services.web.features.multilingual.title" | "services.web.features.multilingual.title_alt" | "services.web.features.multilingual.text" | "services.web.features.scalable.title" | "services.web.features.scalable.title_alt" | "services.web.features.scalable.text" | "services.web.features.support.title" | "services.web.features.support.title_alt" | "services.web.features.support.text" | "services.web.services.design.title" | "services.web.services.design.text" | "services.web.services.development.title" | "services.web.services.development.text" | "services.web.services.optimization.title" | "services.web.services.optimization.text" | "services.web.services.hosting.title" | "services.web.services.hosting.text" | "services.web.services.accessibility.title" | "services.web.services.accessibility.text" | "services.web.services.email_hosting.title" | "services.web.services.email_hosting.text" | "services.graphic.title" | "services.graphic.title_short" | "services.graphic.slug" | "services.graphic.intro" | "services.graphic.intro_card.title" | "services.graphic.intro_card.text" | "services.graphic.features.all_in_one.title" | "services.graphic.features.all_in_one.title_alt" | "services.graphic.features.all_in_one.text" | "services.graphic.features.concepts.title" | "services.graphic.features.concepts.title_alt" | "services.graphic.features.concepts.text" | "services.graphic.features.tailored.title" | "services.graphic.features.tailored.title_alt" | "services.graphic.features.tailored.text" | "services.graphic.services_intro" | "services.graphic.services.branding.title" | "services.graphic.services.branding.text" | "services.graphic.services.printed.title" | "services.graphic.services.printed.text" | "services.graphic.services.editorial.title" | "services.graphic.services.editorial.text" | "services.marketing.title" | "services.marketing.title_short" | "services.marketing.slug" | "services.marketing.intro" | "services.marketing.intro_card.title" | "services.marketing.intro_card.text" | "services.marketing.features.analysis.title" | "services.marketing.features.analysis.title_alt" | "services.marketing.features.analysis.text" | "services.marketing.features.brand.title" | "services.marketing.features.brand.title_alt" | "services.marketing.features.brand.text" | "services.marketing.features.results.title" | "services.marketing.features.results.title_alt" | "services.marketing.features.results.text" | "services.marketing.services_intro" | "services.marketing.services.analytics.title" | "services.marketing.services.analytics.text" | "services.marketing.services.seo.title" | "services.marketing.services.seo.text" | "services.marketing.services.ads.title" | "services.marketing.services.ads.text" | "services.marketing.services.smm.title" | "services.marketing.services.smm.text" | "services.'3d'.title" | "services.'3d'.title_short" | "services.'3d'.slug" | "services.'3d'.intro" | "services.'3d'.intro_card.title" | "services.'3d'.intro_card.text" | "services.'3d'.features.detail.title" | "services.'3d'.features.detail.title_alt" | "services.'3d'.features.detail.text" | "services.'3d'.features.natural.title" | "services.'3d'.features.natural.title_alt" | "services.'3d'.features.natural.text" | "services.'3d'.features.finish.title" | "services.'3d'.features.finish.title_alt" | "services.'3d'.features.finish.text" | "services.'3d'.services_intro" | "services.'3d'.services.models.title" | "services.'3d'.services.models.text" | "services.'3d'.services.animations.title" | "services.'3d'.services.animations.text" | "services.'3d'.services.printing.title" | "services.'3d'.services.printing.text" | "services.av.title" | "services.av.title_short" | "services.av.slug" | "services.av.intro" | "services.av.intro_card.title" | "services.av.intro_card.text" | "services.av.features.personal.title" | "services.av.features.personal.title_alt" | "services.av.features.personal.text" | "services.av.features.multipurpose.title" | "services.av.features.multipurpose.title_alt" | "services.av.features.multipurpose.text" | "services.av.features.finish.title" | "services.av.features.finish.title_alt" | "services.av.features.finish.text" | "services.av.services_intro" | "services.av.services.photo.title" | "services.av.services.photo.text" | "services.av.services.video.title" | "services.av.services.video.text" | "services.av.services.edit.title" | "services.av.services.edit.text" | "services.av.services.vfx.title" | "services.av.services.vfx.text" | "services.av.services.subtitle.title" | "services.av.services.subtitle.text" | "services.av.services.animation.title" | "services.av.services.animation.text" | "services.ai.title" | "services.ai.title_short" | "services.ai.slug" | "services.ai.intro" | "services.ai.intro_card.title" | "services.ai.intro_card.text" | "services.ai.services_intro"
type TranslationOptions = { "common.word.about": {} | undefined; "common.btn.more_info": {} | undefined; "common.btn.back_to_home": {} | undefined; "common.btn.close": {} | undefined; "common.btn.visit_website": {} | undefined; "common.btn.visit_website_of": {} | undefined; "common.btn.read_more": {} | undefined; "common.btn.read_more_about": {} | undefined; "common.actions.change_to_dark": {} | undefined; "common.actions.change_to_light": {} | undefined; "common.actions.change_language": {} | undefined; "common.actions.change_language_to": {} | undefined; "common.messages.no_items_yet": {} | undefined; "common.messages.check_back_soon": {} | undefined; "common.geo.lang.nl": {} | undefined; "common.geo.lang.en": {} | undefined; "common.geo.lang.fr": {} | undefined; "common.contact.us": {} | undefined; "common.contact.leads.cta": {} | undefined; "common.contact.leads.answer_within": {} | undefined; "common.contact.via.form": {} | undefined; "common.footer.socials.follow_us_on": {} | undefined; "common.footer.socials.check_out_our": {} | undefined; "common.footer.socials.social_media": {} | undefined; "common.footer.socials.page": {} | undefined; "common.footer.rights_reserved": {} | undefined; "common.cookies_prefs.title": {} | undefined; "common.cookies_prefs.text": {} | undefined; "common.cookies_prefs.text_more": {} | undefined; "common.cookies_prefs.types.necessary.label": {} | undefined; "common.cookies_prefs.types.necessary.text": {} | undefined; "common.cookies_prefs.types.tracking.label": {} | undefined; "common.cookies_prefs.types.tracking.text": {} | undefined; "common.cookies_prefs.types.analytics.label": {} | undefined; "common.cookies_prefs.types.analytics.text": {} | undefined; "common.cookies_prefs.types.marketing.label": {} | undefined; "common.cookies_prefs.types.marketing.text": {} | undefined; "common.cookies_prefs.btns.accept": {} | undefined; "common.cookies_prefs.btns.accept_tip": {} | undefined; "common.cookies_prefs.btns.decline": {} | undefined; "common.cookies_prefs.btns.decline_tip": {} | undefined; "common.cookies_prefs.btns.save": {} | undefined; "common.cookies_prefs.btns.save_tip": {} | undefined; "common.cookies_prefs.btns.save_close": {} | undefined; "common.cookies_prefs.btns.settings": {} | undefined; "common.cookies_prefs.btns.preferences": {} | undefined; "common.cookies_prefs.btns.view_policy": {} | undefined; "form.message": {} | undefined; "form.validation.optional": {} | undefined; "form.validation.required": {} | undefined; "form.validation.is_required": { field: string; }; "form.validation.is_too_short": { min: string; field: string; }; "form.validation.is_too_long": { max: string; field: string; }; "form.validation.only_alphanumeric": { field: string; }; "form.validation.only_numeric": { field: string; }; "form.validation.only_alpha": { field: string; }; "form.validation.email": {} | undefined; "form.validation.phone": {} | undefined; "form.validation.terms": {} | undefined; "form.fields.name.first": {} | undefined; "form.fields.name.last": {} | undefined; "form.fields.email": {} | undefined; "form.fields.phone": {} | undefined; "form.fields.company": {} | undefined; "form.fields.job": {} | undefined; "form.fields.subject": {} | undefined; "form.fields.message": {} | undefined; "form.fields.file": {} | undefined; "form.fields.terms": {} | undefined; "form.fields.turnstile": {} | undefined; "form.actions.submit.do": {} | undefined; "form.actions.submit.doing": {} | undefined; "form.actions.submit.done": {} | undefined; "form.actions.send.do": {} | undefined; "form.actions.send.doing": {} | undefined; "form.actions.send.done": {} | undefined; "form.actions.send_message.do": {} | undefined; "form.actions.send_message.doing": {} | undefined; "form.actions.send_message.done": {} | undefined; "form.actions.clear.field": {} | undefined; "form.actions.clear.form": {} | undefined; "nav.home.title": {} | undefined; "nav.home.slug": {} | undefined; "nav.about.title": {} | undefined; "nav.about.slug": {} | undefined; "nav.cases.title": {} | undefined; "nav.cases.slug": {} | undefined; "nav.solutions.title": {} | undefined; "nav.solutions.slug": {} | undefined; "nav.solutions.items.web.title": {} | undefined; "nav.solutions.items.web.slug": {} | undefined; "nav.solutions.items.graphic.title": {} | undefined; "nav.solutions.items.graphic.slug": {} | undefined; "nav.solutions.items.marketing.title": {} | undefined; "nav.solutions.items.marketing.slug": {} | undefined; "nav.solutions.items.3d.title": {} | undefined; "nav.solutions.items.3d.slug": {} | undefined; "nav.solutions.items.av.title": {} | undefined; "nav.solutions.items.av.slug": {} | undefined; "nav.solutions.items.ai.title": {} | undefined; "nav.solutions.items.ai.slug": {} | undefined; "nav.blog.title": {} | undefined; "nav.blog.slug": {} | undefined; "nav.contact.title": {} | undefined; "nav.contact.slug": {} | undefined; "nav.portfolio.title": {} | undefined; "nav.portfolio.slug": {} | undefined; "others.terms_conditions.title": {} | undefined; "others.privacy_policy.title": {} | undefined; "pages.common.cta.id": {} | undefined; "pages.common.cta.title": {} | undefined; "pages.home.title": {} | undefined; "pages.home.slug": {} | undefined; "pages.home.hero.typewriter.1": {} | undefined; "pages.home.hero.typewriter.2": {} | undefined; "pages.home.hero.typewriter.3": {} | undefined; "pages.home.hero.typewriter.4": {} | undefined; "pages.home.hero.typewriter.5": {} | undefined; "pages.home.hero.typewriter.6": {} | undefined; "pages.home.hero.typewriter.7": {} | undefined; "pages.home.hero.typewriter.8": {} | undefined; "pages.home.hero.typewriter.9": {} | undefined; "pages.home.hero.typewriter.10": {} | undefined; "pages.home.hero.typewriter.11": {} | undefined; "pages.home.hero.typewriter.12": {} | undefined; "pages.home.hero.typewriter.13": {} | undefined; "pages.home.hero.buttons.what_do_we_do": {} | undefined; "pages.home.hero.buttons.discover_our_services": {} | undefined; "pages.home.sections.what_we_do.id": {} | undefined; "pages.home.sections.what_we_do.title": {} | undefined; "pages.home.sections.faq.id": {} | undefined; "pages.home.sections.faq.title": {} | undefined; "pages.home.sections.faq.text": {} | undefined; "pages.home.sections.faq.items.1.question": {} | undefined; "pages.home.sections.faq.items.1.answer": {} | undefined; "pages.home.sections.faq.items.2.question": {} | undefined; "pages.home.sections.faq.items.2.answer": {} | undefined; "pages.home.sections.faq.items.3.question": {} | undefined; "pages.home.sections.faq.items.3.answer": {} | undefined; "pages.home.sections.faq.items.4.question": {} | undefined; "pages.home.sections.faq.items.4.answer": {} | undefined; "pages.about.title": {} | undefined; "pages.about.slug": {} | undefined; "pages.about.more_about_us": {} | undefined; "pages.about.more_about_myself": {} | undefined; "pages.about.more_about_me": {} | undefined; "pages.about.intro": {} | undefined; "pages.about.sections.about_me.id": {} | undefined; "pages.about.sections.about_me.title": {} | undefined; "pages.about.sections.about_me.lead.title": {} | undefined; "pages.about.sections.about_me.lead.text": {} | undefined; "pages.about.sections.about_me.content.title": {} | undefined; "pages.about.sections.about_me.content.text": {} | undefined; "pages.about.sections.difference.id": {} | undefined; "pages.about.sections.difference.title": {} | undefined; "pages.about.sections.difference.subtitle": {} | undefined; "pages.about.sections.difference.items.polyvalence.title": {} | undefined; "pages.about.sections.difference.items.polyvalence.text": {} | undefined; "pages.about.sections.difference.items.transparence.title": {} | undefined; "pages.about.sections.difference.items.transparence.text": {} | undefined; "pages.about.sections.difference.items.efficiency.title": {} | undefined; "pages.about.sections.difference.items.efficiency.text": {} | undefined; "pages.about.sections.difference.items.creativity.title": {} | undefined; "pages.about.sections.difference.items.creativity.text": {} | undefined; "pages.cases.title": {} | undefined; "pages.cases.slug": {} | undefined; "pages.cases.intro": {} | undefined; "pages.solutions.title": {} | undefined; "pages.solutions.slug": {} | undefined; "pages.solutions.sections.features.id": {} | undefined; "pages.solutions.sections.services.id": {} | undefined; "pages.solutions.sections.services.title": {} | undefined; "pages.solutions.sections.portfolio.id": {} | undefined; "pages.solutions.sections.portfolio.title": {} | undefined; "pages.solutions.sections.portfolio.default_intro": {} | undefined; "pages.blog.title": {} | undefined; "pages.blog.slug": {} | undefined; "pages.blog.intro": {} | undefined; "pages.blog.no_posts": {} | undefined; "pages.contact.title": {} | undefined; "pages.contact.slug": {} | undefined; "pages.contact.id": {} | undefined; "pages.portfolio.title": {} | undefined; "pages.portfolio.slug": {} | undefined; "pages.portfolio.intro": {} | undefined; "portfolio_tags.solutions.web": {} | undefined; "portfolio_tags.solutions.graphic": {} | undefined; "portfolio_tags.solutions.seo": {} | undefined; "portfolio_tags.solutions.marketing": {} | undefined; "portfolio_tags.solutions.3d": {} | undefined; "portfolio_tags.solutions.av": {} | undefined; "portfolio_tags.solutions.photo": {} | undefined; "portfolio_tags.solutions.ai": {} | undefined; "portfolio_tags.tags.web_design": {} | undefined; "portfolio_tags.tags.web_development": {} | undefined; "portfolio_tags.tags.web_management": {} | undefined; "portfolio_tags.tags.seo": {} | undefined; "portfolio_tags.tags.marketing": {} | undefined; "portfolio_tags.tags.hosting": {} | undefined; "portfolio_tags.tags.graphic_design": {} | undefined; "portfolio_tags.tags.logo_design": {} | undefined; "portfolio_tags.tags.branding": {} | undefined; "portfolio_tags.tags.print_design": {} | undefined; "portfolio_tags.tags.social_media": {} | undefined; "portfolio_tags.tags.photography": {} | undefined; "portfolio_tags.tags.video": {} | undefined; "portfolio_tags.tags.copywriting": {} | undefined; "portfolio_tags.tags.illustration": {} | undefined; "portfolio_tags.tags.animation": {} | undefined; "portfolio_tags.tags.webshop": {} | undefined; "portfolio_tags.tags.wordpress": {} | undefined; "portfolio_tags.tags.content_creation": {} | undefined; "portfolio_tags.tags.content_management": {} | undefined; "services.common.our_services": {} | undefined; "services.common.leads.cta": {} | undefined; "services.web.title": {} | undefined; "services.web.title_short": {} | undefined; "services.web.slug": {} | undefined; "services.web.intro": {} | undefined; "services.web.intro_card.title": {} | undefined; "services.web.intro_card.text": {} | undefined; "services.web.services_intro": {} | undefined; "services.web.features.fast.title": {} | undefined; "services.web.features.fast.title_alt": {} | undefined; "services.web.features.fast.text": {} | undefined; "services.web.features.responsive.title": {} | undefined; "services.web.features.responsive.title_alt": {} | undefined; "services.web.features.responsive.text": {} | undefined; "services.web.features.secure.title": {} | undefined; "services.web.features.secure.title_alt": {} | undefined; "services.web.features.secure.text": {} | undefined; "services.web.features.accessible.title": {} | undefined; "services.web.features.accessible.title_alt": {} | undefined; "services.web.features.accessible.text": {} | undefined; "services.web.features.seo.title": {} | undefined; "services.web.features.seo.title_alt": {} | undefined; "services.web.features.seo.text": {} | undefined; "services.web.features.multilingual.title": {} | undefined; "services.web.features.multilingual.title_alt": {} | undefined; "services.web.features.multilingual.text": {} | undefined; "services.web.features.scalable.title": {} | undefined; "services.web.features.scalable.title_alt": {} | undefined; "services.web.features.scalable.text": {} | undefined; "services.web.features.support.title": {} | undefined; "services.web.features.support.title_alt": {} | undefined; "services.web.features.support.text": {} | undefined; "services.web.services.design.title": {} | undefined; "services.web.services.design.text": {} | undefined; "services.web.services.development.title": {} | undefined; "services.web.services.development.text": {} | undefined; "services.web.services.optimization.title": {} | undefined; "services.web.services.optimization.text": {} | undefined; "services.web.services.hosting.title": {} | undefined; "services.web.services.hosting.text": {} | undefined; "services.web.services.accessibility.title": {} | undefined; "services.web.services.accessibility.text": {} | undefined; "services.web.services.email_hosting.title": {} | undefined; "services.web.services.email_hosting.text": {} | undefined; "services.graphic.title": {} | undefined; "services.graphic.title_short": {} | undefined; "services.graphic.slug": {} | undefined; "services.graphic.intro": {} | undefined; "services.graphic.intro_card.title": {} | undefined; "services.graphic.intro_card.text": {} | undefined; "services.graphic.features.all_in_one.title": {} | undefined; "services.graphic.features.all_in_one.title_alt": {} | undefined; "services.graphic.features.all_in_one.text": {} | undefined; "services.graphic.features.concepts.title": {} | undefined; "services.graphic.features.concepts.title_alt": {} | undefined; "services.graphic.features.concepts.text": {} | undefined; "services.graphic.features.tailored.title": {} | undefined; "services.graphic.features.tailored.title_alt": {} | undefined; "services.graphic.features.tailored.text": {} | undefined; "services.graphic.services_intro": {} | undefined; "services.graphic.services.branding.title": {} | undefined; "services.graphic.services.branding.text": {} | undefined; "services.graphic.services.printed.title": {} | undefined; "services.graphic.services.printed.text": {} | undefined; "services.graphic.services.editorial.title": {} | undefined; "services.graphic.services.editorial.text": {} | undefined; "services.marketing.title": {} | undefined; "services.marketing.title_short": {} | undefined; "services.marketing.slug": {} | undefined; "services.marketing.intro": {} | undefined; "services.marketing.intro_card.title": {} | undefined; "services.marketing.intro_card.text": {} | undefined; "services.marketing.features.analysis.title": {} | undefined; "services.marketing.features.analysis.title_alt": {} | undefined; "services.marketing.features.analysis.text": {} | undefined; "services.marketing.features.brand.title": {} | undefined; "services.marketing.features.brand.title_alt": {} | undefined; "services.marketing.features.brand.text": {} | undefined; "services.marketing.features.results.title": {} | undefined; "services.marketing.features.results.title_alt": {} | undefined; "services.marketing.features.results.text": {} | undefined; "services.marketing.services_intro": {} | undefined; "services.marketing.services.analytics.title": {} | undefined; "services.marketing.services.analytics.text": {} | undefined; "services.marketing.services.seo.title": {} | undefined; "services.marketing.services.seo.text": {} | undefined; "services.marketing.services.ads.title": {} | undefined; "services.marketing.services.ads.text": {} | undefined; "services.marketing.services.smm.title": {} | undefined; "services.marketing.services.smm.text": {} | undefined; "services.'3d'.title": {} | undefined; "services.'3d'.title_short": {} | undefined; "services.'3d'.slug": {} | undefined; "services.'3d'.intro": {} | undefined; "services.'3d'.intro_card.title": {} | undefined; "services.'3d'.intro_card.text": {} | undefined; "services.'3d'.features.detail.title": {} | undefined; "services.'3d'.features.detail.title_alt": {} | undefined; "services.'3d'.features.detail.text": {} | undefined; "services.'3d'.features.natural.title": {} | undefined; "services.'3d'.features.natural.title_alt": {} | undefined; "services.'3d'.features.natural.text": {} | undefined; "services.'3d'.features.finish.title": {} | undefined; "services.'3d'.features.finish.title_alt": {} | undefined; "services.'3d'.features.finish.text": {} | undefined; "services.'3d'.services_intro": {} | undefined; "services.'3d'.services.models.title": {} | undefined; "services.'3d'.services.models.text": {} | undefined; "services.'3d'.services.animations.title": {} | undefined; "services.'3d'.services.animations.text": {} | undefined; "services.'3d'.services.printing.title": {} | undefined; "services.'3d'.services.printing.text": {} | undefined; "services.av.title": {} | undefined; "services.av.title_short": {} | undefined; "services.av.slug": {} | undefined; "services.av.intro": {} | undefined; "services.av.intro_card.title": {} | undefined; "services.av.intro_card.text": {} | undefined; "services.av.features.personal.title": {} | undefined; "services.av.features.personal.title_alt": {} | undefined; "services.av.features.personal.text": {} | undefined; "services.av.features.multipurpose.title": {} | undefined; "services.av.features.multipurpose.title_alt": {} | undefined; "services.av.features.multipurpose.text": {} | undefined; "services.av.features.finish.title": {} | undefined; "services.av.features.finish.title_alt": {} | undefined; "services.av.features.finish.text": {} | undefined; "services.av.services_intro": {} | undefined; "services.av.services.photo.title": {} | undefined; "services.av.services.photo.text": {} | undefined; "services.av.services.video.title": {} | undefined; "services.av.services.video.text": {} | undefined; "services.av.services.edit.title": {} | undefined; "services.av.services.edit.text": {} | undefined; "services.av.services.vfx.title": {} | undefined; "services.av.services.vfx.text": {} | undefined; "services.av.services.subtitle.title": {} | undefined; "services.av.services.subtitle.text": {} | undefined; "services.av.services.animation.title": {} | undefined; "services.av.services.animation.text": {} | undefined; "services.ai.title": {} | undefined; "services.ai.title_short": {} | undefined; "services.ai.slug": {} | undefined; "services.ai.intro": {} | undefined; "services.ai.intro_card.title": {} | undefined; "services.ai.intro_card.text": {} | undefined; "services.ai.services_intro": {} | undefined; }

declare module "astro-i18n" {
	export * from "astro-i18n/"
	
	export function l<Uri extends RouteUri>(
		route: Uri | string & {},
		...args: Uri extends keyof RouteParams
			? undefined extends RouteParams[Uri]
				? [params?: Record<string, string>, targetLangCode?: LangCode, routeLangCode?: LangCode]
				: [params: RouteParams[Uri], targetLangCode?: LangCode, routeLangCode?: LangCode]
			: [params?: Record<string, string>, targetLangCode?: LangCode, routeLangCode?: LangCode]
	): string
	
	export function t<Path extends TranslationPath>(
		path: Path | string & {},
		...args: undefined extends TranslationOptions[Path]
			? [options?: keyof TranslationOptions extends Path ? Record<string, unknown> : TranslationOptions[Path], langCode?: LangCode]
			: [options: TranslationOptions[Path], langCode?: LangCode]
	): string
	
	export function extractRouteLangCode(route: string): LangCode | undefined
	
	type Translation = string | { [translationKey: string]: string | Translation }
	type Translations = { [langCode: string]: Record<string, Translation> }
	type RouteTranslations = { [langCode: string]: Record<string, string> }
	type InterpolationFormatter = (value: unknown, ...args: unknown[]) => string
	class AstroI18n {
		defaultLangCode: DefaultLangCode
		supportedLangCodes: SupportedLangCode[]
		showDefaultLangCode: boolean
		translations: Translations
		routeTranslations: RouteTranslations
		get langCodes(): LangCode[]
		get langCode(): LangCode
		set langCode(langCode: LangCode)
		get formatters(): Record<string, InterpolationFormatter>
		init(Astro: { url: URL }, formatters?: Record<string, InterpolationFormatter>): void
		addTranslations(translations: Translations): void
		addRouteTranslations(routeTranslations: RouteTranslations): void
		getFormatter(name: string): InterpolationFormatter | undefined
		setFormatter(name: string, formatter: InterpolationFormatter): void
		deleteFormatter(name: string): void
	}
	export const astroI18n: AstroI18n
}
