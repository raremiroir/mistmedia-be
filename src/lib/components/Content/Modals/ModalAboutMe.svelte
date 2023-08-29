<script lang="ts">
   import { t } from "astro-i18n";
   import ContentModal from "./ContentModal.svelte";

   export let title: string = "Modal Title";
</script>

<ContentModal {title}>
   <h3>{t('pages.about.sections.about_me.content.title')}</h3><br/><br/>
   <p>{@html t('pages.about.sections.about_me.content.text')}</p>
</ContentModal>