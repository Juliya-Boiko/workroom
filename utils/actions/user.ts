import { axiosInstance } from '@/libs/axios';
import { IUserInfo, IEmployee } from '@/typings';
import { uploadImage, deleteImage } from '@/utils';

export const getUserInfo = async (): Promise<IUserInfo> => {
  const response = await axiosInstance.get('/user');
  return response.data;
};

export const getProfile = async (): Promise<IEmployee> => {
  const response = await axiosInstance.get('/user/profile');
  return response.data;
};

type AvatarUpdate = {
  oldAvatar: string | null;
  newAvatar: string | null | File;
};

interface IUpdate {
  phone?: string | null;
  email?: string;
  location?: string | null;
  birthday?: Date | null;
  name?: string;
  avatar?: AvatarUpdate;
}

export const updateProfile = async (data: IUpdate): Promise<IUserInfo> => {
  if (data.avatar) {
    if (data.avatar.oldAvatar) {
      await deleteImage(data.avatar.oldAvatar);
    }
    const avatar = await uploadImage(data.avatar.newAvatar);
    const response = await axiosInstance.patch('/user/profile', { ...data, avatar });
    return response.data;
  } else {
    const response = await axiosInstance.patch('/user/profile', data);
    return response.data;
  }
};
