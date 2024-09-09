import { axiosInstance } from '@/libs/axios';
import { ETaskStatus, ICreateTask, ITask } from '@/typings';

export const createTask = async (data: ICreateTask) => {
  const response = await axiosInstance.post('/task', data);
  return response.data;
};

export const getTasks = async (projectId: string | undefined): Promise<ITask[]> => {
  const response = await axiosInstance.get(`/task?projectId=${projectId}`);
  return response.data;
};

interface UpdateTaskProps {
  _id: string;
  update: {
    status?: ETaskStatus;
  };
}
export const updateTask = async (data: UpdateTaskProps) => {
  const response = await axiosInstance.patch(`/task/${data._id}`, data.update);
  return response.data;
};
