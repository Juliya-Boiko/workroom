import { axiosInstance } from '@/libs/axios';
import { ICompany } from '@/typings';
import { CompanyFormData } from '@/utils';

export const getCompanyInfo = async (): Promise<ICompany> => {
  const response = await axiosInstance.get('/company');
  return response.data;
};

export const updateCompany = async (data: CompanyFormData) => {
  const response = await axiosInstance.patch('/company', data);
  return response.data;
};
