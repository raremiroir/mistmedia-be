<script lang="ts">
   import Iconify from "@iconify/svelte";
   import AnimIcon from "./AnimIcon/AnimIcon.svelte";

   export let icon: string = '';

   let isAnimIcon: boolean = false;
   $: isAnimIcon = icon.includes(':') ? false : true;

   export let size: number = 70;
   let klass: string = ''
   export { klass as class };
</script>

{#if isAnimIcon}
      <AnimIcon {icon} {size} />
{:else}
      <Iconify {icon} class="h-auto text-inherit {klass}" />
{/if}
