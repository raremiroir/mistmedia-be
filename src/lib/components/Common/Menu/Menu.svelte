<script lang="ts">
   import { fade, fly, slide } from "svelte/transition";

   export let width: string = 'w-52';
   export let triggerClass: string = 'mist-btn mist-btn-lg mist-variant-primary';
   export let activeClass: string = 'bg-primary-600/40';

   let menuOpen = false;
</script>

<svelte:window 
   on:keydown|preventDefault={(e) => { 
      if (e.key === 'Escape') {
         menuOpen = false;
      }
   }}
/>

<div 
   role="button" tabindex="0" 
   class="relative group w-full flex flex-col items-center justify-start"
   on:click={() => { menuOpen = true;}}
   on:keydown={(e) => { 
      if ( (!e.shiftKey && e.key === 'Tab') 
         || e.key === 'Enter'
         || e.key === ' '
      ) menuOpen = true;
   }}
>
   
   <button 
      on:click|stopPropagation={(e) => { menuOpen = !menuOpen;}} 
      on:keydown|preventDefault={(e) => { 
      if ( (!e.shiftKey && e.key === 'Tab') 
         || e.key === 'Enter'
         || e.key === ' '
      ) menuOpen = !menuOpen;
   }}
      class="{triggerClass} { menuOpen ? activeClass : '' }"><slot>Trigger</slot></button>

   {#if menuOpen}
      <div 
         class="shadow-md-noblur rounded-tile-lg mt-1 top-10 absolute z-99 overflow-hidden"
         transition:fade={{ duration: 200 }}>
         <div 
            transition:fly={{ duration: 200, y: -15 }}
            role="menu" 
            class=" 
               flex flex-col gap-2 
               bg-white {width} z-99 p-2 
            ">
            <slot name="content"></slot>
         </div>
      </div>
   {/if}
</div>