import { servicesIcons } from '@/lib/config/icons';

export interface ServiceItem {
   enabled: boolean,
   icon: string,
   slug: string,
   content: {
      features: { [key: string]: string };
      services: { [key: string]: string };
   }
}

export const services: { [key: string]: ServiceItem } = {
   web: {
      enabled: true,
      icon: servicesIcons.web,
      slug: 'web',
      content: {
         features: {
            fast: 'LightningBolt', 
            responsive: 'DevicesResponsive', 
            secure: 'Security', 
            accessible: 'Accessibility', 
            seo: 'CorporateBranding', 
            multilingual: 'ArrowsGrow', 
            scalable: 'GearsTurning', 
            support: 'QuestionMarks'
         },
         services: {
            design: 'ph:layout-duotone',
            development: 'ph:code-simple-duotone',
            optimization: 'ph:rocket-launch-duotone',
            hosting: 'ph:broadcast-duotone',
            accessibility: 'ph:mask-happy-duotone',
            email_hosting: 'ph:envelope-duotone',
         }
      }
   },
   graphic: {
      enabled: true,
      icon: servicesIcons.graphic,
      slug: `grafisch-ontwerp`,
      content: {
         features: {
            all_in_one: 'ph:package-duotone',
            concepts: 'ph:circles-three-plus-duotone',
            tailored: 'ph:user-focus-duotone',
         },
         services: {
            branding: 'ph:crown-simple-duotone',	
            printed: 'ph:printer-duotone',
            editorial: 'ph:book-duotone',
         }
      }
   },
   marketing: {
      enabled: true,
      icon: servicesIcons.marketing,
      slug: `online-marketing`,
      content: {
         features: {
            analysis: 'ph:binoculars-duotone',
            brand: 'ph:crown-simple-duotone',
            results: 'ph:chart-line-up-duotone',
         },
         services: {
            analytics: 'ph:projector-screen-chart-duotone',
            seo: 'ph:rocket-launch-duotone',
            ads: 'ph:megaphone-duotone',
            smm: 'ph:chats-duotone',
         }
      }
   },
   three_d: {
      enabled: true,
      icon: servicesIcons['3d'],
      slug: `3d-visualisatie`,
      content: {
         features: {
            detail: 'ph:eye-duotone',
            natural: 'ph:bezier-curve-duotone',
            finish: 'ph:package-duotone',
         },
         services: {
            models: 'ph:cube-duotone',
            animations: 'ph:person-simple-run-duotone',
            printing: 'ph:printer-duotone',
         }
      }
   },
   av: {
      enabled: true,
      icon: servicesIcons.av,
      slug: `audiovisueel`,
      content: {
         features: {
            personal: 'ph:user-focus-duotone',
            multipurpose: 'ph-bezier-curve-duotone',
            finish: 'ph:package-duotone',
         },
         services: {
            photo: 'ph:cube-duotone',
            video: 'ph:intersect-duotone',
            edit: 'ph:film-strip-duotone',
            vfx: 'ph:sparkle-duotone',
         
            animation: 'ph:person-simple-run-duotone',
         }
      }
   },
   ai: {
      enabled: true,
      icon: servicesIcons.ai,
      slug: `artificiele-intelligentie`,
      content: {
         features: {

         },
         services: {}
      }
   },
}

export default services;