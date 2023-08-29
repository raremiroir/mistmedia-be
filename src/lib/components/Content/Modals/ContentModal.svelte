<script lang="ts">
   import { t } from "astro-i18n";
	import Icon from "@iconify/svelte";
	import { modalStore } from "@skeletonlabs/skeleton";
   import AnimIcon from "../../Media/AnimIcon/AnimIcon.svelte";

   export let title: string = "Modal Title";
   export let icon: string = '';
   $: title;
   $: icon;
</script>


<div class="
   fixed left-0 top-0 bottom-0
   bg-white dark:bg-slate-900
   shadow-xl p-8 
   rounded-none 
   min-w-[50vw] sm:min-w-[30vw] md:min-w-[20vw] lg:min-w-[10vw] xl:min-w-[10vw] 
   max-w-screen sm:max-w-[70vw] md:max-w-[50vw] lg:max-w-[40vw] xl:max-w-[30vw] 
   w-fit">
   <div class="flex justify-between mb-4 border-b-2 border-b-primary-300 dark:border-primary-400/60 pb-2">
      <div class="flex items-center justify-start gap-2 md:gap-4">
         {#if icon !== ''}
            <AnimIcon icon={icon} size={40} />
            <Icon icon={icon} class="w-8 !text-primary-800/60 dark:!text-primary-400/60" />
         {/if}
         <span class="h4 !uppercase !text-primary-800/60 dark:!text-primary-400/60">
            {title}
         </span>
      </div>
      <button 
         title={t('btn.close')} aria-label={t('btn.close')}
         on:click={() => modalStore.close()}
         class="
            ml-2 h-6 w-6 rounded-full flex items-center justify-center 
            bg-error-500 hover:bg-error-700
            text-white trans-fast">
         <Icon icon="material-symbols:close-rounded" class="text-white" />
      </button>
   </div>
   
   <div>
      <slot />
   </div>

</div>
