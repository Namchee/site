<script setup lang="ts">
import { TooltipProvider, TooltipRoot, TooltipTrigger } from 'reka-ui';

import TooltipContent from '@/components/vue/ui/TooltipContent.vue';

const props = defineProps({
  label: { type: String, required: true },
  className: { type: String, default: '' },
  href: { type: String, required: true },
});
</script>

<template>
  <TooltipProvider :delay-duration="100">
    <TooltipRoot>
      <TooltipTrigger as-child>
        <a rel="noopener noreferrer" :href="props.href"
          :class="`size-[36px] grid place-items-center transition-colors text-content rounded-md hover:bg-surface-2 focus:bg-surface-2 text-sm my-1 mr-1 ${props.className}`">
          <slot />
        </a>
      </TooltipTrigger>

      <TooltipContent :side-offset="5">
        <p>{{ props.label }}</p>
      </TooltipContent>
    </TooltipRoot>
  </TooltipProvider>
</template>
