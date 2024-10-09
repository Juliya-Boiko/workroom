import { axiosInstance } from '@/libs/axios';
import { createNotification } from './notifications';
import { ICreateComment, IUpdateComment, IComment, ENotificationType } from '@/typings';

export const createComment = async (
  values: ICreateComment
): Promise<{ taskId: string; userId: string; companyId: string }> => {
  const { data } = await axiosInstance.post('/comment', values);
  await createNotification({
    taskId: data.taskId,
    type: ENotificationType.COMMENT,
  });
  return data;
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
