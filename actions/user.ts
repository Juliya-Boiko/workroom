import { axiosInstance } from '@/utils/axios';
import { IUserInfo } from '@/interfaces';

export const getUserInfo = async (): Promise<IUserInfo> => {
  const response = await axiosInstance.get('/user/info');
  return response.data;
};
