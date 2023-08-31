<script lang="ts">
   import { t } from 'astro-i18n';
   import ContentModal from "./ContentModal.svelte";
   import { currentPortfolioItem } from '@/lib/stores/components';
</script>

<ContentModal title={$currentPortfolioItem.title}>
   <article class="flex flex-col gap-4 items-center justify-start">
      <!-- Tags -->
      <div class="w-full flex flex-col gap-2 items-start justify-start"> 
         <div class="w-full flex items-center justify-start gap-2">
            <!-- TODO: add href -->
            <a href="" class="chip variant-filled-secondary"> 
               {$currentPortfolioItem.client.name}
            </a>
            <a href="" class="chip variant-filled-primary !text-white">
               {t(`portfolio_tags.solutions.${$currentPortfolioItem}.solution]`)}
            </a>
         </div>
         <div class="flex flex-wrap gap-2">
            {#each $currentPortfolioItem.tags as tag}
               <span class="badge variant-filled-surface !text-black dark:!text-slate-950">
                  {t(`portfolio_tags.tags.${tag}`)}
               </span>
            {/each}
         </div>
      </div>
      <!-- End Tags --> 
      <div class="grid grid-cols-3 gap-4 lg:gap-8">
         <div class="col-span-1 flex items-center justify-center">
            <!-- <Image  
               src={$currentPortfolioItem.client.logo} 
               alt="Logo {$currentPortfolioItem.client.name}" 
               width={120} quality={60}
            /> -->
         </div>
         <p class="col-span-2 !text-surface-900-50-token">{@html $currentPortfolioItem.description}</p>
      </div>
      <!-- Image -->
      <div class="w-full flex items-center justify-center">
         <!-- <Image  
            src={$currentPortfolioItem.img} 
            alt={$currentPortfolioItem.title}
            width={400}
            class="h-full w-full"
         /> -->
      </div>
      <!-- End Image -->
      <!-- Button -->
      {#if $currentPortfolioItem.href !== ''}
         <div class="flex justify-end w-full">
            <a href={$currentPortfolioItem.href} target="_blank" 
               aria-label="{t('common.btn.visit_website_of')} {$currentPortfolioItem.client.name}" title="{t('common.btn.visit_website_of')} {$currentPortfolioItem.client.name}" 
               class="mist-btn mist-btn-md mist-variant-filled-primary">
               {t('common.btn.visit_website')}
            </a>
         </div>
      {/if}
      <!-- End Button -->
   </article>
</ContentModal>