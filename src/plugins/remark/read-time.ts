import type { MdastPluginInstance } from 'satteri';

import type { MarkdownFile } from '@/plugins/remark/types';

import getReadingTime from 'reading-time';

export function satteriReadingTime(file: MarkdownFile): MdastPluginInstance {
  if (file.data?.astro?.frontmatter && typeof file.value === 'string') {
    const readingTime = getReadingTime(file.value);
    file.data.astro.frontmatter.timeToRead = Math.ceil(readingTime.minutes);
  }

  return {};
}
