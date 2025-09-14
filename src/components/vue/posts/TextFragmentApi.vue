<script setup lang="ts">
import { TooltipProvider, TooltipRoot, TooltipTrigger } from 'reka-ui';

import TooltipContent from '@/components/vue//ui/TooltipContent.vue';
</script>

<template>
  <div class=":uno: text-lg my-4 flex flex-wrap justify-center">
    <TooltipProvider :delay-duration="300">
      <TooltipRoot>
        <TooltipTrigger class=":uno: text-red-500 font-mono opacity-70 transition-opacity hover:opacity-100">
          :~:
        </TooltipTrigger>

        <TooltipContent class=":uno: text-xs max-w-sm">
          <p>
            <strong>Fragment directive</strong>
          </p>

          <p class=":uno: mt-2">
            A sequence that tells the browsers to identify the next set of characters as user-agent
            instructions that will be stripped from the URL during loading.
          </p>
        </TooltipContent>
      </TooltipRoot>

      <TooltipRoot>
        <TooltipTrigger class=":uno: text-purple-500 font-mono opacity-70 transition-opacity hover:opacity-100">
          text=
        </TooltipTrigger>

        <TooltipContent class=":uno: text-xs max-w-sm">
          <p>
            <strong>Text Directive</strong>
          </p>

          <p class=":uno: mt-2">
            An identifier for the browser to parse this directive as text fragment directive.
          </p>
        </TooltipContent>
      </TooltipRoot>

      <TooltipRoot>
        <TooltipTrigger class=":uno: text-blue-500 font-mono opacity-70 transition-opacity hover:opacity-100">
          [prefix-,]
        </TooltipTrigger>

        <TooltipContent class=":uno: text-xs max-w-sm">
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
        <TooltipTrigger class=":uno: text-emerald-500 font-mono opacity-70 transition-opacity hover:opacity-100">
          textStart
        </TooltipTrigger>

        <TooltipContent class=":uno: text-xs max-w-sm">
          <p>
            <strong>Start Text</strong>
          </p>

          <p class=":uno: mt-2">
            A string specifying the start of the linked text. <strong>Required</strong>.
          </p>
        </TooltipContent>
      </TooltipRoot>

      <TooltipRoot>
        <TooltipTrigger class=":uno: text-orange-500 font-mono opacity-70 transition-opacity hover:opacity-100">
          [,textEnd]
        </TooltipTrigger>

        <TooltipContent class=":uno: text-xs max-w-sm">
          <p>
            <strong>End Text</strong>
          </p>

          <p class=":uno: mt-2">
            A string specifying the end of the linked text. Optional.
          </p>
        </TooltipContent>
      </TooltipRoot>

      <TooltipRoot>
        <TooltipTrigger class=":uno: text-pink-500 font-mono opacity-70 transition-opacity hover:opacity-100">
          [,-suffix]
        </TooltipTrigger>

        <TooltipContent class=":uno: text-xs max-w-sm">
          <p>
            <strong>Suffix</strong>
          </p>

          <p class=":uno: mt-2">
            A hyphen-ended string specifying the suffix of text that should match. Helps distingushing multiple
            possible matches in the same document. Optional.
          </p>
        </TooltipContent>
      </TooltipRoot>
    </TooltipProvider>
  </div>
</template>
