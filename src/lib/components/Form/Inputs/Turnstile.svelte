<script lang="ts">
   import { Turnstile } from 'svelte-turnstile';
   import type { TurnstileSize, TurnstileTheme } from 'svelte-turnstile';


   const sitekey = import.meta.env.VITE_TURNSTILE_SITEKEY;
   import { dummy } from '@/lib/config/turnstile';
   const key = dummy.public.pass;

   export let turnstileResponse: string|undefined;

   export let action: string = ''; // string can be used to differentiate widgets, returned on validation
   
   export let size: TurnstileSize = 'normal'; // 'normal' | 'compact' | 'invisible'
   export let theme: TurnstileTheme = 'light'; // 'light' | 'dark'

   export let forms: boolean = true; // if true the response token will be a property on the form data
   export let name: string = 'turnstile_response' // define name of input field in form data

   export let retry: Turnstile['retry'] = 'auto' // shouldd the widget automatically retry to obtain a token if it did not succeed ( auto | never )

   export let description: string = '';
   export let errors: any = [];
</script>


<div class="flex flex-col gap-1 items-start justify-center">
   {#if description}<p class="text-sm">{description}</p>{/if}
   {#if errors}<p>{#each errors as error}{error}{/each}</p>{/if}
   <Turnstile
      siteKey={key}
      {size} {theme}
      {forms} formsField={name}
      {action} {retry}
      on:turnstile-callback={(e) => turnstileResponse = e.detail.token}
   />
</div>