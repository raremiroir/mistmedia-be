<script lang="ts">
   export let element: string = "div";	

   let klass:string = "";
   export {klass as class};
</script>

<svelte:element 
   this={element}
   role="tablist"
   aria-multiselectable="true"
   id="accordion"
   class="flex flex-col gap-4 my-8 w-full {klass}"
>
   <slot/>
</svelte:element>