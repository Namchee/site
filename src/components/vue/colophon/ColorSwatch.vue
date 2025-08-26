<script setup lang="ts">
import {
  TooltipRoot,
  TooltipProvider,
  TooltipTrigger,
} from "reka-ui";

import TooltipContent from "@/components/vue/ui/TooltipContent.vue";

const props = defineProps<{
  name: string;
}>();

const shades = [25, 50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950];
</script>

<template>
  <div class=":uno: flex group">
    <TooltipProvider>
      <template v-for="(shade, idx) in shades" :key="shade">
        <TooltipRoot>
          <TooltipTrigger as-child>
            <div class=":uno: size-10 rounded-full border border-separator transition-all"
              :class="{ '-ml-2 group-hover:ml-0': idx !== 0 }"
              :style="{ backgroundColor: `var(--${props.name}-${shade})` }" />
          </TooltipTrigger>

          <TooltipContent class="text-xs py-1 px-2" :side-offset="4">
            <p>--{{ props.name }}-{{ shade }}</p>
          </TooltipContent>
        </TooltipRoot>
      </template>
    </TooltipProvider>
  </div>
</template>
