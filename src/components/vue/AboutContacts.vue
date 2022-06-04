<script setup lang="ts">
import { CONTACT_LINKS } from '@/constant/link';

import ArrowUpRight from '~icons/radix-icons/arrow-top-right';
import AppLink from '@/components/vue/AppLink.vue';
</script>

<template>
  <ul class="flex space-x-8">
    <li v-for="link in CONTACT_LINKS" :key="link.href">
      <AppLink :href="link.href" class="font-medium text-lg flex items-center" external>
        <span>{{ link.name }}</span>
        <ArrowUpRight class="ml-1 w-5 h-auto" />
      </AppLink>
    </li>
  </ul>
</template>
