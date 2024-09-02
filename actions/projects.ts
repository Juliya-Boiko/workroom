import { axiosInstance } from '@/utils/axios';
import { IProjectInfo } from '@/interfaces';
import { AddProjectFormData } from '@/schemas';

export const getProjects = async (take?: number): Promise<IProjectInfo[]> => {
  const response = await axiosInstance.get(`/project?take=${take}`);
  return response.data;
};

export const createProject = async (data: AddProjectFormData) => {
  const response = await axiosInstance.post('/project', data);
  return response.data;
};
