<script lang="ts">
   import { t } from "astro-i18n";
	import { fade } from "svelte/transition";
   import Icon from "@iconify/svelte";

   export let name: string;
   export let label: string;
   $: label;
   export let value: string = "";
   $: value;
   export let type: string = "text";

   export let required: boolean = false;
   export let placeholder: string = "";
   export let disabled: boolean = false;
   export let autocomplete: "on" | "off" = "on";
   export let ariaLabel: string = "";
   $: ariaLabel;

   export let rows: number = 6;
   export let noResize: boolean = false;
   export let noClear: boolean = false;

   export let errors: any;
   $: errors;
   export let description: string = "";
   $: description;

   const inputEl = 
        type === 'textarea' ? 'textarea'
      : 'input';

   const inputProps =
        type === 'textarea' ? { rows }
      : { type, autocomplete }
   
   let inputFocused = false;

   const handleInput = (e:any) => {
    // in here, you can switch on type and implement
    // whatever behaviour you need
    value = type.match(/^(number|range)$/)
      ? +e.target.value
      : e.target.value;
   }
</script>

<div class="
      flex flex-col trans-def justify-end
      { type === 'hidden' ? 'hidden' : '' } 
      { inputFocused || !!value ? 'pt-4' : ''}">
   <div class="
         flex flex-row justify-between items-center m-0 p-0 w-full isolate
         trans-def relative rounded-lg border-2
         { errors ? inputFocused ? 'border-error' : 'border-error/50'
                  : inputFocused ? 'border-primary-700' : 'border-gray-300' }
         { inputFocused ? 'bg-gray-100' : 'bg-gray-300 ' }
   ">

      <div class="
            absolute -z-2 trans-def
            {inputFocused || !!value ? '-top-4 md:-top-5 left-1 right-1' : 'left-2 right-2 top-2'} 
            flex items-center justify-between text-primary-800">
         <label for={name} class="font-titlemono font-medium text-sm { errors ? 'text-error' : ''}">
            {label}
            {#if errors}<span class="{ required ? 'text-error' : 'text-primary' }">*</span>{/if}
         </label>
         {#if !required}<span class="text-xs font-body italic capitalize">({t('common.form.validation.optional')})</span>{/if} 
      </div>

      <svelte:element 
         this={inputEl} {name} id={name} {value}
         {placeholder} {required} {disabled}
         aria-label={ariaLabel}
         on:input={handleInput}
         on:change
         on:focus={() => inputFocused = true}
         on:blur={() => inputFocused = false}
         class="
            bg-transparent w-full h-full p-2 text-primary-800 font-medium
            outline-none border-none trans-def
            { noResize ? 'resize-none' : '' }"
      />

      {#if value !== "" && !disabled && !noClear}
         <button 
            on:click={() => value = ""}
            title={t('common.form.actions.clear.field')} aria-label={t('common.form.actions.clear.field')}
            class="variant-filled-error p-0.5 rounded-full mr-1 opacity-60 hover:opacity-90 active:opacity-90" transition:fade|global={{duration: 200}}>
            <Icon icon="material-symbols:close-rounded" class="h-4 w-4 text-white"/>
         </button>
      {/if}
   </div>

   {#if !!description}<p>{description}</p>{/if}
   {#if !!errors}
   <p class="error">
      {#each errors as error}{error}{/each}
   </p>
   {/if}
</div>