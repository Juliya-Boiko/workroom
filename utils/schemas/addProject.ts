import * as yup from 'yup';
import { priorityDataTypes } from '@/typings';

export const addProjectSchema = yup.object({
  name: yup.string().trim().required('Name is required field'),
  start: yup.date().default(new Date()).required(),
  deadline: yup.date().default(new Date()).required(),
  priority: yup.string().trim().oneOf(priorityDataTypes).default(priorityDataTypes[0]),
  description: yup.string().trim(),
});

export type AddProjectFormData = yup.InferType<typeof addProjectSchema>;
