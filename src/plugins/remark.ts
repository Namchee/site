import remarkMath from 'remark-math';

import { remarkSectionize } from './remark/sectionize';
import { remarkReadingTime } from './remark/read-time';
import { remarkLastUpdated } from './remark/last-updated';
import type { RemarkPlugins } from 'astro';

export const remarkPlugins: RemarkPlugins = [
  remarkMath,
  remarkReadingTime,
  remarkLastUpdated,
  remarkSectionize,
];
