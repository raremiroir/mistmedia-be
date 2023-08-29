<script lang='ts'>
   import { popup, type PopupSettings } from "@skeletonlabs/skeleton";
   import type { NavItemType } from "./navbar";
   import Icon from "@iconify/svelte";
   import { fade } from "svelte/transition";

   export let title:string = ''
   export let href:string = ''
   export let items:NavItemType[] = [];
   export let pathname: string = '';
   $: title, href, items, pathname;

   export let mobile:boolean = false;

   let klass:string = ''
   export { klass as class };
   
   $: hasDropdown = items.length > 0 && items !== undefined && items !== null;

   const linkStyle = `
         btn group trans-def
         flex items-center justify-center gap-1
         ring-2 capitalize tracking-wider
         ${ mobile 
            ? `text-lg w-36 h-12` 
            : `text-sm w-28 h-10`
         } 
         ${pathname === href 
            ? 'variant-ghost-primary ring-primary-800 text-primary-800 dark:text-primary-300' 
            : 'ring-transparent text-primary-800-100-token hover:variant-soft-primary'
         }
         hover:bg-primary-400/40 hover:text-primary-900`;

   const clickDropdown: PopupSettings = {
      event: 'click',
      target: 'clickDropdown',
      placement: 'bottom',
   };

</script>

<li class=' {klass}'>
   {#if hasDropdown}
      <button use:popup={clickDropdown} class="{linkStyle}">
         {title}
         <Icon icon="ph:caret-down-fill" class="w-3" />
      </button>
      <div 
         transition:fade={{duration: 200}}
         class="
            shadow-md-noblur rounded-tile-2xl 
            bg-white dark:bg-slate-600
            shadow-primary-200 dark:shadow-primary-800
            p-4 w-fit h-fit trans-def
         " 
         data-popup="clickDropdown">
         <ul class="grid grid-cols-2 grid-rows-3 gap-2">
            {#each items as {title, href}}
               <li class="col-span-1 row-span-1">
                  <a {href} class="
                        btn btn-sm shadow-inner-sm-noblur
                        variant-soft-surface hover:variant-soft-primary
                        w-full text-start">
                     {title}
                  </a>
               </li>
            {/each}
         </ul>
      </div>
   {:else}
      <a {href} class="{linkStyle}">
         {title}
      </a>
   {/if}
</li>