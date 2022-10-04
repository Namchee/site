<script setup lang="ts">
import AppLink from '@/components/vue/v1/AppLink.vue';

interface NavigationLinkProps {
  href: string;
  isActive: boolean;
}

const props = defineProps<NavigationLinkProps>();
</script>

<template>
  <AppLink :href="props.href"
    class="text-2xl md:text-base tracking-tight
      hover:text-dark transition-colors"
    :class="{
        'font-semibold text-light md:text-dark': props.isActive,
        'text-grey': !props.isActive
      }">
    <p class="overflow-y-hidden">
      <span class="inline-block translate-y-14 md:translate-y-0 navigation__link">
        <slot />
      </span>
    </p>
  </AppLink>
</template>
