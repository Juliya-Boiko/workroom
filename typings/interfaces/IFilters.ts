import { EPriority, ETaskStatus } from '../enums';

export interface ISelectAssignee {
  _id: string;
  name: string;
  avatar: string | null;
}

export interface IFilters {
  priority: EPriority | null;
  status: ETaskStatus | null;
  assignee: ISelectAssignee[];
  start: Date | null;
  end: Date | null;
}
