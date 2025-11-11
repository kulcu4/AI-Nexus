
import type { Generator } from './types';
import { LeonardoIcon, PikaIcon, RunwayIcon, MidjourneyIcon } from './components/icons/GeneratorIcons';

export const INITIAL_GENERATORS: Generator[] = [
  {
    id: 'leonardo',
    name: 'Leonardo AI',
    icon: LeonardoIcon,
    creditsUsed: 120,
    creditsTotal: 150,
    refreshTime: 'Refreshes in 4h',
  },
  {
    id: 'pika',
    name: 'Pika',
    icon: PikaIcon,
    creditsUsed: 75,
    creditsTotal: 100,
    refreshTime: 'Refreshes in 4h',
  },
  {
    id: 'runway',
    name: 'Runway',
    icon: RunwayIcon,
    creditsUsed: 0,
    creditsTotal: 125,
    refreshTime: 'Refreshes in 4h',
  },
  {
    id: 'midjourney',
    name: 'Midjourney',
    icon: MidjourneyIcon,
    creditsUsed: 0,
    creditsTotal: 200,
    refreshTime: '0 0h',
  },
];
