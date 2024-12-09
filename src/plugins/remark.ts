import remarkMath from 'remark-math';

import { remarkSectionize } from './remark/sectionize';
import { remarkReadingTime } from './remark/read-time';
import { remarkLastUpdated } from './remark/last-updated';

export const remarkPlugins = [
  remarkMath,
  remarkReadingTime,
  remarkLastUpdated,
  remarkSectionize,
];
