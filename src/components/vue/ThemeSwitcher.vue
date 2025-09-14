<script setup lang="ts">
import { TooltipProvider, TooltipRoot, TooltipTrigger } from 'reka-ui';

import TooltipContent from '@/components/vue/ui/TooltipContent.vue';
</script>

<template>
  <TooltipProvider :delay-duration="100">
    <TooltipRoot>
      <TooltipTrigger as-child>
        <button
          class=":uno: theme-toggle text-content m-1 p-2 rounded-md bg-transparent size-[36px] transition-colors focus:bg-surface-2 hover:bg-surface-2"
          aria-live="polite"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            width="1em"
            height="1em"
            fill="currentColor"
            class=":uno: theme-toggle__around h-auto w-5"
            viewBox="0 0 32 32"
          >
            <clipPath id="theme-toggle__around__cutout">
              <path d="M0 0h42v30a1 1 0 00-16 13H0Z" />
            </clipPath>
            <g clip-path="url(#theme-toggle__around__cutout)">
              <circle
                cx="16"
                cy="16"
                r="7"
              />
              <g>
                <circle
                  cx="16"
                  cy="3.3"
                  r="2.3"
                />
                <circle
                  cx="27"
                  cy="9.7"
                  r="2.3"
                />
                <circle
                  cx="27"
                  cy="22.3"
                  r="2.3"
                />
                <circle
                  cx="16"
                  cy="28.7"
                  r="2.3"
                />
                <circle
                  cx="5"
                  cy="22.3"
                  r="2.3"
                />
                <circle
                  cx="5"
                  cy="9.7"
                  r="2.3"
                />
              </g>
            </g>
          </svg>
        </button>
      </TooltipTrigger>

      <TooltipContent :side-offset="5">
        <p>Switch Theme</p>
      </TooltipContent>
    </TooltipRoot>
  </TooltipProvider>
</template>
