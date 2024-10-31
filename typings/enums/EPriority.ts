import { EIconsSet } from './EIconsSet';

export enum EPriority {
  LOW = 'low',
  MEDIUM = 'medium',
  HIGH = 'high',
}

export const EPrioritySet = {
  [EPriority.HIGH]: EIconsSet.Circle,
  [EPriority.MEDIUM]: EIconsSet.ArrowUp,
  [EPriority.LOW]: EIconsSet.ArrowDown,
};

export const priorityDataTypes = Object.values(EPriority);
