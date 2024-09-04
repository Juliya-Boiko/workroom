import * as yup from 'yup';
import { categoryEventDataTypes, priorityDataTypes } from '@/enums';

export const addEventSchema = yup.object({
  name: yup.string().trim().required('Name is required field'),
  category: yup.string().trim().oneOf(categoryEventDataTypes).default(categoryEventDataTypes[0]),
  priority: yup.string().trim().oneOf(priorityDataTypes).default(priorityDataTypes[0]),
  date: yup.date().default(new Date()).required('Date is required field'),
  time: yup.string().required('Time is required field'),
  description: yup.string().trim(),
});

export type AddEventFormData = yup.InferType<typeof addEventSchema>;
