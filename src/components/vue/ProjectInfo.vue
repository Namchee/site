<script setup lang="ts">
import AppLink from '@/components/vue/AppLink.vue';

interface ProjectInfoProps {
  year: string;
  title: string;
  description: string;
  link: string;
  image: string;
}

const props = defineProps<ProjectInfoProps>();
const emit = defineEmits(['hover']);
</script>

<template>
  <AppLink
    @mouseover="emit('hover', props.image)"
    :href="props.link"
    external
    class="group
      flex
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

    <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 mr-2 text-grey self-center opacity-0 translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0" viewBox="0 0 256 256">
      <line x1="40" y1="128" x2="216" y2="128" fill="none" stroke="currentColor" stroke-linecap="round"
        stroke-linejoin="round" stroke-width="16"></line>
      <polyline points="144 56 216 128 144 200" fill="none" stroke="currentColor" stroke-linecap="round"
        stroke-linejoin="round" stroke-width="16"></polyline>
    </svg>
  </AppLink>
</template>
