<script setup lang="ts">
import { TooltipArrow, TooltipContent, TooltipPortal, TooltipProvider, TooltipRoot, TooltipTrigger } from 'reka-ui';
import { onBeforeUnmount, ref } from 'vue';

const props = defineProps({
  value: { type: String, required: true },
  class: { type: String, default: '' },
});

const open = ref(false);
const copied = ref(false);
const timeoutId = ref<number>(-1);

function copyCode() {
  navigator.clipboard.writeText(props.value);

  copied.value = true;

  if (timeoutId.value) {
    window.clearTimeout(timeoutId.value);
  }

  timeoutId.value = window.setTimeout(() => {
    copied.value = false;
    timeoutId.value = -1;
  }, 2500);
}

onBeforeUnmount(() => {
  if (timeoutId.value) {
    window.clearTimeout(timeoutId.value);
  }
});
</script>

<template>
  <TooltipProvider>
    <TooltipRoot
      :open="open || copied"
      :delay-duration="100"
      @update:open="(o) => open = o"
    >
      <TooltipTrigger as-child>
        <button
          :disabled="open"
          :class="{
            [`:uno: group ${props.class}`]: true,
            'cursor-default': copied,
            'cursor-pointer': !copied,
          }"
          @click="copyCode"
        >
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
        <TooltipContent
          :class="{
            'text-xs rounded-md text-surface-1 shadow py-2 tooltip__content select-none px-3 will-change-[transform,opacity] transition-colors z-20': true,
            'bg-success': copied,
            'bg-heading': !copied,
          }"
          :side-offset="4"
        >
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

          <TooltipArrow
            :class="{
              'fill-heading': !copied,
              'fill-success': copied,
            }"
            :width="8"
          />
        </TooltipContent>
      </TooltipPortal>
    </TooltipRoot>
  </TooltipProvider>
</template>
