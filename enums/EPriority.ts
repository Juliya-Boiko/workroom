import { EIconsSet } from '@/enums/EIconsSet';

export enum EPriority {
  LOW = 'Low',
  MEDIUM = 'Medium',
  HIGH = 'High',
}

export const EPrioritySet = {
  [EPriority.HIGH]: EIconsSet.Circle,
  [EPriority.MEDIUM]: EIconsSet.ArrowUp,
  [EPriority.LOW]: EIconsSet.ArrowDown,
};
