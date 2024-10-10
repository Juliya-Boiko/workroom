import { axiosInstance } from '@/libs/axios';
import { ISearch } from '@/typings';

export const getSearch = async (value: string): Promise<ISearch> => {
  const response = await axiosInstance.get(`/search?value=${value}`);
  return response.data;
};
