import { axiosInstance } from '@/libs/axios';
import { ICreateTask, IUpdateTask, ITask, IFilters } from '@/typings';

export const createTask = async (data: ICreateTask): Promise<{ projectId: string }> => {
  const response = await axiosInstance.post('/task', data);
  return response.data;
};

export const getTasks = async (projectId: string, filters: IFilters | null): Promise<ITask[]> => {
  const response = await axiosInstance.get(`/task`, {
    params: {
      projectId,
      ...filters,
    },
    paramsSerializer: (params) => {
      return new URLSearchParams(params).toString();
    },
  });
  return response.data;
};

export const updateTask = async (data: IUpdateTask): Promise<{ projectId: string }> => {
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
