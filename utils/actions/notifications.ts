import { axiosInstance } from '@/libs/axios';
import { IUpdateTask, ENotificationType, INotification } from '@/typings';
import { generateNotification } from '../helpers';
import { getTaskById } from './task';

export const createNotification = async (data: IUpdateTask, companyId: string, userId: string) => {
  const task = await getTaskById(data._id);
  const initValue = {
    userId,
    companyId,
    taskId: task._id,
    text: '',
    type: ENotificationType.STATUS,
  };
  if (data.update.status) {
    initValue.text = generateNotification({
      type: ENotificationType.STATUS,
      title: task.name,
      status: task.status,
    });
  }
  await axiosInstance.post('/notification', initValue);
};

export const getNotifications = async (take?: number): Promise<INotification[]> => {
  const response = await axiosInstance.get(`/notification?take=${take}`);
  return response.data;
};
