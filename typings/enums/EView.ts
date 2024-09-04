import { EIconsSet } from './EIconsSet';

export enum EView {
  LIST = 'List',
  COLUMNS = 'Columns',
  TIMELINE = 'Timeline',
}

export const viewDataTypes = [
  {
    value: EView.LIST,
    icon: EIconsSet.List,
  },
  {
    value: EView.COLUMNS,
    icon: EIconsSet.Columns,
  },
  {
    value: EView.TIMELINE,
    icon: EIconsSet.Timeline,
  },
];
