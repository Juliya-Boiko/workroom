import * as yup from 'yup';

export const profileSchema = yup.object({
  avatar: yup.mixed(),
  name: yup.string().trim().required('Name is required'),
  location: yup.string().trim().nullable().optional().default(null),
  birthday: yup.date().nullable().optional().default(null),
  email: yup.string().trim().email().required('Email is required field'),
  phone: yup.string().trim().nullable().optional().default(null),
  company: yup.string().trim(),
});

export type ProfileFormData = yup.InferType<typeof profileSchema>;
