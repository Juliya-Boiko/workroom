import * as yup from 'yup';
import { priorityDataTypes, attachmentsDataTypes } from '@/typings';

export const addTaskSchema = yup.object({
  name: yup.string().trim().required('required'),
  start: yup.date().nullable().required('required'),
  deadline: yup.date().nullable().required('required'),
  priority: yup.string().trim().oneOf(priorityDataTypes).default(priorityDataTypes[0]),
  assignee: yup
    .object({
      _id: yup.string().required(),
      name: yup.string().required(),
      avatar: yup.string().nullable().default(null),
    })
    .nullable()
    .optional(),
  description: yup.string().trim(),
  attachments: yup
    .array(
      yup.object({
        type: yup.string().trim().oneOf(attachmentsDataTypes).required(),
        title: yup.string().trim().default(''),
        value: yup.mixed<File | string>().required(),
      })
    )
    .default([]),
});

export type AddTaskFormData = yup.InferType<typeof addTaskSchema>;
