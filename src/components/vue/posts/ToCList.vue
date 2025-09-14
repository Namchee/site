<script lang="ts" setup>
interface PostSection {
  depth: number;
  slug: string;
  text: string;

  subheadings: PostSection[];
}

const props = defineProps({
  sections: { type: Array<PostSection>, required: true },
  activeSections: { type: Set<string>, required: true },
});

const marginMap = {
  2: 'pl-0',
  3: 'pl-4 first:mt-2',
  4: 'pl-8 first:mt-2',
  5: 'pl-12 first:mt-2',
};
</script>

<template>
  <ul class=":uno: space-y-2">
    <li
      v-for="section in props.sections"
      :key="section.slug"
      :class="marginMap[section.depth]"
    >
      <a
        :href="`#${section.slug}`"
        :class="[':uno: text-content transition-all text-sm', { 'text-heading font-medium': props.activeSections.has(section.slug) }]"
        tabindex="-1"
      >
        {{ section.text }}
      </a>

      <template v-if="section.subheadings.length > 0">
        <ToCList
          :sections="section.subheadings"
          :active-sections="props.activeSections"
        />
      </template>
    </li>
  </ul>
</template>
