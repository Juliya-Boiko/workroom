import { axiosInstance } from '@/utils/axios';

export const getCompanyInfo = async () => {
  const response = await axiosInstance.get('/company/info');
  return response.data;
};
