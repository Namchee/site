<script setup lang="ts">
import { ref, Ref } from 'vue';

import AppLink from '@/components/vue/AppLink.vue';

const currentProject: Ref<number> = ref(-1);

const projects = [
  {
    year: '2020',
    title: 'Conventional PR',
    description: 'Enforce conventional pull request rules in GitHub Actions',
    link: 'https://github.com/Namchee/conventional-pr',
    image: 'https://res.cloudinary.com/namchee/image/upload/v1655467019/personal-site/cpr.webp',
  },
  {
    year: '2022',
    title: 'Windgraph',
    description: 'Tailwind-powered Open Graph image generator',
    link: 'https://github.com/Namchee/windgraph',
    image: 'https://res.cloudinary.com/namchee/image/upload/v1655467239/personal-site/Windgraph.webp',
  },
  {
    year: '2020',
    title: 'Fav',
    description: 'Compact and hassle-free Favicon generator for next generation websites',
    link: 'https://fav.namchee.dev',
    image: 'https://res.cloudinary.com/namchee/image/upload/v1655466982/personal-site/Fav.webp',
  },
];
</script>

<template>
  <div class="grid grid-cols-12 gap-x-6">
    <div class="col-span-12 lg:col-span-8">
      <template v-for="(project, idx) in projects" :key="`project-${idx}`">
        <AppLink @pointerover="() => currentProject = idx" @focus="() => currentProject = idx" :href="project.link"
          external class="group
            flex flex-col
            border-t-2 border-t-grey border-opacity-25
            transition-colors hover:bg-grey hover:bg-opacity-5
            py-6 px-2
            lg:p-6">
          <p class="font-medium lg:leading-none text-sm lg:text-base tracking-tight mr-12">
            {{ project.year }}/
          </p>

          <div class="mt-1 lg:mt-0 flex-1">
            <p class="lg:leading-none text-xl font-medium">
              {{ project.title }}
            </p>

            <p class="mt-4 text-grey leading-relaxed max-w-xl">
              {{ project.description }}
            </p>
          </div>

          <svg xmlns="http://www.w3.org/2000/svg"
            class="hidden lg:block w-8 h-8 mr-2 text-grey self-center opacity-0 translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0"
            viewBox="0 0 256 256">
            <line x1="40" y1="128" x2="216" y2="128" fill="none" stroke="currentColor" stroke-linecap="round"
              stroke-linejoin="round" stroke-width="16"></line>
            <polyline points="144 56 216 128 144 200" fill="none" stroke="currentColor" stroke-linecap="round"
              stroke-linejoin="round" stroke-width="16"></polyline>
          </svg>
        </AppLink>
      </template>
    </div>

    <div class="hidden col-span-4 relative md:grid place-items-center">
      <Transition v-for="(project, idx) in projects"
        :key="`image-${idx}`"
        name="project"
        mode="out-in"
      >
        <img
          v-if="currentProject === idx"
          rel="preload"
          class="w-32 lg:w-40 h-auto absolute"
          :src="project.image"
          :title="project.title"
          :alt="project.title" />
      </Transition>
    </div>
  </div>
</template>

<style scoped>
.project-enter-active {
  transition: all 100ms ease-out;
}

.project-enter-from,
.project-leave-to {
  opacity: 0;
}

.project-enter-from {
  transform: scale(0.95);
}
</style>
