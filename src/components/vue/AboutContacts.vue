<script setup lang="ts">
import { CONTACT_LINKS } from '@/constant/link';

import ArrowUpRight from '~icons/eva/diagonal-arrow-right-up-outline';
import AppLink from '@/components/vue/AppLink.vue';
</script>

<template>
  <ul class="flex space-x-12">
    <li v-for="link in CONTACT_LINKS" :key="link.href">
      <AppLink :href="link.href" class="font-medium text-xl flex items-center" external>
        <span>{{ link.name }}</span>
        <ArrowUpRight class="ml-[2px] w-8 h-auto" />
      </AppLink>
    </li>
  </ul>
</template>
