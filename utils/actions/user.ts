import { axiosInstance } from '@/libs/axios';
import { IUserInfo, IEmployee } from '@/typings';
import { ProfileFormData, uploadImage } from '@/utils';

export const getUserInfo = async (): Promise<IUserInfo> => {
  const response = await axiosInstance.get('/user');
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
