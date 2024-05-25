import { readFileSync } from 'node:fs';

import satori, { type SatoriOptions } from 'satori';

import { Template } from './og-template';

export async function GET({ params }) {
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

  const svg = await satori(Template(), opts);
}

export async function GET({ props }) {
  const response = await generateOgImage(props.title, props.date);
  return new Response(response, {
    status: 200,
    headers: {
      "Content-Type": "image/png",
    },
  });
};
