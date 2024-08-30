import { EPriority } from '@/enums';

export interface ICreateTask {
  // _id: string;
  name: string;
  start: Date;
  deadline: Date;
  priority: EPriority;
  assignee: string;
  description: string;
}
