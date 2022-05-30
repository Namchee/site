<script setup lang="ts">
import { LINKS } from '@/constant/link';

import AppLink from '@/components/vue/AppLink.vue';

export interface NavigationListProps {
  currentPath: string;
}

const { currentPath } = defineProps<NavigationListProps>();
</script>

<template>
  <ul class="flex items-center space-x-12">
    <li v-for="link in LINKS" :key="link.path">
      <AppLink
        :href="link.path"
        class="tracking-tight text-lg hover:text-gray-800 transition-colors"
        :class="{ 'font-semibold text-gray-800': link.path === currentPath, 'text-gray': link.path !== currentPath }"
      >
        {{ link.name }}
      </AppLink>
    </li>
  </ul>
</template>
