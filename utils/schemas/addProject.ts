import * as yup from 'yup';
import { priorityDataTypes } from '@/typings';
import { projectThumbsDataTypes } from '../constants/projectThumbs';
import { StaticImageData } from 'next/image';

export const addProjectSchema = yup.object({
  name: yup.string().trim().required('Name is required field'),
  start: yup.date().default(new Date()).required('Start date is required field'),
  deadline: yup.date().default(new Date()).required('Deadline is required field'),
  priority: yup.string().trim().oneOf(priorityDataTypes).default(priorityDataTypes[0]),
  description: yup.string().trim(),
  image: yup.mixed<[string, StaticImageData | File]>().default(projectThumbsDataTypes[0]),
});

export type AddProjectFormData = yup.InferType<typeof addProjectSchema>;
