<script setup lang="ts">
import { TooltipProvider, TooltipRoot, TooltipTrigger } from 'reka-ui';

import TooltipContent from '@/components/vue/ui/TooltipContent.vue';

const props = defineProps<{
  name: string;
}>();

const shades = [25, 50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950];
</script>

<template>
  <div class=":uno: group grid w-full grid-cols-[repeat(auto-fit,minmax(2rem,max-content))] justify-center md:flex">
    <TooltipProvider>
      <template
        v-for="(shade, idx) in shades"
        :key="shade"
      >
        <TooltipRoot>
          <TooltipTrigger as-child>
            <div
              class=":uno: border-separator size-10 rounded-full border transition-all"
              :class="{ 'group-hover:ml-0 md:-ml-2': idx !== 0 }"
              :style="{ backgroundColor: `var(--${props.name}-${shade})` }"
            />
          </TooltipTrigger>

          <TooltipContent
            class="text-xs"
            :side-offset="4"
          >
            <p>--{{ props.name }}-{{ shade }}</p>
          </TooltipContent>
        </TooltipRoot>
      </template>
    </TooltipProvider>
  </div>
</template>
