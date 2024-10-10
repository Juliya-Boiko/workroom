import { axiosInstance } from '@/libs/axios';
import { ICreateTimelog } from '@/typings';

export const createTimelog = async (data: ICreateTimelog): Promise<string> => {
  const response = await axiosInstance.post('/timelog', data);
  return response.data;
};

export const getTaskLogs = async (taskId: string): Promise<number> => {
  const response = await axiosInstance.get('/timelog', {
    params: {
      taskId,
    },
  });
  return response.data;
};
