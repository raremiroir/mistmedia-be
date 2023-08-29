<script lang="ts">
	import Icon from "@iconify/svelte";
	import { slide } from "svelte/transition";

   export let icon: string;
   export let title: string;

   export let element: string = 'div';

   let opened = false;
</script>

<svelte:element
   this={element}
   class="
      mist-btn mist-btn-xl !p-3 sm:!p-4 w-full card group trans-fast
      flex flex-col justify-start items-start cursor-pointer
      mist-variant-alt-primary"
   role="tab" tabindex="0" 
   aria-expanded={opened} aria-controls="accordion-item"
   on:click={() => opened = !opened}
   on:keydown={(e) => {
      if (e.key === "Enter" || e.key === "Space") opened = !opened;
   }}
>
   <div class="w-full flex justify-between items-center gap-2 sm:gap-4 lg:gap-8" > 
      <div class="flex justify-start items-center gap-3 sm:gap-4 lg:gap-8">
         <Icon {icon} class="w-6 xs:w-7 sm:w-8 md:w-12 " />
         <h3 class=" lowercase first-letter:uppercase">{title}</h3>
      </div>
      <Icon 
         icon="icon-park-solid:right-c" 
         class="w-8 md:w-12 trans-fast { opened ? 'rotate-90' : 'rotate-0' }" />
   </div>

   {#if opened}
      <div
         transition:slide={{ axis: 'y', duration: 300 }}
         role="tabpanel" id="accordion-item"
         class="mt-8 p-0 w-full flex flex-col gap-2 items-start justify-start normal-case"
      >
         <slot>Content </slot>
      </div>
   {/if}

</svelte:element>