<script setup lang="ts">
import { TooltipProvider, TooltipRoot, TooltipTrigger } from 'reka-ui';

import TooltipContent from '@/components/vue/ui/TooltipContent.vue';

const props = defineProps({
  label: { type: String, required: true },
  href: { type: String, required: true },
});
</script>

<template>
  <TooltipProvider :delay-duration="100">
    <TooltipRoot>
      <TooltipTrigger as-child>
        <a
          rel="noopener noreferrer"
          :href="props.href"
          :class="[
            ':uno: text-content hover:bg-surface-2 focus:bg-surface-2 my-1 mr-1 grid size-[36px] place-items-center rounded-md text-sm transition-colors',
            $attrs.class,
          ]"
        >
          <slot />
        </a>
      </TooltipTrigger>

      <TooltipContent :side-offset="5">
        <p>{{ props.label }}</p>
      </TooltipContent>
    </TooltipRoot>
  </TooltipProvider>
</template>
