import { axiosInstance } from '@/libs/axios';
import { IEmployee, IUpdateEmployee } from '@/typings';

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
