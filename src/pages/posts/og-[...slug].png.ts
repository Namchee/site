import { readFileSync } from 'node:fs';

import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';

import satori, { type SatoriOptions } from 'satori';
import sharp from 'sharp';
import getReadingTime from 'reading-time';

import { Template } from './_og-template';

interface Params {
  title: string;
  publishedAt: Date;
  timeToRead: number;
  tags: string[];
}

async function generateOGImage(params: Params) {
  const opts: SatoriOptions = {
    width: 1200,
    height: 630,
    fonts: [
      {
        name: 'Inter',
        data: readFileSync('./public/fonts/inter-medium.ttf'),
        weight: 500,
        style: 'normal',
      },
      {
        name: 'Inter',
        data: readFileSync('./public/fonts/inter-semibold.ttf'),
        weight: 600,
        style: 'normal',
      },
    ],
  };

  const logoBuffer = readFileSync('./public/og-logo.png');

  const svg = await satori(Template(params, logoBuffer), opts);

  const sharpSvg = Buffer.from(svg);

  const buffer = await sharp(sharpSvg).toBuffer();

  return buffer;
}

export async function GET(ctx: APIContext) {
  const image = await generateOGImage(ctx.props as Params);

  return new Response(image, {
    status: 200,
    headers: {
      'Content-Type': 'image/png',
    },
  });
}

export async function getStaticPaths() {
  const blogPosts = await getCollection('posts');

  return blogPosts.map(post => ({
    params: {
      slug: post.slug,
    },
    props: {
      title: post.data.title,
      publishedAt: post.data.publishedAt,
      timeToRead: Math.ceil(getReadingTime(post.body).minutes),
      tags: post.data.tags,
    },
  }));
}
