import type { RemarkPlugins } from 'astro';

import remarkMath from 'remark-math';

import { remarkLastUpdated } from './remark/last-updated';
import { remarkReadingTime } from './remark/read-time';
import { remarkSectionize } from './remark/sectionize';

export const remarkPlugins: RemarkPlugins = [
  remarkMath,
  remarkReadingTime,
  remarkLastUpdated,
  remarkSectionize,
];
