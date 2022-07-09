<script setup lang="ts">
import AppLink from '@/components/vue/AppLink.vue';

interface NavigationLinkProps {
  href: string;
  isActive: boolean;
}

const props = defineProps<NavigationLinkProps>();
</script>

<template>
  <AppLink :href="props.href"
    class="text-2xl md:text-base tracking-tight hover:text-dark transition-colors"
    :class="{
        'font-semibold text-light md:text-dark': props.isActive,
        'text-grey': !props.isActive
      }">
    <slot />
  </AppLink>
</template>
