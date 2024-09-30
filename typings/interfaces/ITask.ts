import { EPriority, ETaskStatus } from '../enums';
import { ICreateFile, ICreateLink, ICreateAttach } from './IAttachments';
import { IAssignee } from './IUserInfo';

export interface ICreateTask {
  name: string;
  start: Date;
  deadline: Date;
  priority: EPriority;
  assignee: string;
  description: string;
  attachments: {
    links: ICreateLink[];
    files: ICreateFile[];
  };
}

export interface IUploadTask {
  name: string;
  start: Date;
  deadline: Date;
  priority: EPriority;
  assignee: string;
  description: string;
  attachments: {
    links: ICreateAttach[];
    files: ICreateAttach[];
  };
}

export interface ITask extends Omit<ICreateTask, 'assignee' | 'attachments'> {
  _id: string;
  updatedAt: Date;
  createdAt: Date;
  status: ETaskStatus;
  projectId: string;
  assignee: IAssignee;
}

export interface IUpdateTask {
  _id: string;
  update: {
    assignee?: string;
    deadline?: Date;
    description?: string;
    priority?: EPriority;
    name?: string;
    start?: Date;
    status?: ETaskStatus;
  };
}
