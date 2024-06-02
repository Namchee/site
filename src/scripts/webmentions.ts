import { existsSync, readFileSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';

export interface Webmention {
  type: string;
  content: {
    text: string;
  };
  author?: {
    name: string;
    url: string;
    photo: string;
  };
  'wm-target': string;
  'wm-id': number;
  'wm-property': 'in-reply-to' | 'like-of' | 'repost-of' | 'mention-of';
}

interface WebmentionResponse {
  children: Webmention[];
}

async function fetchWebmentions() {
  const baseURL = 'https://webmention.io/api/mentions.jf2';
  const params = new URLSearchParams();

  params.append('domain', 'www.namchee.dev');
  params.append('token', process.env.WEBMENTIONS_API_KEY);
  params.append('per-page', '1000');

  const response = await fetch(`${baseURL}?${params.toString()}`);
  const body = await response.json() as WebmentionResponse;
  if (!body.children) {
    throw new Error('Invalid WebMention response');
  }

  return body.children;
}

async function syncWebmentions() {
  const webmentions = await fetchWebmentions();
  for (const mention of webmentions) {
    const slug = new URL(mention['wm-target']).pathname.
      split('/').
      pop();

    const filename = resolve(process.cwd(), 'data', 'webmentions', `${slug}.json`);

    if (!existsSync(filename)) {
      writeFileSync(filename, JSON.stringify([mention], null, 2));
    } else {
      const entries = JSON.parse(readFileSync(filename, 'utf-8')) as Webmention[];
      const updatedEntries = [...entries.
        filter(wm => wm['wm-id'] !== mention['wm-id']), mention];
      updatedEntries.sort((a, b) => a['wm-id'] - b['wm-id']);

      writeFileSync(filename, JSON.stringify(updatedEntries, null, 2));
    }
  }
}

// eslint-disable-next-line no-void
void (async () => {
  await syncWebmentions();
})();
