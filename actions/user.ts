import { axiosInstance } from '@/utils/axios';
import { IUserInfo, IEmployee } from '@/typings';
import { ProfileFormData } from '@/schemas';

export const getUserInfo = async (): Promise<IUserInfo> => {
  const response = await axiosInstance.get('/user/info');
  return response.data;
};

export const getEmployees = async (take?: number): Promise<IEmployee[]> => {
  const response = await axiosInstance.get(`/user/employee?take=${take}`);
  return response.data;
};

export const getProfile = async (): Promise<IEmployee> => {
  const response = await axiosInstance.get('/user/profile');
  return response.data;
};

export const updateProfile = async (data: ProfileFormData): Promise<IUserInfo> => {
  const response = await axiosInstance.patch('/user/profile', data);
  return response.data;
};
