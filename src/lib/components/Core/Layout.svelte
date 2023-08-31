<script lang="ts">
   // INIT SKELETON COMPONENTS
   import { AppShell, Modal, storePopup, initializeStores } from "@skeletonlabs/skeleton";
   import { currentModalRegistry } from "@/stores";
   import { computePosition, autoUpdate, offset, shift, flip, arrow } from '@floating-ui/dom';

   initializeStores();


   storePopup.set({ computePosition, autoUpdate, offset, shift, flip, arrow });
</script>

<!-- Implement a single instance of modal component in app's root layout above App Shell (if present) -->
<Modal 
   components={$currentModalRegistry}
   flyX={-150} flyY={0} flyOpacity={0}
   zIndex='z-[9999]'
/>

<AppShell class="min-h-screen">
   <slot name="header" slot="header" />
   <svelte:fragment slot="pageHeader">
      <div class="w-full relative mt-24 flex flex-col">
         <slot name="breadcrumbs"></slot>
         <slot name="hero"></slot>
      </div>
   </svelte:fragment>
   <main class="w-full mx-auto p-0 m-0">
      <slot></slot>
   </main>
   <slot name="footer" slot="pageFooter" />
</AppShell>