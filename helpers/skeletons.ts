import { EPriority, EUserPosition } from '@/enums';
import { IProjectInfo } from '@/interfaces';

export const projectSectionSkeleton: IProjectInfo[] = [
  {
    deadline: '',
    name: '',
    priority: EPriority.LOW,
    start: '',
    _id: '1',
    tasks: {
      all: 0,
      active: 0,
      assignee: [],
    },
  },
  {
    _id: '2',
    deadline: '',
    name: '',
    priority: EPriority.LOW,
    start: '',
    tasks: {
      all: 0,
      active: 0,
      assignee: [],
    },
  },
  {
    _id: '3',
    deadline: '',
    name: '',
    priority: EPriority.LOW,
    start: '',
    tasks: {
      all: 0,
      active: 0,
      assignee: [],
    },
  },
];

export const employeeSectionSkeleton = [
  {
    _id: '1',
    avatar: null,
    birthday: null,
    email: '',
    level: null,
    location: null,
    name: '',
    position: EUserPosition.EMPLOYEE,
  },
];
