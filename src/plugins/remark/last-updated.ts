import type { Transformer } from 'unified';
import type { Root } from 'mdast';

import { execSync } from 'node:child_process';

import type { MarkdownFile } from '@/plugins/remark/types';

export function remarkLastUpdated(): Transformer<Root> {
  return function(_, file) {
    const md = file as unknown as MarkdownFile;

    const filepath = file.history[0];
    const result = execSync(`git log -1 --pretty="format:%cI" "${filepath}"`);

    if (md.data.astro.frontmatter) {
      md.data.astro.frontmatter.lastModified = result.toString();
    }
  };
}
