import { axiosInstance } from '@/libs/axios';
import { ICreateComment, IUpdateComment, IComment } from '@/typings';

export const createComment = async (data: ICreateComment): Promise<string> => {
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

export const deleteCommentById = async (id: string): Promise<string> => {
  const response = await axiosInstance.delete(`/comment/${id}`);
  return response.data;
};

export const updateCommentById = async (data: IUpdateComment): Promise<string> => {
  const response = await axiosInstance.patch(`/comment/${data.id}`, data.update);
  return response.data;
};
