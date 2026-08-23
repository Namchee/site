import { lastUpdated } from './hast/last-updated';
import { math as hastMath } from './hast/math';
import { readingTime } from './hast/read-time';
import { sectionize } from './hast/sectionize';
import { math as mdastMath } from './mdast/math';

export const hastPlugins = [readingTime, lastUpdated, sectionize, hastMath];

export const mdastPlugins = [mdastMath];
