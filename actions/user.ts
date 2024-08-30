import { axiosInstance } from '@/utils/axios';
import { IUserInfo } from '@/interfaces';

export const getUserInfo = async (): Promise<IUserInfo> => {
  const response = await axiosInstance.get('/user/info');
  return response.data;
};

export const getEmployees = async (take?: number) => {
  const response = await axiosInstance.get(`/user/employee?take=${take}`);
  return response.data;
};
