<script lang="ts">
   import { currentModal } from "@/lib/stores/components";
   import ContentModal from "./ContentModal.svelte";
</script>


<ContentModal title={$currentModal.title} icon={$currentModal.icon || ''}>
   {@html $currentModal.slot}
</ContentModal>