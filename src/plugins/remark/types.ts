import type { MarkdownHeading } from 'astro';

export interface MarkdownFile {
  data: {
    astro: {
      frontmatter: {
        timeToRead: number;
        headings: MarkdownHeading[];
      }
    }
  };
  value: string;
}
