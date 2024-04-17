import { co2 } from '@tgwf/co2';

interface PageSpeed {
  time: number;
  carbon: number;
}

interface Calculator {
  // eslint-disable-next-line no-unused-vars
  perByte: (_: number) => number;
}

interface PageSpeedResult {
  lighthouseResult: {
    audits: {
      [key: string]: {
        numericValue: number;
        details: {
          items: {
            transferSize: number;
          }[];
        };
      }
    }
  };
}

export async function getInsight(location: string): Promise<PageSpeed> {
  if (import.meta.env.DEV) {
    return {
      time: 0.1234,
      carbon: 0.21,
    };
  }

  const params = new URLSearchParams();
  params.set('url', location);
  params.set('key', import.meta.env.PAGESPEED_KEY as string);
  params.set('category', 'performance');

  // eslint-disable-next-line no-undef
  const response = await fetch(`${import.meta.env.PAGESPEED_API}?${params.toString()}`);
  const pagespeed = (await response.json()) as PageSpeedResult;

  const bytes = pagespeed.lighthouseResult.audits['network-requests'];
  // use speed index since it's not a heavy-interaction website
  const time = pagespeed.lighthouseResult.audits['speed-index'];

  const totalBytes = bytes.details.items.reduce(
    (acc, curr) => acc + curr.transferSize,
    0,
  );
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  const swd = new co2({ model: 'swd' }) as Calculator;

  const carbon = swd.perByte(totalBytes);

  return {
    time: time.numericValue / 1000,
    carbon: carbon,
  };
}

