import { axiosInstance } from '@/libs/axios';

export const getCompanyInfo = async () => {
  const response = await axiosInstance.get('/company/info');
  return response.data;
};
