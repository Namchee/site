<script lang="ts" setup>
import { onMounted, onUnmounted, ref } from 'vue';

interface PostSection {
  depth: number;
  slug: string;
  text: string;

  subheadings: PostSection[];
}

const props = defineProps({
  sections: { type: Array<PostSection>, required: true },
});

const marginMap = {
  2: "pl-0",
  3: "pl-4 first:mt-2",
  4: "pl-8 first:mt-2",
  5: "pl-12 first:mt-2",
};

const activeSection = ref<string | null>(null);

let observer: IntersectionObserver;

onMounted(() => {
  observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        if (id) activeSection.value = id;
      }
    }
  });

  props.sections.forEach(section => {
    const el = document.getElementById(section.slug);
    if (el) observer.observe(el);
  });
});

onUnmounted(() => {
  if (observer) observer.disconnect();
});
</script>

<template>
  <ul class=":uno: space-y-2">
    <li v-for="section in props.sections" :key="section.slug" :class="marginMap[section.depth]">
      <a :href="`#${section.slug}`"
        :class="[':uno: text-content transition-all text-sm', { 'text-heading font-medium': activeSection === section.slug }]"
        tabindex="-1">
        {{ section.text }}
      </a>

      <template v-if="section.subheadings.length > 0">
        <ToCList :sections="section.subheadings" />
      </template>
    </li>
  </ul>
</template>
