import { priorityDataTypes, taskStatusDataTypes } from '@/typings';
import * as yup from 'yup';

export const filterTaskSchema = yup.object({
  start: yup.date().nullable(),
  end: yup.date().nullable(),
  priority: yup.string().trim().oneOf(priorityDataTypes).nullable(),
  status: yup.string().trim().oneOf(taskStatusDataTypes).nullable(),
  assignee: yup.array(
    yup
      .object({
        _id: yup.string().required(),
        name: yup.string().required(),
        avatar: yup.string().nullable().default(null),
      })
      .default([])
  ),
});

export type FilterTaskFormData = yup.InferType<typeof filterTaskSchema>;
