import { axiosInstance } from '@/libs/axios';
import { IFolder, IFolderInfo, IUpdateFolder } from '@/typings';
import { AddFolderFormData } from '@/utils';
import { updatePagesOrder, deleteFolderPages } from '../pages/pages';

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

export const updateFolder = async (data: IUpdateFolder): Promise<{ folderId: string }> => {
  const response = await axiosInstance.patch(`/folder/${data.id}`, data.update);
  if (data.pages) {
    await updatePagesOrder(data.pages);
  }
  return response.data;
};

export const shareFolder = async (data: IUpdateFolder): Promise<{ folderId: string }> => {
  const response = await axiosInstance.put(`/folder/${data.id}`, data.update);
  return response.data;
};

export const deleteFolder = async (id: string) => {
  await axiosInstance.delete(`/folder/${id}`);
  await deleteFolderPages(id);
};
