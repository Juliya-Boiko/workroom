import { axiosInstance } from '@/libs/axios';
import { ICreateTask, IUpdateTask, ITask, IFilters, ICreateAttach } from '@/typings';
import { uploadImage } from '../helpers';
import { createAttach } from './attachments';

export const createTask = async (
  data: ICreateTask
): Promise<{ projectId: string; taskId: string }> => {
  const response = await axiosInstance.post('/task', data);
  const values = data.attachments.map(async ({ title, type, value }) => {
    if (value instanceof File) {
      const url = await uploadImage(value);
      return { taskId: response.data.taskId, title, type, value: url };
    }
    return { taskId: response.data.taskId, title, value, type };
  });
  const uploaded = await Promise.all(values);
  const attachments = uploaded.map(async (el) => {
    await createAttach(el);
  });
  await Promise.all(attachments);
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
  if (data.update.attachments) {
    const attachments: ICreateAttach[] = data.update.attachments.filter((el) => !el._id);
    if (attachments.length) {
      const values = attachments.map(async ({ title, type, value }) => {
        if (value instanceof File) {
          const url = await uploadImage(value);
          return { taskId: data._id, title, type, value: url };
        }
        return { taskId: data._id, title, value, type };
      });
      const uploaded = await Promise.all(values);
      const created = uploaded.map(async (el) => {
        await createAttach(el);
      });
      await Promise.all(created);
    }
  }
  return response.data;
};

export const getTaskById = async (id: string): Promise<ITask> => {
  const response = await axiosInstance.get(`/task/${id}`);
  return response.data;
};

export const deleteTask = async (id: string) => {
  await axiosInstance.delete(`/task/${id}`);
};
