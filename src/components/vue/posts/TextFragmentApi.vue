<script setup lang="ts">
import { TooltipProvider, TooltipRoot, TooltipArrow, TooltipTrigger, TooltipPortal, TooltipContent } from 'radix-vue';
</script>

<template>
  <div class="flex flex-wrap justify-center my-4 text-lg">
    <TooltipProvider>
      <TooltipRoot>
        <TooltipTrigger class="font-mono text-red-400 opacity-70 hover:opacity-100 transition-opacity">
          :~:
        </TooltipTrigger>

        <TooltipPortal>
          <TooltipContent
            class="rounded-md text-sm py-2 tooltip__content bg-content text-background select-none px-3 will-change-[transform,opacity]">
            <p>
              Also known as <strong>fragment directive</strong>
            </p>
            <TooltipArrow :width="8" class="fill-content" />
          </TooltipContent>
        </TooltipPortal>
      </TooltipRoot>

      <TooltipRoot>
        <TooltipTrigger class="font-mono text-blue-400 opacity-70 hover:opacity-100 transition-opacity">
          text=
        </TooltipTrigger>

        <TooltipPortal>
          <TooltipContent
            class="rounded-md text-sm py-2 tooltip__content bg-content text-background select-none px-3 will-change-[transform,opacity]">
            <p>
              Also known as <strong>fragment directive</strong>
            </p>
            <TooltipArrow :width="8" class="fill-content" />
          </TooltipContent>
        </TooltipPortal>
      </TooltipRoot>

      <TooltipRoot>
        <TooltipTrigger class="font-mono text-emerald-500 opacity-70 hover:opacity-100 transition-opacity">
          [prefix-,]
        </TooltipTrigger>

        <TooltipPortal>
          <TooltipContent
            class="rounded-md text-sm py-2 tooltip__content bg-content text-background select-none px-3 will-change-[transform,opacity]">
            <p>
              Also known as <strong>fragment directive</strong>
            </p>
            <TooltipArrow :width="8" class="fill-content" />
          </TooltipContent>
        </TooltipPortal>
      </TooltipRoot>

      <TooltipRoot>
        <TooltipTrigger class="font-mono text-violet-400 opacity-70 hover:opacity-100 transition-opacity">
          textStart
        </TooltipTrigger>

        <TooltipPortal>
          <TooltipContent
            class="rounded-md text-sm py-2 tooltip__content bg-content text-background select-none px-3 will-change-[transform,opacity]">
            <p>
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
            class="rounded-md text-sm py-2 tooltip__content bg-content text-background select-none px-3 will-change-[transform,opacity]">
            <p>
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
            class="rounded-md text-sm py-2 tooltip__content bg-content text-background select-none px-3 will-change-[transform,opacity]">
            <p>
              Also known as <strong>fragment directive</strong>
            </p>
            <TooltipArrow :width="8" class="fill-content" />
          </TooltipContent>
        </TooltipPortal>
      </TooltipRoot>
    </TooltipProvider>
  </div>

</template>
