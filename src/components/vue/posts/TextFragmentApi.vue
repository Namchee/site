<script setup lang="ts">
import { TooltipProvider, TooltipRoot, TooltipArrow, TooltipTrigger, TooltipPortal, TooltipContent } from 'radix-vue';
</script>

<template>
  <div class="flex justify-center my-4">
    <TooltipProvider>
      <TooltipRoot>
        <TooltipTrigger class="font-mono text-red-400 opacity-50 hover:opacity-100 transition-opacity">
          :~:
        </TooltipTrigger>

        <TooltipPortal>
          <TooltipContent
            class="rounded-md text-sm py-2 tooltip__content bg-content text-background lg:bg-transparent lg:text-unset lg:border-none select-none px-3 will-change-[transform,opacity]">
            <p class="font-mono">
              Also known as <strong>fragment directive</strong>
            </p>
            <TooltipArrow :width="8" class="fill-content" />
          </TooltipContent>
        </TooltipPortal>
      </TooltipRoot>

      <TooltipRoot>
        <TooltipTrigger class="font-mono">
          text=
        </TooltipTrigger>

        <TooltipPortal>
          <TooltipContent
            class="rounded-md text-sm py-2 tooltip__content bg-content text-background lg:bg-transparent lg:text-unset lg:border-none select-none px-3 will-change-[transform,opacity]">
            <p class="font-mono">
              Also known as <strong>fragment directive</strong>
            </p>
            <TooltipArrow :width="8" class="fill-content" />
          </TooltipContent>
        </TooltipPortal>
      </TooltipRoot>

      <TooltipRoot>
        <TooltipTrigger class="font-mono">
          [prefix-,]
        </TooltipTrigger>

        <TooltipPortal>
          <TooltipContent
            class="rounded-md text-sm py-2 tooltip__content bg-content text-background lg:bg-transparent lg:text-unset lg:border-none select-none px-3 will-change-[transform,opacity]">
            <p class="font-mono">
              Also known as <strong>fragment directive</strong>
            </p>
            <TooltipArrow :width="8" class="fill-content" />
          </TooltipContent>
        </TooltipPortal>
      </TooltipRoot>

      <TooltipRoot>
        <TooltipTrigger class="font-mono">
          textStart
        </TooltipTrigger>

        <TooltipPortal>
          <TooltipContent
            class="rounded-md text-sm py-2 tooltip__content bg-content text-background lg:bg-transparent lg:text-unset lg:border-none select-none px-3 will-change-[transform,opacity]">
            <p class="font-mono">
              Also known as <strong>fragment directive</strong>
            </p>
            <TooltipArrow :width="8" class="fill-content" />
          </TooltipContent>
        </TooltipPortal>
      </TooltipRoot>

      <TooltipRoot>
        <TooltipTrigger class="font-mono">
          [,textEnd]
        </TooltipTrigger>

        <TooltipPortal>
          <TooltipContent
            class="rounded-md text-sm py-2 tooltip__content bg-content text-background lg:bg-transparent lg:text-unset lg:border-none select-none px-3 will-change-[transform,opacity]">
            <p class="font-mono">
              Also known as <strong>fragment directive</strong>
            </p>
            <TooltipArrow :width="8" class="fill-content" />
          </TooltipContent>
        </TooltipPortal>
      </TooltipRoot>

      <TooltipRoot>
        <TooltipTrigger class="font-mono">
          [,suffix]
        </TooltipTrigger>

        <TooltipPortal>
          <TooltipContent
            class="rounded-md text-sm py-2 tooltip__content bg-content text-background lg:bg-transparent lg:text-unset lg:border-none select-none px-3 will-change-[transform,opacity]">
            <p class="font-mono">
              Also known as <strong>fragment directive</strong>
            </p>
            <TooltipArrow :width="8" class="fill-content" />
          </TooltipContent>
        </TooltipPortal>
      </TooltipRoot>
    </TooltipProvider>
  </div>

</template>
