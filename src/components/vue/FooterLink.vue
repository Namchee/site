<script setup lang="ts">
import AppLink from '@/components/vue/AppLink.vue';

interface FooterLinkProps {
  href: string;
  external?: boolean;
}

const props = defineProps<FooterLinkProps>();
</script>

<template>
  <AppLink
    :href="props.href"
    :external="props.external"
    class="font-medium
      relative
      after:absolute
      after:(content-*)
      after:w-full
      after:h-[1px]
    after:bg-dark
      after:left-0
      after:scale-x-0
      after:ease-out
      after:duration-200
      after:origin-right
      after:transition-transform
      after:bottom-[-3px]
      focus:after:scale-x-100
      hover:after:scale-x-100
      hover:after:origin-left"
  >
    <slot />
  </AppLink>
</template>

