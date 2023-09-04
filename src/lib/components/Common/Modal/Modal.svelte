<script lang="ts">
   import { fade, fly } from "svelte/transition";
   import { clickOutside } from "@comp/svelte-actions";

   export let title: string;
   export let icon: string = '';
   export let hasFooter: boolean = false;

   let modalOpen = false;

   // Styles
   const styles = {
      modal: 'fixed z-[999] left-0 top-0 w-full h-full overflow-auto bg-primary-800/30 backdrop-blur-md flex items-center justify-center',
      inner: `relative w-4/5 bg-surface-50 my-10 mx-auto border border-surface-400 shadow-xl rounded-tile-xl overflow-hidden`,
      closer: `trans-fast h-10 w-10 pb-1 text-lg font-bold cursor-pointer
               bg-error-600 text-surface-200 hover:text-surface-50 hover:bg-error-800 hover:no-underline
               flex items-center justify-center rounded-full`,
      content: {
         header: 'py-4 px-6 bg-surface-300 w-full flex items-center justify-between gap-6',
         body: 'py-4 px-6 overflow-scroll',
         footer: 'py-4 px-6 bg-surface-700 color-white',
      }
   }
</script>

<svelte:window 
   on:keydown|preventDefault={(e) => { 
      if (e.key === 'Escape') {
         modalOpen = false;
      }
   }}
/>

<!-- Trigger/Open The Modal -->
<div 
   role="button" tabindex="0"
   on:click|stopPropagation={(e) => { modalOpen = !modalOpen;}} 
   on:keydown|preventDefault={(e) => { if (e.key === 'Enter' || e.key === ' ' ) modalOpen = !modalOpen; }}
>
   <slot name="trigger">Open Modal</slot>
</div>

<!-- The Modal -->
{#if modalOpen}
   <div class={styles.modal} transition:fade={{duration: 250}}>
   <!-- Modal content -->
      <div 
         role="dialog" aria-modal="true" aria-label={title}
         class={styles.inner} 
         transition:fly={{duration: 250, y: 50}}
         use:clickOutside on:click_outside={() => { modalOpen = false; }}
      >
         <!-- Header -->
         <div class={styles.content.header}>
            <h2 class="small" id="modal-title">{title}</h2>
            <button type="button" tabindex="0" class={styles.closer}
               on:click|stopPropagation={(e) => { modalOpen = !modalOpen;}} 
               on:keydown|preventDefault={(e) => { if ( e.key === 'Enter' || e.key === ' ') modalOpen = !modalOpen; }}
            >&times;</button>
         </div>
         <!-- Body -->
         <div class={styles.content.body}>
            <slot>
               <p>Some text in the Modal Body</p>
               <p>Some other text...</p>
            </slot>
         </div>
         <!-- Footer -->
         {#if hasFooter}
            <div class={styles.content.footer}>
               <slot name="footer">
               </slot>
            </div>
         {/if}
      </div>
   </div>
{/if}