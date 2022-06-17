<script setup lang="ts">
import ProjectInfo from '@/components/vue/ProjectInfo.vue';

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
    description: 'Compact and hassle-free Favicon generator for next-gen websites',
    link: 'https://fav.namchee.dev',
    image: 'https://res.cloudinary.com/namchee/image/upload/v1655466982/personal-site/Fav.webp',
  },
]
</script>

<template>
  <template v-for="project in projects" :key="project.title">
    <ProjectInfo
      :year="project.year"
      :title="project.title"
      :description="project.description"
      :link="project.link"
      :image="project.image" />
  </template>
</template>
