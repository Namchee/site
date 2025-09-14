<script setup lang="ts">
import type { VariantProps } from 'class-variance-authority';
import type { TooltipContentProps } from 'reka-ui';

import { cva } from 'class-variance-authority';
import { TooltipArrow, TooltipContent, TooltipPortal } from 'reka-ui';

const containerStyles = cva(
  'text-sm rounded-md py-2 shadow select-none px-3 transition-colors will-change-[transform,opacity] tooltip__content',
  {
    variants: {
      variant: {
        success: 'bg-success text-[var(--gray-dark-25)]',
        content: 'bg-heading text-surface-1',
      },
    },
    defaultVariants: {
      variant: 'content',
    },
  },
);

const arrowStyles = cva(
  ':uno:',
  {
    variants: {
      variant: {
        success: 'fill-success',
        content: 'fill-heading',
      },
    },
    defaultVariants: {
      variant: 'content',
    },
  },
);

type ContainerVariants = VariantProps<typeof containerStyles>;

const props = withDefaults(
  defineProps<TooltipContentProps & { class?: string; arrow?: boolean; variant?: ContainerVariants['variant'] }>(),
  {
    class: '',
    arrow: true,
    variant: 'content',
  },
);
</script>

<template>
  <TooltipPortal>
    <TooltipContent
      v-bind="props"
      :class="[containerStyles({ variant }), props.class]"
    >
      <slot />

      <template v-if="props.arrow">
        <TooltipArrow
          :width="8"
          :class="[arrowStyles({ variant: props.variant })]"
        />
      </template>
    </TooltipContent>
  </TooltipPortal>
</template>

<style>
.tooltip__content {
  transform-origin: var(--reka-tooltip-content-transform-origin);
  animation: scaleIn 100ms var(--default-transition-timingFunction);
}
</style>
