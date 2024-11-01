import * as yup from 'yup';

export const signInSchema = yup.object({
  email: yup.string().trim().email('invalidEmail').required('required'),
  password: yup.string().trim().required('required'),
});

export type SignInFormData = yup.InferType<typeof signInSchema>;
