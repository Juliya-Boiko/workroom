import { axiosInstance } from '@/libs/axios';
import { IFolder, IFolderInfo } from '@/typings';
import { AddFolderFormData } from '@/utils';

export const createFolder = async (data: AddFolderFormData) => {
  await axiosInstance.post('/folder', data);
};

export const getFolders = async (): Promise<IFolder[]> => {
  const response = await axiosInstance.get('/folder');
  return response.data;
};

export const getFolderById = async (id: string): Promise<IFolderInfo> => {
  const response = await axiosInstance.get(`/folder/${id}`);
  return response.data;
};
