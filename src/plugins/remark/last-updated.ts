import type { MdastPluginInstance, MdastVisitorContext } from 'satteri';

import type { MarkdownFile } from '@/plugins/remark/types';

import { execSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

export function lastUpdated(file: MarkdownFile, ctx: MdastVisitorContext): MdastPluginInstance {
  const filepath = ctx?.fileURL
    ? fileURLToPath(ctx.fileURL)
    : file?.data?.astro?.frontmatter?.file;

  if (filepath && file.data?.astro?.frontmatter) {
    try {
      const gitDate = execSync(`git log -1 --pretty="format:%cI" "${filepath}"`, {
        encoding: 'utf-8',
      }).trim();

      if (gitDate) {
        file.data.astro.frontmatter.lastModified = gitDate;
      }
    } catch {
      // do nothing
    }
  }

  return {};
}
