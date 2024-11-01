import * as yup from 'yup';
import { priorityDataTypes } from '@/typings';
import { projectThumbsDataTypes } from '../constants/projectThumbs';
import { StaticImageData } from 'next/image';

export const addProjectSchema = yup.object({
  name: yup.string().trim().required('required'),
  start: yup.date().nullable().required('required'),
  deadline: yup.date().nullable().required('required'),
  priority: yup.string().trim().oneOf(priorityDataTypes).default(priorityDataTypes[0]),
  description: yup.string().trim(),
  image: yup.mixed<[string, StaticImageData | File] | string>().default(projectThumbsDataTypes[0]),
});

export type AddProjectFormData = yup.InferType<typeof addProjectSchema>;
