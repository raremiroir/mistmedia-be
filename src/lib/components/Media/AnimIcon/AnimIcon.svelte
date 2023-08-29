<script lang="ts">
    import MistLogoAnim from './MistLogoAnim.svelte';
    import {
      Accessibility, ArrowsGrow, CaretDown, ChatBubble, CorporateBranding,
      CubeIcon, DevicesResponsive, EnvelopeSend, FacebookIcon, TwitterIcon, GearsTurning, GithubIcon,
      InstagramIcon, LangSwitchIcon, LightningBolt, LightWeight, LinkedInIcon, MistMediaIcon,
      MoonIcon, PortfolioCards, PricingTag, QuestionMarks, Security, SunIcon, TrianglesIcon,
      WebStack
   } from './icons'
   const iconAnimationsAssets: {[key:string]: any} = {
      Accessibility, ArrowsGrow, CaretDown, ChatBubble, CorporateBranding,
      CubeIcon, DevicesResponsive, EnvelopeSend, FacebookIcon, TwitterIcon, GearsTurning, GithubIcon,
      InstagramIcon, LangSwitchIcon, LightningBolt, LightWeight, LinkedInIcon, MistMediaIcon,
      MoonIcon, PortfolioCards, PricingTag, QuestionMarks, Security, SunIcon, TrianglesIcon,
      WebStack
   }
   type AnimIconProps = {
      dark?: string,
      norm?: string,
      light?: string,
      strokeDark?: string,
      bgColor?: string,
      darkBgColor?: string,
      opacity?: string,
   }

   export let size: number|'full' = 150;
   export let icon = '';
   export let logo = false;
   export let animProps: AnimIconProps = {
      dark: 'fill-primary-800 dark:fill-primary-400',
      norm: 'fill-primary-600',
      light: 'fill-primary',
      strokeDark: 'stroke-primary-800',
      bgColor: 'surface',
      darkBgColor: 'surface-500',
      opacity: '70',
   }
   let klass:string = '';
   export { klass as class }; 

   $: props = {
      size: size,
      dark: animProps.dark,
      norm: animProps.norm,
      light: animProps.light,
      strokeDark: animProps.strokeDark,
      bgColor: animProps.bgColor,
      darkBgColor: animProps.darkBgColor,
      opacity: animProps.opacity,
   }


   $: svgComp = logo ? MistLogoAnim : iconAnimationsAssets[icon];
</script>

<svelte:component this={svgComp} class={klass} {...props}/>