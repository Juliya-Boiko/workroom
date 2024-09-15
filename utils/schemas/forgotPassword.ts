import * as yup from 'yup';

export const emailSchema = yup.object({
  email: yup.string().trim().email().required('Email is required field'),
});

export type EmailFormData = yup.InferType<typeof emailSchema>;
