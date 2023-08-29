<script lang="ts">
   import LogoIcon from "./LogoIcon.svelte";
   import LogoLettering from "./LogoLettering.svelte";

   export let size: number|'full' = 'full';
   export let color:string = 'fill-surface-800 dark:fill-white'
   export let color2:string = 'fill-surface-600 dark:fill-surface-200'

   let klass = '';
   export { klass as class };

   export let type: 'icon'|'lettering'|'both'|'animIcon' = 'both';

</script>

{#if type === 'both'}
   <div class="flex flex-row items-center justify-start {klass}">
      <div class="w-1/6 pb-0.5">
         <LogoIcon width={size === 'full' ? 'full' : size / 2} dark={color} light={color2} />
      </div>
      <div class="w-5/6">
         <LogoLettering width={size === 'full' ? 'full' : size} color={color}  />
      </div>
   </div>
{:else if type === 'icon'}
   <LogoIcon width={size} dark={color} light={color2} />
{:else if type === 'lettering'}
   <LogoLettering width={size} color={color}  />
{:else if type === 'animIcon'}
   <LogoIcon width={size} dark={color} light={color2} />
{/if}