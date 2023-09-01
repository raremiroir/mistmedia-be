<script lang="ts">
   // INIT SKELETON
   import { storePopup, initializeStores } from "@skeletonlabs/skeleton";
   initializeStores();
   // INIT FLOATING UI
   import { computePosition, autoUpdate, offset, shift, flip, arrow } from '@floating-ui/dom';
   storePopup.set({ computePosition, autoUpdate, offset, shift, flip, arrow });

</script>

<svelte:head>

</svelte:head>

