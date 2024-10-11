import { axiosInstance } from '@/libs/axios';
import { generateNotificationText } from '@/utils';
import { ENotificationType, INotification } from '@/typings';

interface Props {
  taskId: string;
  type: ENotificationType;
}

export const createNotification = async ({ taskId, type }: Props) => {
  const text = await generateNotificationText({ taskId, type });
  await axiosInstance.post('/notification', {
    taskId,
    type,
    text,
  });
};

export const getNotifications = async (take?: number): Promise<INotification[]> => {
  const response = await axiosInstance.get(`/notification?take=${take}`);
  return response.data;
};

export const deleteUserNotifications = async (userId: string) => {
  await axiosInstance.delete(`/notification`, {
    params: {
      userId,
    },
  });
};
