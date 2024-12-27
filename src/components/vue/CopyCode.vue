<script setup lang="ts">
import { onBeforeUnmount, ref } from 'vue';

import { TooltipProvider, TooltipArrow, TooltipRoot, TooltipPortal, TooltipTrigger, TooltipContent } from 'radix-vue';

const props = defineProps({
  code: { type: String, required: true },
});

const open = ref(false);
const copied = ref(false);
const timeoutId = ref<number>(-1);

function copyCode() {
  navigator.clipboard.writeText(props.code);

  copied.value = true;

  if (timeoutId.value) {
    window.clearTimeout(timeoutId.value);
  }

  timeoutId.value = window.setTimeout(() => {
    copied.value = false;
    timeoutId.value = -1;
  }, 2_500);
}

onBeforeUnmount(() => {
  if (timeoutId.value) {
    window.clearTimeout(timeoutId.value);
  }
});
</script>

<template>
  <TooltipProvider>
    <TooltipRoot :open="open || copied" @update:open="(o) => open = o" :delay-duration="100">
      <TooltipTrigger as-child>
        <button @click="copyCode" :disabled="open" :class="{
          'group': true,
          'cursor-default': copied,
          'cursor-pointer': !copied,
        }">
          <template v-if="!copied">
            <slot />
          </template>
          <template v-else>
            <slot name="copied" />
          </template>
        </button>
      </TooltipTrigger>

      <TooltipPortal>
        <TooltipContent :class="{
          'text-xs rounded-md shadow shadow py-2 tooltip__content select-none px-3 will-change-[transform,opacity] transition-colors': true,
          'bg-success text-white': copied,
          'bg-content text-background': !copied
        }" :side-offset="5">
          <template v-if="!copied">
            Copy to Clipboard
          </template>

          <template v-else>
            Copied!
          </template>
          <TooltipArrow :class="{
            'fill-content': !copied,
            'fill-success': copied,
          }" :width="8" />
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
