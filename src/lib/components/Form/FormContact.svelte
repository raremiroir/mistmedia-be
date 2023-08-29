<script lang="ts">
   import type { ChosenInputs } from "./form";
   import FormBase from "./FormBase.svelte";
   import { t } from "astro-i18n";

   let inputItems: ChosenInputs = {
      name: { enabled: true, required: true, },
      email: { enabled: true, required: true, },
      company: { enabled: true, required: false, },
      subject: { enabled: true, required: true, },
      message: { enabled: true, required: true, rows: 6 },
      // accept_terms: { enabled: true, required: true },
      turnstile_response: { enabled: true, required: true },
   }
</script>

<div class="flex flex-col justify-start items-start gap-4">
   <p>{t('common.form.message')}</p>
   <FormBase 
      {inputItems}
      title={t('common.contact.us')}
      submitText={t('common.form.actions.send_message.do')}
      submitAction={(values) => {
   
         const subject = `Mistmedia.be: Nieuw bericht van ${values.first_name} ${values.last_name} - ${values.subject}`;
         const message = `
            <b><i>Nieuw bericht van:</i></b><br/>
            Voornaam: <b>${values.first_name}</b><br/>
            Achternaam: <b>${values.last_name}</b><br/>
            E-mail: <b>${values.email}</b><br/>
            ${ values.company ? `Bedrijf: <b>${values.company}</b><br/>` : '' }
            Taal: <b>${values.language}</b><br/>
            <h2>${values.subject}</h2>
            <hr/>
            <p>${values.message}</p>
            <br/>
            <hr/>
            <i>
               Dit bericht werd automatisch verzonden vanaf <a href="https://mistmedia.be">Mistmedia.be</a>.<br/>
               Om te reageren op de verzender, dien je een aparte email naar zijn/haar e-mailadres te sturen.
            </i>`;
         // mailToAdmin({ subject, message });
         console.log({ subject, message });
      }}
   />
</div>