import type { MarkdownHeading } from 'astro';

export type Heading = MarkdownHeading & {
  subheadings: Heading[];
};

export default function generateToC(headings: MarkdownHeading[]): Heading[] {
  const hist: Heading[] = [];
  const toc: Heading[] = [];

  for (const heading of headings) {
    const h = {
      ...heading,
      subheadings: [],
    };

    if (toc.length === 0) {
      toc.push(h);
    } else {
      let last = hist[hist.length - 1];

      while (last.depth < h.depth && last.subheadings.length) {
        last = last.subheadings[last.subheadings.length - 1];
      }

      while (!!last && last.depth >= h.depth) {
        hist.pop();
        last = hist[hist.length - 1];
      }

      if (!last || last.depth === h.depth) {
        toc.push(h);
      } else {
        last.subheadings.push(h);
      }
    }

    hist.push(h);
  }

  return toc;
}
