<script lang='ts'>
   import Typewriter from "svelte-typewriter/Typewriter.svelte";
   import AnimIcon from "@/lib/components/Media/AnimIcon/AnimIcon.svelte";

   export let subtitle:string = ''
   $: subtitle;

   export let hasLogo: boolean = false;

   let klass:string = ''
   export { klass as class };
</script>

<div class="w-def {hasLogo ? 'grid grid-cols-4 gap-8' : ''}">

   {#if hasLogo}
      <div class="col-span-1">
         <AnimIcon 
            logo size={80} 
            animProps={{
               light: 'fill-[#575d61] dark:fill-surface-100',
               dark: 'fill-[#373c3e] dark:fill-surface-300' 
            }} 
         />
      </div>
   {/if}
   
   <div class='
         {hasLogo ? 'col-span-3' : ''}
         flex flex-col gap-0 items-start justify-start
         {klass}'>
      <h1><slot>Title</slot></h1>
      {#if subtitle !== ''}
      
      <Typewriter 
         mode="concurrent" cursor delay={300} keepCursorOnFinish
         interval={10} element="span">
         <p class="text-2xl font-titlemono italic text-surface-700-200-token">
               {subtitle}
         </p>
      </Typewriter>
      {/if}
   </div>
</div>
