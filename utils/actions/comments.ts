import { axiosInstance } from '@/libs/axios';
import { ICreateComment, IComment } from '@/typings';

export const createComment = async (data: ICreateComment) => {
  const response = await axiosInstance.post('/comment', data);
  return response.data;
};

export const getComments = async (taskId: string): Promise<IComment[]> => {
  const response = await axiosInstance.get('/comment', {
    params: {
      taskId,
    },
  });
  return response.data;
};
