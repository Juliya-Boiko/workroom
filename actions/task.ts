import { axiosInstance } from '@/utils/axios';
import { ICreateTask } from '@/interfaces';

export const createTask = async (data: ICreateTask) => {
  const response = await axiosInstance.post('/task', data);
  return response.data;
};
