import { axiosInstance } from '@/libs/axios';
import { IFolder } from '@/typings';
import { AddFolderFormData } from '@/utils';

export const createFolder = async (data: AddFolderFormData) => {
  await axiosInstance.post('/folder', data);
};

export const getFolders = async (): Promise<IFolder[]> => {
  const response = await axiosInstance.get('/folder');
  return response.data;
};
