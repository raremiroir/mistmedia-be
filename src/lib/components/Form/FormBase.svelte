<script lang="ts" context="module">
   export const validateTurnstile = async (turnstile_response:any) => {
      const turnstileData = JSON.stringify({ turnstile_response });
      let success = false;
      await fetch ('/api/_turnstile', {
         method: 'POST',
         body: turnstileData,
         headers: { 'Content-Type': 'application/json' },
      }).then(res => { success = true; })
      .catch(err => { console.error(err); success = false; });
      return success;
   }
</script>

<script lang='ts'>
   // IMPORT TYPES
   import type { ChosenInputs } from './form';
   // IMPORT UTILS
   import * as yup from 'yup';
   import { createForm } from 'svelte-forms-lib';
   import { astroI18n, t } from 'astro-i18n';
   import { titleCase } from '@/lib/utils/formatters/formatText';
	import { fade } from 'svelte/transition';

   // IMPORT COMPONENTS
   import { FormInput, Turnstile } from './Inputs';

   // DEFINE PROPS
   let klass:string = ''
   export { klass as class };

   export let success = true;
   $: success;
   let trueSuccess = false;

   export let title: string = 'Contact Form';
   export let submitText: string = 'Submit';

   export let submitAction = (values: any) => {
      console.log(values);
   };

   export let inputItems: ChosenInputs = {};
   $: inputItems;

   // Define form values and initial values
   let formValues: any = {};
   let initialValues: any = {};
   let requiredValues: any = [];

   // Name validation schema
   if (inputItems.name?.enabled) {
      formValues.first_name = yup.string()
         .required(t('common.form.validation.is_required', { field: titleCase(t('common.form.fields.name.first')) }))
         .matches(/^[A-Za-z]+(?:['-][A-Za-z]+)*$/, t('common.form.validation.only_alpha', { field: titleCase(t('common.form.fields.name.first')) }))
         .min(2, t('common.form.validation.is_too_short', { field: titleCase(t('common.form.fields.name.first')), min: 2 }))
         .max(50, t('common.form.validation.is_too_long', { field: titleCase(t('common.form.fields.name.first')), max: 50 }));
      formValues.last_name = yup.string()
         .required(t('common.form.validation.is_required', { field: titleCase(t('common.form.fields.name.last')) }))
         .matches(/^[A-Za-z]+(?:['-][A-Za-z]+)*$/, t('common.form.validation.only_alpha', { field: titleCase(t('common.form.fields.name.last')) }))
         .min(2, t('common.form.validation.is_too_short', { field: titleCase(t('common.form.fields.name.last')), min: 2 }))
         .max(50, t('common.form.validation.is_too_long', { field: titleCase(t('common.form.fields.name.last')), max: 50 }));
      
      initialValues.first_name = '';
      initialValues.last_name = '';
      requiredValues = [ ...requiredValues, 'first_name', 'last_name' ];
   }
   // Email validation schema
   if (inputItems.email?.enabled) {
      formValues.email = yup.string()
        .required(t('common.form.validation.is_required', { field: titleCase(t('common.form.fields.email')) }))
        .email(t('common.form.validation.email'));
      
      initialValues.email = '';
      requiredValues = [ ...requiredValues, 'email' ];
   }
   // Phone validation schema
   if (inputItems.phone?.enabled) {
      formValues.phone = yup.string()
         .matches(/^((\+|00)\d{1,3})?[\s.-]?\d{1,4}[\s.-]?\d{1,4}[\s.-]?\d{1,4}[\s.-]?\d{1,4}|^$/, t('common.form.validation.phone'))
      if (inputItems.phone?.required) {
         formValues.phone = formValues.phone.required(t('common.form.validation.is_required', { field: titleCase(t('common.form.fields.phone')) }));
         requiredValues = [ ...requiredValues, 'phone' ];
      } else {
         formValues.phone = formValues.phone.optional();
      }
      initialValues.phone = '';
   }
   // Company validation schema
   if (inputItems.company?.enabled) {
      formValues.company = yup.string()
         .max(50, t('common.form.validation.is_too_long', { field: titleCase(t('common.form.fields.company')), max: 50 }));
      if (inputItems.company.required) {
         formValues.company = formValues.company
            .min(2, t('common.form.validation.is_too_short', { field: titleCase(t('common.form.fields.company')), min: 2 }))
            .required(t('common.form.validation.is_required', { field: titleCase(t('common.form.fields.company')) }))
         requiredValues = [ ...requiredValues, 'company' ];
      } else {
         formValues.company = formValues.company.optional();
      }
      initialValues.company = '';
   }
   // Job Title validation schema
   if (inputItems.job?.enabled) {
      formValues.job = yup.string()
         .max(50, t('common.form.validation.is_too_long', { field: titleCase(t('common.form.fields.job')), max: 50 }));
      if (inputItems.job.required) {
         formValues.job = formValues.job
            .min(2, t('common.form.validation.is_too_short', { field: titleCase(t('common.form.fields.job')), min: 2 }))
            .required(t('common.form.validation.is_required', { field: titleCase(t('common.form.fields.job')) }));
         requiredValues = [ ...requiredValues, 'job' ];
      } else {
         formValues.job = formValues.job.optional();
      }
      initialValues.job = '';
   }

   // Subject validation schema
   if (inputItems.subject?.enabled) {
      formValues.subject = yup.string()
         .min(4, t('form.validation.is_too_short', { field: titleCase(t('common.form.fields.subject')), min: 4 }))
         .max(50, t('form.validation.is_too_long', { field: titleCase(t('common.form.fields.subject')), max: 50 }));
      if (inputItems.subject?.required) {
         formValues.subject = formValues.subject.required(t('form.validation.is_required', { field: titleCase(t('common.form.fields.subject')) }));
         requiredValues = [ ...requiredValues, 'subject' ];
      } else {
         formValues.subject = formValues.subject.optional();
      }
      
      initialValues.subject = '';
   }
   // Message validation schema
   if (inputItems.message?.enabled) {
      formValues.message = yup.string()
         .min(5, t('form.validation.is_too_short', { field: titleCase(t('common.form.fields.message')), min: 5}))
         .max(1000, t('form.validation.is_too_long', { field: titleCase(t('common.form.fields.message')), max: 1000 }));
      if (inputItems.message?.required) {
         formValues.message = formValues.message.required(t('form.validation.is_required', { field: titleCase(t('common.form.fields.message')) }));
         requiredValues = [ ...requiredValues, 'message' ];
      } else {
         formValues.message = formValues.message.optional();
      }
      
      initialValues.message = '';
   }

   // Terms/conditions validation schema
   if (inputItems.accept_terms?.enabled) {
      formValues.accept_terms = yup.boolean()
         .oneOf([true], t('form.validation.terms'));
      initialValues.accept_terms = false;
      requiredValues = [ ...requiredValues, 'accept_terms' ];
   }

   // Language validation schema
   formValues.language = yup.string()
    .oneOf(['nl', 'en'])
    .default(() => astroI18n.langCode)
    .required();
   initialValues.language = astroI18n.langCode;
   $: $form.language = astroI18n.langCode;

   // Turnstile validation schema
   if (inputItems.turnstile_response?.enabled) {
      formValues.turnstile_response = yup.string()
         .matches(/^.*\S.*$/, t('common.form.fields.turnstile'));
      initialValues.turnstile_response = "";
   }

   // Define validation schema
   let validationSchema = yup.object().shape({});
   Object.keys(formValues).forEach(key => {
      validationSchema = validationSchema.shape({
         [key]: formValues[key]
      })
   })
   validationSchema = validationSchema.shape({language: formValues.language})


   // CREATE FORM
   let {
      form, errors, state, isValid,
      isSubmitting, isValidating,
      handleChange, handleSubmit
   } = createForm({ 
      initialValues, 
      validationSchema,
      onSubmit: async (values) => {
         try {
            const res = await validateTurnstile(values.turnstile_response);
            if (res) {
               submitAction(values);
               trueSuccess = true;
            } else { trueSuccess = false }
         } catch (e) { trueSuccess = false }
         // submitAction(values);
         // console.log('values:', values);
         // trueSuccess = true;
      } 
   })

   export const resetForm = () => {
      Object.keys($form).forEach(key =>{
         $form[key] = '';
      })
      trueSuccess = false;
   }

   $: form;
   $: console.log('form:', $form);
   $: console.log('valid:', $isValid);
</script>

{#if success && trueSuccess}
   <div class="w-full" transition:fade|global={{duration: 200}}>
      <div 
         class="w-fit h-fit mx-auto my-0 p-0"
         on:click={() => resetForm()}
         on:keydown={() => resetForm()}
         role="button" tabindex="0" aria-label="Close"
         >
         <slot name="success">
            Message Sent!
         </slot>
      </div>
   </div>
<!-- {:else if $isValidating || $isSubmitting || ($isValidating && $isSubmitting)}
   <p>Submitting...</p> -->
{:else}

   <form 
      novalidate {title} aria-label={title}
      transition:fade|global={{duration: 200}}
      on:submit={handleSubmit}
      class="w-full flex flex-col gap-1 md:gap-2 bg-transparent {klass}">
   
      <!-- Name input -->
      {#if inputItems.name}
         <div class="grid grid-cols-1 sm:grid-cols-2 gap-1 sm:gap-2">
            <FormInput 
               name="first_name"
               label="{titleCase(t('common.form.fields.name.first'))}"
               on:change={handleChange}
               bind:value={$form.first_name} 
               bind:errors={$errors.first_name} 
               placeholder=""
               required={inputItems.name.required}
            />
            <FormInput 
               name="last_name"
               label="{titleCase(t('common.form.fields.name.last'))}"
               on:change={handleChange}
               bind:value={$form.last_name} 
               bind:errors={$errors.last_name} 
               placeholder=""
               required={inputItems.name.required}
            />
         </div>
      {/if}
      <!-- Email / Phone input -->
      {#if inputItems.email || inputItems.phone || (inputItems.email && inputItems.phone)}
         <div class="grid {inputItems.email && inputItems.phone ? 'grid-cols-2 gap-2' : 'grid-cols-1'}">
            {#if inputItems.email}
               <FormInput 
                  name="email"
                  label="{titleCase(t('common.form.fields.email'))}"
                  on:change={handleChange}
                  bind:value={$form.email} 
                  bind:errors={$errors.email} 
                  placeholder=""
                  required={inputItems.email.required}
               />
            {/if}
            {#if inputItems.phone}
               <FormInput 
                  name="phone"
                  label="{titleCase(t('common.form.fields.phone'))}"
                  on:change={handleChange}
                  bind:value={$form.phone} 
                  bind:errors={$errors.phone} 
                  placeholder=""
                  required={inputItems.phone.required}
               />
            {/if}
         </div>
      {/if}
      <!-- Company / Job input -->
      {#if inputItems.company || inputItems.job || (inputItems.company && inputItems.job)}
         <div class="grid {inputItems.company && inputItems.job ? 'grid-cols-2 gap-2' : 'grid-cols-1'}">
            {#if inputItems.company}
               <FormInput 
                  name="company"
                  label="{titleCase(t('common.form.fields.company'))}"
                  on:change={handleChange}
                  bind:value={$form.company} 
                  bind:errors={$errors.company} 
                  placeholder=""
                  required={inputItems.company.required}
               />
            {/if}
            {#if inputItems.job}
               <FormInput 
                  name="job"
                  label="{titleCase(t('common.form.fields.job'))}"
                  on:change={handleChange}
                  bind:value={$form.job} 
                  bind:errors={$errors.job} 
                  placeholder=""
                  required={inputItems.job.required}
               />
            {/if}
         </div>
      {/if}
      <!-- Subject input -->
      {#if inputItems.subject}
         <div>
            <FormInput 
               name="subject"
               label="{titleCase(t('common.form.fields.subject'))}"
               on:change={handleChange}
               bind:value={$form.subject} 
               bind:errors={$errors.subject} 
               placeholder=""
               required={inputItems.subject.required}
            />
         </div>
      {/if}
      <!-- Message input -->
      {#if inputItems.message}
         <div>
            <FormInput 
               type="textarea"
               noClear={inputItems.message.automatic}
               rows={inputItems.message.rows}
               name="message"
               label="{titleCase(t('common.form.fields.message'))}"
               on:change={handleChange} 
               bind:value={$form.message}
               bind:errors={$errors.message}
               placeholder=""
               required={inputItems.message.required}
            />
         </div>
      {/if}

      <!-- Accept Terms/Conditions -->
      <!-- {#if inputItems.accept_terms}
         <div>
            <Checkbox 
               name="gdpr"
               on:change={handleChange}
               bind:checked={$form.accept_terms}
               bind:errors={$errors.accept_terms}
               required
            >{$LL.form.check_terms({ terms: $LL.nav.others.terms_conditions.title(), policy: $LL.nav.others.privacy_policy.title() })}
            </Checkbox>
         </div>
      {/if} -->

      <!-- Locale -->
      <FormInput 
         type="hidden"
         name="language"
         autocomplete="off"
         label=""
         on:change={handleChange}
         bind:value={$form.language}
         bind:errors={$errors.language}
         required
      />
      
      
      <!-- Errors -->
      <slot name="errors" />
      
      <div class="flex flex-row w-full justify-between items-center mt-4">
         <!-- Turnstile Validation -->
         <div>
            <Turnstile 
               on:change={handleChange}
               bind:errors={$errors.turnstile_response} 
               bind:turnstileResponse={$form.turnstile_response} 
            />
         </div>
         <!-- Submit button -->
         <input 
            class="btn btn-lg variant-filled-primary capitalize cursor-pointer" 
            autocomplete="off"
            type="submit" aria-label={submitText} title={submitText}
            value={submitText} />
      </div>

   </form>

{/if}