import { EIconsSet } from './EIconsSet';

export enum EViewTasks {
  LIST = 'List',
  COLUMNS = 'Columns',
  TIMELINE = 'Timeline',
}

export const tasksViewDataTypes = [
  {
    value: EViewTasks.LIST,
    icon: EIconsSet.List,
  },
  {
    value: EViewTasks.COLUMNS,
    icon: EIconsSet.Columns,
  },
  {
    value: EViewTasks.TIMELINE,
    icon: EIconsSet.Timeline,
  },
];

export enum EViewEmployees {
  LIST = 'List',
  ACTIVITY = 'Activity',
}

export const viewEmployeesDataTypes = Object.values(EViewEmployees);

export const projectsViewDataTypes = [
  {
    value: EViewTasks.LIST,
    icon: EIconsSet.List,
  },
  {
    value: EViewTasks.TIMELINE,
    icon: EIconsSet.Timeline,
  },
];
