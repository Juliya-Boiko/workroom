import { axiosInstance } from '@/libs/axios';
import { IProjectInfo } from '@/typings';
import { AddProjectFormData } from '@/utils';

export const getProjects = async (take?: number): Promise<IProjectInfo[]> => {
  const response = await axiosInstance.get(`/project?take=${take}`);
  return response.data;
};

export const createProject = async (data: AddProjectFormData) => {
  const response = await axiosInstance.post('/project', data);
  return response.data;
};
