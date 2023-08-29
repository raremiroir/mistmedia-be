<script lang="ts">
   import { locale } from '@/stores/i18n';
   import Icon from '@iconify/svelte'

   interface languageMapping {
      [localeCode: string]: string;
   }

   export let languageMapping: languageMapping = { en: 'English', nl: 'Nederlands' };
   export let pathname: string = '';
   export let ariaLabel: string = '';
   let klass: string = '';
   export { klass as class };

   $: languageMapping, pathname, ariaLabel;

	import { popup, type PopupSettings } from '@skeletonlabs/skeleton';
	
   const langDropdown: PopupSettings = {
      event: 'click',
      target: 'langDropdown',
      placement: 'bottom',
      closeQuery: '#closePopup',
   }
</script>

<button
   title="{ariaLabel}" aria-label="{ariaLabel}"
   class="
      btn btn-sm opacity-60 hover:opacity-100
      variant-outline-surface 
      hover:variant-ghost-primary 
      hover:text-primary-900 dark:hover:text-primary-200 
      hover:ring-primary-700 dark:hover:ring-primary 
      flex items-center justify-center
      "
   use:popup={langDropdown}
>	
   <Icon class="w-4 h-auto" icon={`emojione:flag-for-${$locale === 'nl' ? 'belgium' : $locale === 'en' ? 'united-kingdom' : ''}`} />
   <span class="text-xs">|</span>
   <span class="pt-0.5 text-xs">{$locale.toUpperCase()}</span>
</button>

<div 
   data-popup="langDropdown" 
   class="
      w-fit h-fit p-2 variant-filled-surface 
      !bg-white dark:!bg-slate-600
      shadow-lg rounded-tile-xl">
   <ul class="flex flex-col gap-1 {klass}">

      <slot />

      <!-- {#each langs as l}
         <li class="w-full">
            <a 
               title="{t('common:actions.change_language_to')} {l}"
               aria-label="{t('common:actions.change_language_to')} {l}"
               href={`${localizePath(pathname, l)}`}
               class="
                  btn btn-sm px-4 py-1 w-full 
                  flex items-center justify-start gap-1
                  {l === $locale ? 'variant-soft-primary' : 'hover:variant-outline-primary'}
            ">
               <Icon class="w-6" icon={`emojione:flag-for-${l === 'nl' ? 'belgium' : l === 'en' ? 'united-kingdom' : ''}`} />
               <div class="text-primary-700-200-token flex flex-col items-start justify-start w-full text-sm leading-snug">
                  { l === 'en' ? 'English' 
                  : l === 'nl' ? 'Nederlands' 
                  : 'Error'}
                  <span class="text-xs italic text-surface-600 dark:text-surface-400 capitalize drop-shadow-none font-medium">
                     {t("common:geo." + l + ".lang")}
                  </span>
               </div>
            </a>
         </li>
      {/each} -->
   </ul>
</div>