/* eslint-disable @typescript-eslint/no-explicit-any */
import { axiosInstance } from '@/libs/axios';
import { uploadToCloudinary } from '@/libs/cloudinary';
import { IUserInfo, IEmployee } from '@/typings';
import { ProfileFormData, encodeImage } from '@/utils';

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
  let avatar = data.avatar;
  if (avatar && avatar instanceof File) {
    const { fileUri, fileName } = await encodeImage(avatar);
    const uploadResult: any = await uploadToCloudinary(fileUri, fileName);
    if (uploadResult.success) {
      avatar = uploadResult.result.secure_url;
    }
  }
  const response = await axiosInstance.patch('/user/profile', { ...data, avatar });
  return response.data;
};
