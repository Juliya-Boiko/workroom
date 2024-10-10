import { axiosInstance } from '@/libs/axios';
import { ENotificationType, INotification } from '@/typings';
import { generateNotificationText } from '@/utils';

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
