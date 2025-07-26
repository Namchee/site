<script setup lang="ts">
import { TooltipContent, TooltipRoot, TooltipPortal, TooltipProvider, TooltipTrigger } from 'reka-ui';

const props = defineProps<{
  name: string;
}>();

const name = props.name;
</script>

<template>
  <div class="flex group">
    <TooltipProvider>
      <TooltipRoot>
        <TooltipTrigger as-child>
          <div class="size-10 rounded-full border border-separator transition-all"
            :style="{ backgroundColor: `var(--${name}-25)` }" />
        </TooltipTrigger>

        <TooltipPortal>
          <TooltipContent
            class="text-xs rounded-md shadow tooltip__content bg-heading text-surface-1 select-none py-1 px-2 will-change-[transform,opacity]"
            :side-offset="4">
            <p>--{{ props.name }}-25</p>
          </TooltipContent>
        </TooltipPortal>
      </TooltipRoot>

      <TooltipRoot>
        <TooltipTrigger as-child>
          <div class="size-10 rounded-full border border-separator transition-all -ml-2 group-hover:ml-0"
            :style="{ backgroundColor: `var(--${name}-50)` }" />
        </TooltipTrigger>

        <TooltipPortal>
          <TooltipContent
            class="text-xs rounded-md shadow tooltip__content bg-heading text-surface-1 select-none py-1 px-2 will-change-[transform,opacity]"
            :side-offset="4">
            <p>--{{ props.name }}-50</p>
          </TooltipContent>
        </TooltipPortal>
      </TooltipRoot>

      <TooltipRoot>
        <TooltipTrigger as-child>
          <div class="size-10 rounded-full border border-separator transition-all -ml-2 group-hover:ml-0"
            :style="{ backgroundColor: `var(--${name}-100)` }" />
        </TooltipTrigger>

        <TooltipPortal>
          <TooltipContent
            class="text-xs rounded-md shadow tooltip__content bg-heading text-surface-1 select-none py-1 px-2 will-change-[transform,opacity]"
            :side-offset="4">
            <p>--{{ props.name }}-100</p>
          </TooltipContent>
        </TooltipPortal>
      </TooltipRoot>

      <TooltipRoot>
        <TooltipTrigger as-child>
          <div class="size-10 rounded-full border border-separator transition-all -ml-2 group-hover:ml-0"
            :style="{ backgroundColor: `var(--${name}-200)` }" />
        </TooltipTrigger>

        <TooltipPortal>
          <TooltipContent
            class="text-xs rounded-md shadow tooltip__content bg-heading text-surface-1 select-none py-1 px-2 will-change-[transform,opacity]"
            :side-offset="4">
            <p>--{{ props.name }}-200</p>
          </TooltipContent>
        </TooltipPortal>
      </TooltipRoot>

      <TooltipRoot>
        <TooltipTrigger as-child>
          <div class="size-10 rounded-full border border-separator transition-all -ml-2 group-hover:ml-0"
            :style="{ backgroundColor: `var(--${name}-300)` }" />
        </TooltipTrigger>

        <TooltipPortal>
          <TooltipContent
            class="text-xs rounded-md shadow tooltip__content bg-heading text-surface-1 select-none py-1 px-2 will-change-[transform,opacity]"
            :side-offset="4">
            <p>--{{ props.name }}-300</p>
          </TooltipContent>
        </TooltipPortal>
      </TooltipRoot>

      <TooltipRoot>
        <TooltipTrigger as-child>
          <div class="size-10 rounded-full border border-separator transition-all -ml-2 group-hover:ml-0"
            :style="{ backgroundColor: `var(--${name}-400)` }" />
        </TooltipTrigger>

        <TooltipPortal>
          <TooltipContent
            class="text-xs rounded-md shadow tooltip__content bg-heading text-surface-1 select-none py-1 px-2 will-change-[transform,opacity]"
            :side-offset="4">
            <p>--{{ props.name }}-400</p>
          </TooltipContent>
        </TooltipPortal>
      </TooltipRoot>

      <TooltipRoot>
        <TooltipTrigger as-child>
          <div class="size-10 rounded-full border border-separator transition-all -ml-2 group-hover:ml-0"
            :style="{ backgroundColor: `var(--${name}-500)` }" />
        </TooltipTrigger>

        <TooltipPortal>
          <TooltipContent
            class="text-xs rounded-md shadow tooltip__content bg-heading text-surface-1 select-none py-1 px-2 will-change-[transform,opacity]"
            :side-offset="4">
            <p>--{{ props.name }}-500</p>
          </TooltipContent>
        </TooltipPortal>
      </TooltipRoot>

      <TooltipRoot>
        <TooltipTrigger as-child>
          <div class="size-10 rounded-full border border-separator transition-all -ml-2 group-hover:ml-0"
            :style="{ backgroundColor: `var(--${name}-600)` }" />
        </TooltipTrigger>

        <TooltipPortal>
          <TooltipContent
            class="text-xs rounded-md shadow tooltip__content bg-heading text-surface-1 select-none py-1 px-2 will-change-[transform,opacity]"
            :side-offset="4">
            <p>--{{ props.name }}-600</p>
          </TooltipContent>
        </TooltipPortal>
      </TooltipRoot>

      <TooltipRoot>
        <TooltipTrigger as-child>
          <div class="size-10 rounded-full border border-separator transition-all -ml-2 group-hover:ml-0"
            :style="{ backgroundColor: `var(--${name}-700)` }" />
        </TooltipTrigger>

        <TooltipPortal>
          <TooltipContent
            class="text-xs rounded-md shadow tooltip__content bg-heading text-surface-1 select-none py-1 px-2 will-change-[transform,opacity]"
            :side-offset="4">
            <p>--{{ props.name }}-700</p>
          </TooltipContent>
        </TooltipPortal>
      </TooltipRoot>


      <TooltipRoot>
        <TooltipTrigger as-child>
          <div class="size-10 rounded-full border border-separator transition-all -ml-2 group-hover:ml-0"
            :style="{ backgroundColor: `var(--${name}-800)` }" />
        </TooltipTrigger>

        <TooltipPortal>
          <TooltipContent
            class="text-xs rounded-md shadow tooltip__content bg-heading text-surface-1 select-none py-1 px-2 will-change-[transform,opacity]"
            :side-offset="4">
            <p>--{{ props.name }}-800</p>
          </TooltipContent>
        </TooltipPortal>
      </TooltipRoot>

      <TooltipRoot>
        <TooltipTrigger as-child>
          <div class="size-10 rounded-full border border-separator transition-all -ml-2 group-hover:ml-0"
            :style="{ backgroundColor: `var(--${name}-900)` }" />
        </TooltipTrigger>

        <TooltipPortal>
          <TooltipContent
            class="text-xs rounded-md shadow tooltip__content bg-heading text-surface-1 select-none py-1 px-2 will-change-[transform,opacity]"
            :side-offset="4">
            <p>--{{ props.name }}-900</p>
          </TooltipContent>
        </TooltipPortal>
      </TooltipRoot>

      <TooltipRoot>
        <TooltipTrigger as-child>
          <div class="size-10 rounded-full border border-separator transition-all -ml-2 group-hover:ml-0"
            :style="{ backgroundColor: `var(--${name}-900)` }" />
        </TooltipTrigger>

        <TooltipPortal>
          <TooltipContent
            class="text-xs rounded-md shadow tooltip__content bg-heading text-surface-1 select-none py-1 px-2 will-change-[transform,opacity]"
            :side-offset="4">
            <p>--{{ props.name }}-950</p>
          </TooltipContent>
        </TooltipPortal>
      </TooltipRoot>
    </TooltipProvider>
  </div>
</template>
