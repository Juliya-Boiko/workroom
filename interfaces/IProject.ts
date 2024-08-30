import { EPriority } from '@/enums';

export interface IProject {
  _id: string;
  deadline: string;
  name: string;
  priority: EPriority;
  start: string;
  assignee: string[];
}
