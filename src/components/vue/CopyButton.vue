<script setup lang="ts">
import { onBeforeUnmount, ref } from 'vue';

import { TooltipProvider, TooltipRoot, TooltipTrigger } from 'reka-ui';

import TooltipContent from '@/components/vue/ui/TooltipContent.vue';

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

  // timeoutId.value = window.setTimeout(() => {
  //   copied.value = false;
  //   timeoutId.value = -1;
  // }, 2_500);
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

      <TooltipContent class="z-20 text-xs" :variant="copied ? 'success' : 'content'" :side-offset="5">
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
      </TooltipContent>
    </TooltipRoot>
  </TooltipProvider>
</template>
