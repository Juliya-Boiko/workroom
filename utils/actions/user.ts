/* eslint-disable @typescript-eslint/no-explicit-any */
import { axiosInstance } from '@/libs/axios';
import { IUserInfo, IEmployee, ELevelEmployee } from '@/typings';
import { ProfileFormData, uploadImage } from '@/utils';

export const getUserInfo = async (): Promise<IUserInfo> => {
  const response = await axiosInstance.get('/user/info');
  return response.data;
};

export const getProfile = async (): Promise<IEmployee> => {
  const response = await axiosInstance.get('/user/profile');
  return response.data;
};

export const updateProfile = async (data: ProfileFormData): Promise<IUserInfo> => {
  const avatar = await uploadImage(data.avatar);
  const response = await axiosInstance.patch('/user/profile', { ...data, avatar });
  return response.data;
};

export const getEmployees = async (take?: number): Promise<IEmployee[]> => {
  const response = await axiosInstance.get(`/user/employee?take=${take}`);
  return response.data;
};

export const getEmployeeById = async (id: string): Promise<IEmployee> => {
  const response = await axiosInstance.get(`/user/employee/${id}`);
  return response.data;
};

interface UpdateLevelProps {
  id: string;
  level: ELevelEmployee;
}

export const updateLevelEmployee = async ({
  id,
  level,
}: UpdateLevelProps): Promise<{ level: ELevelEmployee; _id: string }> => {
  const response = await axiosInstance.patch(`/user/employee/${id}`, { level });
  return response.data;
};
