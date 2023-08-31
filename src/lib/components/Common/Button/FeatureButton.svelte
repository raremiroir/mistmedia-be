<script lang='ts'>
   import { currentModal } from "@/lib/stores/components";
   import type { ModalSettings } from "@skeletonlabs/skeleton";
   import { modalStore } from "@/lib/stores/components";
   import Icon from "@comp/Media/Icon.svelte";

   // IMPORT TYPES

   export let title: string = '';
   export let title_alt: string = '';
   export let text: string = '';
   export let icon: string = '';
   export let animated: boolean = false;

   $: title, title_alt, text, icon, animated;

   // Modal: FEATURES
   const modalFeature: ModalSettings = {
      type: 'component',
      component: 'defaultModal',
   };
   const openFeatureModal = (title: string, slot: string, icon: string = '') => {
      $currentModal.title = title;
      $currentModal.slot = slot;
      $currentModal.icon = icon;
      $modalStore.trigger(modalFeature);
   }
</script>

<button 
   on:click={() => openFeatureModal(title_alt, text, icon)}
   class="p-4 h-16 col-span-1 group mist-btn mist-btn-lg mist-variant-alt-primary">
   <Icon {icon} size={70} class="w-10 text-inherit" />
   <h2 class="smaller">{title}</h2>
</button>