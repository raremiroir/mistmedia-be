<script lang="ts">
	import { popup, type PopupSettings } from '@skeletonlabs/skeleton';

   export let event: PopupSettings['event'] = 'click';
   export let placement: PopupSettings['placement'] = 'bottom';

   export let triggerClass: string = '';
   let klass: string = '';
   export { klass as class };

   let popupComponent: PopupSettings;
   $: popupComponent = { event, target: 'popupComponent', placement, closeQuery: '#closePopup' }
</script>

<button 
   use:popup={popupComponent}
   class="{triggerClass}"
>
   <slot name="trigger">Trigger</slot>
</button>

<div 
   class="
      w-fit h-fit p-2 variant-filled-surface 
      !bg-white dark:!bg-slate-600
      shadow-lg rounded-tile-xl {klass}"
   data-popup="popupComponent">

   <slot>Popup</slot>

</div>