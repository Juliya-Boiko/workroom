import { EPriority, ETaskStatus } from '../enums';
import { IAssignee } from './IUserInfo';

export interface IProject {
  image: string;
  deadline: string;
  name: string;
  priority: EPriority;
  createdAt: string;
  _id: string;
  order: string;
}

export interface IProjectResponse extends IProject {
  tasks: {
    status: ETaskStatus;
    assignee: IAssignee;
  }[];
}

export interface IProjectInfo extends IProject {
  description: string;
  tasks: {
    active: number;
    all: number;
    assignee: IAssignee[];
  };
}

export interface IProjectDetails extends IProjectInfo {
  start: string;
}
