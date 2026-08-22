import { execSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

import { defineHastPlugin } from 'satteri';

export const lastUpdated = defineHastPlugin({
  name: 'last-updated',
  raw: (_, ctx) => {
    if (!ctx.fileURL) {
      return;
    }

    const filepath = fileURLToPath(ctx.fileURL);
    if (!filepath) {
      return;
    }

    try {
      const gitDate = execSync(`git log -1 --pretty="format:%cI" "${filepath}"`, {
        encoding: 'utf-8',
      }).trim();

      if (!ctx.data.astro?.frontmatter) {
        return;
      }

      ctx.data.astro.frontmatter.lastModified = gitDate;
    } catch {
      console.error('Failed to fetch last updated for', filepath);
    }
  },
});
