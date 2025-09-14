import type { Root } from 'mdast';
import type { Transformer } from 'unified';

import type { MarkdownFile } from '@/plugins/remark/types';

import { toString } from 'mdast-util-to-string';
import getReadingTime from 'reading-time';

export function remarkReadingTime(): Transformer<Root> {
  return function(tree, file) {
    const md = file as unknown as MarkdownFile;

    if (md.data.astro.frontmatter) {
      const textOnPage = toString(tree);
      const readingTime = getReadingTime(textOnPage);

      md.data.astro.frontmatter.timeToRead = Math.ceil(readingTime.minutes);
    }
  };
}
