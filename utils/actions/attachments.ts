import { axiosInstance } from '@/libs/axios';
import { EAttachType, IAttachment } from '@/typings';
import { deleteImage } from '@/utils';

export const getAttachments = async (taskId: string): Promise<IAttachment[]> => {
  const response = await axiosInstance.get(`/attach`, {
    params: {
      taskId,
    },
  });
  return response.data;
};

export const getAttachById = async (id: string): Promise<IAttachment> => {
  const response = await axiosInstance.get(`/attach/${id}`);
  return response.data;
};

interface DeleteProps {
  id: string;
  type: EAttachType;
}

export const deleteAttach = async ({ id, type }: DeleteProps): Promise<{ taskId: string }> => {
  if (type === EAttachType.FILE) {
    const attach = await getAttachById(id);
    await deleteImage(attach.value);
  }
  const response = await axiosInstance.delete(`/attach/${id}`);
  return response.data;
};
