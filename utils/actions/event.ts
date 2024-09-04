import { axiosInstance } from '@/libs/axios';
import { IEvent } from '@/typings';
import { AddEventFormData } from '@/utils';

export const createEvent = async (data: AddEventFormData) => {
  const response = await axiosInstance.post('/event', data);
  console.log(response);
};

export const getEvents = async (take?: number): Promise<IEvent[]> => {
  const response = await axiosInstance.get(`/event?take=${take}`);
  return response.data;
};
