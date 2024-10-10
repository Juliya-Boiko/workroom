import { axiosInstance } from '@/libs/axios';
import { ICreatePage, IPage } from '@/typings';

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
