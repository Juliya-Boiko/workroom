import { axiosInstance } from '@/utils/axios';
import { IProject } from '@/interfaces';
import { AddProjectFormData } from '@/utils/schemas';

export const getProjects = async (take: number): Promise<IProject[]> => {
  const response = await axiosInstance.get(`/project?take=${take}`);
  return response.data;
};

export const createProject = async (data: AddProjectFormData) => {
  const response = await axiosInstance.post('/project', data);
  return response.data;
};
