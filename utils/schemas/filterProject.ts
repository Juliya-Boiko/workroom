import { priorityDataTypes } from '@/typings';
import * as yup from 'yup';

export const filterProjectSchema = yup.object({
  start: yup.date().nullable().default(null),
  deadline: yup.date().nullable().default(null),
  priority: yup.string().trim().oneOf(priorityDataTypes).nullable().default(null),
});

export type FilterProjectFormData = yup.InferType<typeof filterProjectSchema>;
