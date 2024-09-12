import { axiosInstance } from '@/libs/axios';
import { IProject, ITask } from '@/typings';

type IProjectPreview = Pick<IProject, '_id' | 'name' | 'image'>;

type ITaskPreview = Pick<ITask, '_id' | 'name' | 'status'>;

interface Result {
  projects: IProjectPreview[];
  tasks: ITaskPreview[];
}

export const getSearch = async (value: string): Promise<Result> => {
  const response = await axiosInstance.get(`/search?value=${value}`);
  return response.data;
};
