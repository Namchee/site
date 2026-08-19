import getReadingTime from 'reading-time';
import { defineHastPlugin } from 'satteri';

export const readingTime = defineHastPlugin({
  name: 'reading-time',
  raw: (_, ctx) => {
    if (!ctx.data.astro?.frontmatter) {
      return;
    }

    const readingTime = getReadingTime(ctx.source);
    ctx.data.astro.frontmatter.timeToRead = Math.ceil(readingTime.minutes);
  },
});
