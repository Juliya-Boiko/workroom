import * as yup from 'yup';
import { priorityDataTypes, attachmentsDataTypes } from '@/typings';

export const editTaskSchema = yup.object({
  name: yup.string().trim().required('Name is required field'),
  start: yup.date().default(new Date()).required('Start date is required field'),
  deadline: yup.date().default(new Date()).required('Deadline is required field'),
  priority: yup.string().trim().oneOf(priorityDataTypes).default(priorityDataTypes[0]),
  assignee: yup
    .object({
      _id: yup.string().required('Assignee ID is required').default(''),
      name: yup.string().required('Assignee name is required').default(''),
      avatar: yup.string().nullable(),
    })
    .nullable()
    .optional(),
  description: yup.string().trim(),
  attachments: yup
    .array(
      yup.object({
        _id: yup.string().optional(),
        type: yup.string().trim().oneOf(attachmentsDataTypes).required(),
        title: yup.string().trim().default(''),
        value: yup.mixed<File | string>().required(),
      })
    )
    .default([]),
});

export type EditTaskFormData = yup.InferType<typeof editTaskSchema>;
