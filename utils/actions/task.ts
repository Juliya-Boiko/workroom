import { axiosInstance } from '@/libs/axios';
import { ICreateTask, ITask } from '@/typings';

export const createTask = async (data: ICreateTask) => {
  const response = await axiosInstance.post('/task', data);
  return response.data;
};

export const getTasks = async (projectId: string | undefined): Promise<ITask[]> => {
  const response = await axiosInstance.get(`/task?projectId=${projectId}`);
  return response.data;
};
