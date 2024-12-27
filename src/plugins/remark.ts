import remarkMath from 'remark-math';
import remarkMermaid from 'remark-mermaidjs';

import { remarkSectionize } from './remark/sectionize';
import { remarkReadingTime } from './remark/read-time';
import { remarkLastUpdated } from './remark/last-updated';

export const remarkPlugins = [
  remarkMath,
  remarkMermaid,
  remarkReadingTime,
  remarkLastUpdated,
  remarkSectionize,
];
