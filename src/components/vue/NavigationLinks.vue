<script setup lang="ts">
import AppLink from '@/components/vue/AppLink.vue';

export interface NavigationListProps {
  currentPath: string;
}

const props = defineProps<NavigationListProps>();

const links = [
  {
    path: '/',
    name: 'Home',
  },
  {
    path: '/about',
    name: 'About',
  },
];
</script>

<template>
  <ul class="flex items-center space-x-12">
    <li v-for="link in links" :key="link.path">
      <AppLink
        :href="link.path"
        class="tracking-tighter text-lg hover:text-dark transition-all"
        :class="{ 'font-semibold text-dark': link.path === props.currentPath, 'text-gray': link.path !== props.currentPath }"
      >
        {{ link.name }}
      </AppLink>
    </li>
  </ul>
</template>
