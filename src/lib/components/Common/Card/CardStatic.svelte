<script lang="ts">
import Icon from "@iconify/svelte";
export let element: string = 'div';
export let icon: string = '';
export let title: string = '';
</script>

<svelte:element this={element} class="col-span-1 card card-variant-static group">
   <div class="flex items-center justify-start gap-4">
      <Icon {icon} class="w-8 group-hover:text-primary-800" />
      <h3>{title}</h3>
   </div>
   <p><slot/></p>
</svelte:element>