import { EPriority } from '@/enums';
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

export const chooseSectionSkeleton: { _id: string; name: string }[] = [
  // {
  //   _id: '1',
  //   name: 'Medical App (iOS native)',
  // },
  // {
  //   _id: '2',
  //   name: 'Food Delivery Service',
  // },
  // {
  //   _id: '3',
  //   name: 'Fortune website',
  // },
];
