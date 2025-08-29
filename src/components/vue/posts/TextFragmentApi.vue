<script setup lang="ts">
import { TooltipProvider, TooltipRoot, TooltipTrigger, } from 'reka-ui';

import TooltipContent from '@/components/vue//ui/TooltipContent.vue';
</script>

<template>
  <div class="flex flex-wrap justify-center my-4 text-lg">
    <TooltipProvider :delay-duration="300">
      <TooltipRoot>
        <TooltipTrigger class="font-mono text-red-500 opacity-70 hover:opacity-100 transition-opacity">
          :~:
        </TooltipTrigger>

        <TooltipContent class="text-xs max-w-sm">
          <p>
            <strong>Fragment directive</strong>
          </p>

          <p class="mt-2">
            A sequence that tells the browsers to identify the next set of characters as user-agent
            instructions that will be stripped from the URL during loading.
          </p>
        </TooltipContent>
      </TooltipRoot>

      <TooltipRoot>
        <TooltipTrigger class="font-mono text-purple-500 opacity-70 hover:opacity-100 transition-opacity">
          text=
        </TooltipTrigger>

        <TooltipContent class="text-xs max-w-sm">
          <p>
            <strong>Text Directive</strong>
          </p>

          <p class="mt-2">
            An identifier for the browser to parse this directive as text fragment directive.
          </p>
        </TooltipContent>
      </TooltipRoot>

      <TooltipRoot>
        <TooltipTrigger class="font-mono text-blue-500 opacity-70 hover:opacity-100 transition-opacity">
          [prefix-,]
        </TooltipTrigger>

        <TooltipContent class="text-xs max-w-sm">
          <p>
            <strong>Prefix</strong>
          </p>

          <p class="mt-2">
            A hyphen-ended string specifying the prefix of text that should match. Helps distingushing multiple
            possible matches in the same document. Optional.
          </p>
        </TooltipContent>
      </TooltipRoot>

      <TooltipRoot>
        <TooltipTrigger class="font-mono text-emerald-500 opacity-70 hover:opacity-100 transition-opacity">
          textStart
        </TooltipTrigger>

        <TooltipContent class="text-xs max-w-sm">
          <p>
            <strong>Start Text</strong>
          </p>

          <p class="mt-2">
            A string specifying the start of the linked text. <strong>Required</strong>.
          </p>
        </TooltipContent>
      </TooltipRoot>

      <TooltipRoot>
        <TooltipTrigger class="font-mono text-orange-500 opacity-70 hover:opacity-100 transition-opacity">
          [,textEnd]
        </TooltipTrigger>

        <TooltipContent class="text-xs max-w-sm">
          <p>
            <strong>End Text</strong>
          </p>

          <p class="mt-2">
            A string specifying the end of the linked text. Optional.
          </p>
        </TooltipContent>
      </TooltipRoot>

      <TooltipRoot>
        <TooltipTrigger class="font-mono text-pink-500 opacity-70 hover:opacity-100 transition-opacity">
          [,-suffix]
        </TooltipTrigger>

        <TooltipContent class="text-xs max-w-sm">
          <p>
            <strong>Suffix</strong>
          </p>

          <p class="mt-2">
            A hyphen-ended string specifying the suffix of text that should match. Helps distingushing multiple
            possible matches in the same document. Optional.
          </p>
        </TooltipContent>
      </TooltipRoot>
    </TooltipProvider>
  </div>

</template>
