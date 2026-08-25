import getReadingTime from 'reading-time';
import { defineHastPlugin } from 'satteri';

export const readingTime = () => {
  let done = false;

  return defineHastPlugin({
    name: 'reading-time',
    text: (_, ctx) => {
      if (done) {
        return;
      }

      done = true;

      const frontmatter = ctx.data.astro?.frontmatter;
      if (!frontmatter) {
        return;
      }

      frontmatter.timeToRead = Math.ceil(getReadingTime(ctx.source).minutes);
    },
  });
};
