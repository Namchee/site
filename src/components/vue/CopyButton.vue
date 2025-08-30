<script setup lang="ts">
import { onBeforeUnmount, ref, withDefaults } from 'vue';

import { TooltipProvider, TooltipRoot, TooltipTrigger, TooltipPortal, TooltipContent, TooltipArrow } from 'reka-ui';

const props = withDefaults(
  defineProps<{
    value: string
    className?: string
  }>(),
  {
    className: '',
  }
);

const open = ref(false);
const copied = ref(false);
const timeoutId = ref<number>(-1);

const baseClass = `:uno: group ${props.className}`;

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

      <!-- for some reason, the TooltipContent doesn't detect collision correctly if we are using the reusable component. -->
      <TooltipPortal>
        <TooltipContent :class="{
          'text-xs rounded-md text-surface-1 shadow py-2 tooltip__content select-none px-3 will-change-[transform,opacity] transition-colors z-20': true,
          'bg-success': copied,
          'bg-heading': !copied
        }" :variant="copied ? 'success' : 'content'" :side-offset="5">
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
