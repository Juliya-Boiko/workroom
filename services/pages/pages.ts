import { axiosInstance } from '@/libs/axios';
import { ICreatePage, IPage, IUpdatePage, IPageOrder } from '@/typings';

export const createPage = async (data: ICreatePage): Promise<{ folderId: string }> => {
  const response = await axiosInstance.post('/page', data);
  return response.data;
};

export const getPages = async (folderId: string): Promise<IPage[]> => {
  const response = await axiosInstance.get(`/page`, {
    params: { folderId },
  });
  return response.data;
};

export const deletePage = async (id: string): Promise<{ folderId: string }> => {
  const response = await axiosInstance.delete(`/page/${id}`);
  return response.data;
};

export const updatePage = async (data: IUpdatePage): Promise<{ folderId: string }> => {
  const response = await axiosInstance.patch(`/page/${data.id}`, data.update);
  return response.data;
};

export const updatePagesOrder = async (data: IPageOrder[]) => {
  await axiosInstance.patch('/page', data);
};

export const deleteFolderPages = async (folderId: string) => {
  const data = await getPages(folderId);
  data.every(async ({ _id }) => {
    await deletePage(_id);
  });
};
