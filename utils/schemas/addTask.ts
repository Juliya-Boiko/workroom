import * as yup from 'yup';
import { priorityDataTypes, attachmentsDataTypes } from '@/typings';

export const addTaskSchema = yup.object({
  name: yup.string().trim().required('Name is required field'),
  start: yup.date().default(new Date()).required('Start date is required field'),
  deadline: yup.date().default(new Date()).required('Deadline is required field'),
  priority: yup.string().trim().oneOf(priorityDataTypes).default(priorityDataTypes[0]),
  assignee: yup
    .object({
      _id: yup.string().required(),
      name: yup.string().required(),
      avatar: yup.string().nullable().default(null),
    })
    .required('Assignee is required'),
  description: yup.string().trim(),
  attachments: yup.object({
    links: yup
      .array(
        yup.object({
          type: yup.string().trim().oneOf(attachmentsDataTypes).default(attachmentsDataTypes[0]),
          title: yup.string().trim().default(''),
          value: yup.string().trim().required(),
        })
      )
      .default([]),
    files: yup
      .array(
        yup.object({
          type: yup.string().trim().oneOf(attachmentsDataTypes).default(attachmentsDataTypes[1]),
          title: yup.string().trim().default(''),
          value: yup.mixed().required(),
        })
      )
      .default([]),
  }),
});

export type AddTaskFormData = yup.InferType<typeof addTaskSchema>;

// images: yup
//   .array(
//     yup.object({
//       createdAt: yup.date(),
//       title: yup.string().trim(),
//       image: yup.mixed(),
//     })
//   )
//   .default([]),
