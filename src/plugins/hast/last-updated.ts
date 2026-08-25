import { execSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

import { defineHastPlugin } from 'satteri';

export const lastUpdated = () => {
  let done = false;

  return defineHastPlugin({
    name: 'last-updated',
    text: (_, ctx) => {
      if (done) {
        return;
      }

      done = true;

      if (!ctx.fileURL) {
        return;
      }

      const filepath = fileURLToPath(ctx.fileURL);

      try {
        const gitDate = execSync(`git log -1 --pretty="format:%cI" "${filepath}"`, {
          encoding: 'utf-8',
        }).trim();

        const frontmatter = ctx.data.astro?.frontmatter;
        if (!frontmatter) {
          return;
        }

        frontmatter.lastModified = gitDate;
      } catch {
        console.error('Failed to fetch last updated for', filepath);
      }
    },
  });
};
