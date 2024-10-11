import { axiosInstance } from '@/libs/axios';
import { IEmployee, IUpdateEmployee } from '@/typings';
import { reseTasktEmployees } from '../tasks/task';
import { deleteUserNotifications } from '../notifications/notifications';

export const getEmployees = async (take?: number): Promise<IEmployee[]> => {
  const response = await axiosInstance.get(`/employee?take=${take}`);
  return response.data;
};

export const getEmployeeById = async (id: string): Promise<IEmployee> => {
  const response = await axiosInstance.get(`/employee/${id}`);
  return response.data;
};

export const updateLevelEmployee = async ({
  _id,
  level,
}: IUpdateEmployee): Promise<IUpdateEmployee> => {
  const response = await axiosInstance.patch(`/employee/${_id}`, { level });
  return response.data;
};

export const deleteEmployee = async (id: string) => {
  await axiosInstance.delete(`/employee/${id}`);
  await reseTasktEmployees(id);
  await deleteUserNotifications(id);
};
