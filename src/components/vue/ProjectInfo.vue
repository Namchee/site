<script setup lang="ts">
import AppLink from '@/components/vue/AppLink.vue';

interface ProjectInfoProps {
  year: string;
  title: string;
  description: string;
  link: string;
}

const props = defineProps<ProjectInfoProps>();
</script>

<template>
  <AppLink
    :href="props.link"
    external
    class="flex
      border-t-2 border-t-grey border-opacity-20
      transition-colors hover:bg-grey hover:bg-opacity-5
      p-6">
    <p class="font-medium leading-none text-base tracking-tight mr-12">
      {{ props.year }}/
    </p>

    <div class="flex-1">
      <p class="leading-none text-xl font-medium">
        {{ props.title }}
      </p>

      <p class="mt-4 text-grey leading-relaxed">
        {{ props.description }}
      </p>
    </div>
  </AppLink>
</template>
