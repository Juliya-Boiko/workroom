import { axiosInstance } from '@/libs/axios';
import {
  ICreateTask,
  IUpdateTask,
  ITask,
  IFilters,
  IUploadTask,
  ITaskAttachments,
} from '@/typings';
import { uploadImage } from '../helpers';

export const createTask = async (data: ICreateTask): Promise<{ projectId: string }> => {
  const values: IUploadTask = { ...data };
  if (values.attachments.files.length) {
    const thumbs = data.attachments.files.map(async (file) => {
      const url = await uploadImage(file.value);
      return { ...file, value: url };
    });
    const images = await Promise.all(thumbs);
    values.attachments.files = images;
  }
  const response = await axiosInstance.post('/task', values);
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

export const getTaskById = async (
  id: string
): Promise<{ task: ITask; attachments: ITaskAttachments }> => {
  const response = await axiosInstance.get(`/task/${id}`);
  return response.data;
};

export const deleteTask = async (id: string) => {
  await axiosInstance.delete(`/task/${id}`);
};
