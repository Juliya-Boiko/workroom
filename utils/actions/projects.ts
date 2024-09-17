import { axiosInstance } from '@/libs/axios';
import { IProjectInfo, IProjectDetails } from '@/typings';
import { AddProjectFormData, uploadImage, IMAGE_THUMB_STARTS } from '@/utils';

interface IProjectsResponse {
  projects: IProjectInfo[];
  total: number;
}

export const getProjects = async (take?: number, skip?: number): Promise<IProjectsResponse> => {
  const response = await axiosInstance.get('/project', {
    params: {
      take,
      skip,
    },
  });
  return response.data;
};

export const createProject = async (data: AddProjectFormData): Promise<string> => {
  let image: string | null = data.image[0];
  if (!data.image[0].includes(IMAGE_THUMB_STARTS) && data.image[1] instanceof File) {
    const uploaded = await uploadImage(data.image[1]);
    image = uploaded;
  }
  const response = await axiosInstance.post('/project', { ...data, image });
  return response.data;
};

export const getProjectById = async (id?: string): Promise<IProjectDetails> => {
  const response = await axiosInstance.get(`/project/${id}`);
  return response.data;
};

export const deleteProject = async (id: string) => {
  await axiosInstance.delete(`/project/${id}`);
};
