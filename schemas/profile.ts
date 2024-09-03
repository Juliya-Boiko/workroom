import * as yup from 'yup';
// import {
//   usingGoalsDataTypes,
//   userPositionsDataTypes,
//   businessDirectionDataTypes,
//   companySizeDataTypes,
// } from '@/enums';

export const profileSchema = yup.object({
  name: yup.string().trim().required('Name is required'),
  location: yup.string().trim().nullable().optional().default(null),
  birthday: yup.date().nullable().optional().default(null),
  email: yup.string().trim().email().required('Email is required field'),
  phone: yup.string().trim().nullable().optional().default(null),
});

export type ProfileFormData = yup.InferType<typeof profileSchema>;
