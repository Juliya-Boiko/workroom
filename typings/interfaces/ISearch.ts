import { IProject, ITask } from '@/typings';

type IProjectPreview = Pick<IProject, '_id' | 'name' | 'image'>;

type ITaskPreview = Pick<ITask, '_id' | 'name' | 'status'>;

export interface ISearch {
  projects: IProjectPreview[];
  tasks: ITaskPreview[];
}
