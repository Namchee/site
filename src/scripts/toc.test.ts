import type { MarkdownHeading } from 'astro';

import { describe, expect, it } from 'vitest';

import generateToC from './toc';

describe('generateToC', () => {
  it('should return empty headings', () => {
    const toc = [];
    const result = generateToC(toc);

    expect(result.length).toBe(0);
  });

  it('should return nested ToC', () => {
    const toc: MarkdownHeading[] = [
      {
        depth: 2,
        slug: 'a',
        text: 'a',
      },
      {
        depth: 3,
        slug: 'b',
        text: 'b',
      },
    ];
    const result = generateToC(toc);

    expect(result).toStrictEqual([
      {
        depth: 2,
        slug: 'a',
        text: 'a',
        subheadings: [
          {
            depth: 3,
            slug: 'b',
            text: 'b',
            subheadings: [],
          },
        ]
      }
    ])
  });

  it('should return nested ToC with returns', () => {
    const toc: MarkdownHeading[] = [
      {
        depth: 2,
        slug: 'a',
        text: 'a',
      },
      {
        depth: 2,
        slug: 'b',
        text: 'b',
      },
      {
        depth: 3,
        slug: 'c',
        text: 'c',
      },
      {
        depth: 4,
        slug: 'd',
        text: 'd',
      },
      {
        depth: 2,
        slug: 'e',
        text: 'e',
      },
      {
        depth: 3,
        slug: 'f',
        text: 'f',
      },
      {
        depth: 4,
        slug: 'g',
        text: 'g',
      },
      {
        depth: 3,
        slug: 'h',
        text: 'h',
      },
      {
        depth: 2,
        slug: 'i',
        text: 'i',
      },
      {
        depth: 4,
        slug: 'j',
        text: 'j',
      },
    ];
    const result = generateToC(toc);

    expect(result).toStrictEqual([
      {
        depth: 2,
        slug: 'a',
        text: 'a',
        subheadings: [],
      },
      {
        depth: 2,
        slug: 'b',
        text: 'b',
        subheadings: [
          {
            depth: 3,
            slug: 'c',
            text: 'c',
            subheadings: [
              {
                depth: 4,
                slug: 'd',
                text: 'd',
                subheadings: [],
              },
            ]
          }
        ]
      },
      {
        depth: 2,
        slug: 'e',
        text: 'e',
        subheadings: [
          {
            depth: 3,
            slug: 'f',
            text: 'f',
            subheadings: [
              {
                depth: 4,
                slug: 'g',
                text: 'g',
                subheadings: [],
              },
            ],
          },
          {
            depth: 3,
            slug: 'h',
            text: 'h',
            subheadings: [],
          }
        ]
      },
      {
        depth: 2,
        slug: 'i',
        text: 'i',
        subheadings: [
          {
            depth: 4,
            slug: 'j',
            text: 'j',
            subheadings: [],
          }
        ]
      }
    ])
  });
})
