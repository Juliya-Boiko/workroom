import { axiosInstance } from '@/libs/axios';
import { IEvent } from '@/typings';
import { AddEventFormData } from '@/utils';

export const createEvent = async (data: AddEventFormData) => {
  await axiosInstance.post('/event', data);
};

export const getEvents = async (take?: number): Promise<IEvent[]> => {
  const response = await axiosInstance.get(`/event?take=${take}`);
  return response.data;
};

export const getCalendarEvents = async (): Promise<IEvent[]> => {
  const response = await axiosInstance.get(`/event/calendar`);
  return response.data;
};
