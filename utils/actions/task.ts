import { axiosInstance } from '@/libs/axios';
import { ICreateTask, IUpdateTask, ITask, IFilters } from '@/typings';
import { uploadImage } from '../helpers';

export const createTask = async (data: ICreateTask): Promise<{ projectId: string }> => {
  const uploaded = data.attachments.map(async ({ title, type, value }) => {
    if (value instanceof File) {
      const url = await uploadImage(value);
      return { title, type, value: url };
    }
    return { title, value, type };
  });
  const attachments = await Promise.all(uploaded);
  const response = await axiosInstance.post('/task', { ...data, attachments });
  return response.data;
};

export const getTasks = async (projectId: string, filters: IFilters | null): Promise<ITask[]> => {
  const assignee = filters?.assignee?.map(({ _id }) => _id).join(',');
  const response = await axiosInstance.get(`/task`, {
    params: {
      projectId,
      ...filters,
      assignee,
    },
  });
  return response.data;
};

export const updateTask = async (
  data: IUpdateTask
): Promise<{ projectId: string; taskId: string }> => {
  const response = await axiosInstance.patch(`/task/${data._id}`, data.update);
  return response.data;
};

export const getTaskById = async (id: string): Promise<ITask> => {
  const response = await axiosInstance.get(`/task/${id}`);
  return response.data;
};

export const deleteTask = async (id: string) => {
  await axiosInstance.delete(`/task/${id}`);
};
