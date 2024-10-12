<script setup lang="ts">
import { onBeforeUnmount, ref } from 'vue';

import { TooltipProvider, TooltipArrow, TooltipRoot, TooltipPortal, TooltipTrigger, TooltipContent } from 'radix-vue';

const props = defineProps({
  code: { type: String, required: true },
});

const open = ref(false);
const timeoutId = ref<number>(-1);

function copyCode() {
  navigator.clipboard.writeText(props.code);

  open.value = true;
  window.clearTimeout(timeoutId.value);

  timeoutId.value = window.setTimeout(() => open.value = false, 2_500);
}

onBeforeUnmount(() => {
  window.clearTimeout(timeoutId.value);
});
</script>

<template>
  <TooltipProvider>
    <TooltipRoot :open="open">
      <TooltipTrigger as-child>
        <button
          @click="copyCode"
          class=":uno: group"
          title="Copy code to clipboard"
        >
          <slot />
        </button>
      </TooltipTrigger>

      <TooltipPortal>
        <TooltipContent
          class="text-xs rounded-md shadow shadow py-2 tooltip__content text-background select-none bg-primary px-3 will-change-[transform,opacity]"
          :side-offset="5"
        >
          Copied!
          <TooltipArrow
            class="fill-primary"
            :width="8"
          />
        </TooltipContent>
      </TooltipPortal>
    </TooltipRoot>
  </TooltipProvider>
</template>

<style>
.tooltip__content {
  transform-origin: var(--radix-tooltip-content-transform-origin);
  animation: scaleIn 100ms cubic-bezier(0.33, 1, 0.68, 1);
}

@keyframes scaleIn {
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
</style>
