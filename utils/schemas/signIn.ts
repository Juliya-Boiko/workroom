import * as yup from 'yup';

export const signInSchema = yup.object({
  email: yup.string().trim().email().required('Email is required field'),
  password: yup.string().trim().required('Password is required field'),
});

export type SignInFormData = yup.InferType<typeof signInSchema>;
