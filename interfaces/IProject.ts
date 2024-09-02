import { EPriority } from '@/enums';
import { IAssignee } from './IUserInfo';
export interface IProject {
  deadline: string;
  name: string;
  priority: EPriority;
  start: string;
  _id: string;
}

export interface IProjectInfo extends IProject {
  tasks: {
    active: number;
    all: number;
    assignee: IAssignee[];
  };
}
