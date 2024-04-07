import { remarkReadingTime } from './remark/read-time';
import { remarkLastUpdated } from './remark/last-updated';

export const remarkPlugins = [
  remarkReadingTime,
  remarkLastUpdated,
];
