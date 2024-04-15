import type { Transformer } from 'unified';

import getReadingTime from 'reading-time';
import { toString } from 'mdast-util-to-string';

import type { MarkdownFile } from '@/plugins/remark/types';

export function remarkReadingTime(): Transformer {
  return function(tree, file) {
    const md = file as unknown as MarkdownFile;

    if (md.data.astro.frontmatter) {
      const textOnPage = toString(tree);
      const readingTime = getReadingTime(textOnPage);

      md.data.astro.frontmatter.timeToRead = Math.ceil(readingTime.minutes);
    }
  };
}
