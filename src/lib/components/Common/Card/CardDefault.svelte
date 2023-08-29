
<script lang="ts">
   import { t } from "astro-i18n";
   import Icon from "@iconify/svelte";

   export let title: string;
   export let icon: string;
   export let href: string;
</script>

<article class="card card-hover card-variant-alt-primary">
   <div class="header">
      <Icon {icon} class="w-6"/>
      <h3>{title}</h3>
   </div>
   <div class="content">
      <p><slot/></p>
      <div class="actions">
         <a {href} role="button" 
            aria-label="{t('common.btn.more_info')} {t('common.word.about')} {title}" 
            title="{t('common.btn.more_info')} {t('common.word.about')} {title}"
            class="btn variant-outline-primary text-primary-600 hover:text-primary-900 hover:ring-primary-900 hover:variant-ghost-primary ring-2 hover:ring-2 capitalize">
            {t('common.btn.more_info')}
         </a>
      </div>
   </div>
</article>