import * as yup from 'yup';

export const signInSchema = yup.object({
  email: yup.string().trim().email().required('Email is required field'),
  password: yup
    .string()
    .trim()
    .matches(/^(?=.*[A-Z])[A-Za-z\d]{5,10}$/, {
      excludeEmptyString: true,
      message: 'Min 5, max 10, contain 1capital letter',
    })
    .required('Password is required field'),
});

export type SignInFormData = yup.InferType<typeof signInSchema>;
