import * as yup from 'yup';
import { priorityDataTypes } from '@/enums';

export const addTaskSchema = yup.object({
  name: yup.string().trim().required('Name is required field'),
  start: yup.date().default(new Date()).required(),
  deadline: yup.date().default(new Date()).required(),
  priority: yup.string().trim().oneOf(priorityDataTypes).default(priorityDataTypes[0]),
  assignee: yup
    .object({
      _id: yup.string().required(),
      name: yup.string().required(),
      avatar: yup.string().nullable().default(null),
    })
    .required('Assignee is required'),
  description: yup.string().trim(),
});

export type AddTaskFormData = yup.InferType<typeof addTaskSchema>;
