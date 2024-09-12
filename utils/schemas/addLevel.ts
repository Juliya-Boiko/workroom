import * as yup from 'yup';
import { levelEmployeeDataTypes } from '@/typings';

export const addLevelSchema = yup.object({
  level: yup.string().trim().oneOf(levelEmployeeDataTypes).default(levelEmployeeDataTypes[0]),
});

export type AddLevelFormData = yup.InferType<typeof addLevelSchema>;
