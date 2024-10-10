import { axiosInstance } from '@/libs/axios';
import { IProjectInfo, IProjectDetails, IFilters } from '@/typings';
import {
  AddProjectFormData,
  uploadImage,
  uploadThumb,
  IMAGE_THUMB_STARTS,
  deleteProjectTasks,
  deleteImage,
} from '@/utils';

interface IProjectsResponse {
  projects: IProjectInfo[];
  total: number;
}

export const getProjects = async (
  filters: IFilters | null,
  take?: number,
  skip?: number
): Promise<IProjectsResponse> => {
  const response = await axiosInstance.get('/project', {
    params: {
      take,
      skip,
      ...filters,
    },
  });
  return response.data;
};

export const getFolderlessProjects = async (): Promise<{ _id: string; name: string }[]> => {
  const response = await axiosInstance.get('/project/folder');
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
  const project = await getProjectById(id);
  await axiosInstance.delete(`/project/${id}`);
  if (!project.image.includes(IMAGE_THUMB_STARTS)) {
    await deleteImage(project.image);
  }
  await deleteProjectTasks(id);
};

export type IEditProject = { values: AddProjectFormData; id: string };

export const updateProject = async (data: IEditProject): Promise<string> => {
  const image = await uploadThumb(data.values.image);
  const response = await axiosInstance.patch(`/project/${data.id}`, { ...data.values, image });
  return response.data;
};
