import { axiosInstance } from '@/libs/axios';
import { uploadImage, deleteImage } from '@/utils';
import { IUserInfo, IProfile } from '@/typings';

export const getUserInfo = async (): Promise<IUserInfo> => {
  const response = await axiosInstance.get('/user');
  return response.data;
};

export const getProfile = async (): Promise<IProfile> => {
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
  settings?: {
    emailActivity: boolean;
    notifyTask: boolean;
    notifyComment: boolean;
  };
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
