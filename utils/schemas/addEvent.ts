import * as yup from 'yup';
import { categoryEventDataTypes, priorityDataTypes } from '@/typings';

export const addEventSchema = yup.object({
  name: yup.string().trim().required('required'),
  category: yup.string().trim().oneOf(categoryEventDataTypes).default(categoryEventDataTypes[0]),
  priority: yup.string().trim().oneOf(priorityDataTypes).default(priorityDataTypes[0]),
  date: yup.date().default(new Date()).required('required'),
  time: yup.string().required('required'),
  description: yup.string().trim(),
});

export type AddEventFormData = yup.InferType<typeof addEventSchema>;
