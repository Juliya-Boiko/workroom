import { axiosInstance } from '@/libs/axios';
import { deleteImage } from '@/utils';
import { createNotification } from '../notifications/notifications';
import { EAttachType, ENotificationType, IAttachment } from '@/typings';

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

interface CreateProps {
  taskId: string;
  title: string;
  type: EAttachType;
  value: string | null;
}

export const createAttach = async (data: CreateProps) => {
  const response = await axiosInstance.post('/attach', data);
  await createNotification({ taskId: data.taskId, type: ENotificationType.ATTACH });
  return response.data;
};

export const deleteAttachById = async ({ id, type }: DeleteProps): Promise<{ taskId: string }> => {
  if (type === EAttachType.FILE) {
    const attach = await getAttachById(id);
    await deleteImage(attach.value);
  }
  const response = await axiosInstance.delete(`/attach/${id}`);
  return response.data;
};

export const deleteTaskAttachments = async (taskId: string) => {
  const attachs = await getAttachments(taskId);
  attachs.every(async ({ _id, type }) => {
    await deleteAttachById({ id: _id, type });
  });
};
