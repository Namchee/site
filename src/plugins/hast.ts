import { lastUpdated } from './hast/last-updated';
import { math } from './hast/math';
import { readingTime } from './hast/read-time';
import { sectionize } from './hast/sectionize';

export const hastPlugins = [
  readingTime,
  lastUpdated,
  sectionize,
  math,
];
