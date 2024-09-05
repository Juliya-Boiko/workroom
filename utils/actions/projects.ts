import { axiosInstance } from '@/libs/axios';
import { IProjectInfo } from '@/typings';
import { AddProjectFormData, uploadImage, IMAGE_THUMB_STARTS } from '@/utils';

export const getProjects = async (take?: number): Promise<IProjectInfo[]> => {
  const response = await axiosInstance.get(`/project?take=${take}`);
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
