import { readFileSync } from 'node:fs';
import sharp from 'sharp';

import { getCollection } from 'astro:content';

import satori, { type SatoriOptions } from 'satori';

import { Template } from './og-template';

interface Params {
  title: string;
  publishedAt: Date;
  tags: string[];
}

async function generateOGImage(params: Params) {
  const opts: SatoriOptions = {
    width: 1200,
    height: 630,
    fonts: [
      {
        name: 'Pretendard',
        data: readFileSync('./public/fonts/pretendard-medium.ttf'),
        weight: 500,
        style: 'normal',
      },
      {
        name: 'Pretendard',
        data: readFileSync('./public/fonts/pretendard-semibold.ttf'),
        weight: 600,
        style: 'normal',
      },
    ],
  };

  const svg = await satori(Template(params), opts);

  const sharpSvg = Buffer.from(svg);

  const buffer = await sharp(sharpSvg).toBuffer();

  return buffer;
}

export async function GET({ params }: { params: Params; }) {
  const image = await generateOGImage(params);

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
      title: post.data.title,
      publishedAt: post.data.publishedAt,
      tags: post.data.tags,
    },
    props: { post },
  }));
}
