import type { MarkdownHeading } from 'astro';

export interface MarkdownFile {
  data: {
    astro: {
      frontmatter: {
        timeToRead: number;
        lastModified: string;
        headings: MarkdownHeading[];
      }
    }
  };
  value: string;
}
