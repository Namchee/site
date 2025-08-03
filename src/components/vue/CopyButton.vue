<script setup lang="ts">
import { onBeforeUnmount, ref } from 'vue';

import { TooltipProvider, TooltipArrow, TooltipRoot, TooltipPortal, TooltipTrigger, TooltipContent } from 'reka-ui';

const props = defineProps({
  value: { type: String, required: true },
  className: { type: String, default: '' },
});

const open = ref(false);
const copied = ref(false);
const timeoutId = ref<number>(-1);

const baseClass = `group ${props.className}`;

function copyCode() {
  navigator.clipboard.writeText(props.value);

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
          [baseClass]: true,
          'cursor-default': copied,
          'cursor-pointer': !copied,
        }">
          <template v-if="!copied">
            <slot />
          </template>
          <template v-else>
            <slot name="after-copy-icon" />
          </template>
        </button>
      </TooltipTrigger>

      <TooltipPortal>
        <TooltipContent :class="{
          'text-xs rounded-md text-surface-1 shadow shadow py-2 tooltip__content select-none px-3 will-change-[transform,opacity] transition-colors z-20': true,
          'bg-success text-[var(--gray-dark-25)]': copied,
          'bg-heading': !copied
        }" :side-offset="5">
          <template v-if="!copied">
            <slot name="before-copy-label">
              Copy to Clipboard
            </slot>
          </template>

          <template v-else>
            <slot name="after-copy-label">
              Copied!
            </slot>
          </template>
          <TooltipArrow :class="{
            'fill-heading': !copied,
            'fill-success': copied,
          }" :width="8" />
        </TooltipContent>
      </TooltipPortal>
    </TooltipRoot>
  </TooltipProvider>
</template>

<style>
.tooltip__content {
  transform-origin: var(--reka-tooltip-content-transform-origin);
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
