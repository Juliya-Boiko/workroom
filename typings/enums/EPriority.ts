import { EIconsSet } from './EIconsSet';

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

export const priorityDataTypes = Object.values(EPriority);