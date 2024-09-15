import * as yup from 'yup';

export const emailSchema = yup.object({
  email: yup.string().trim().email().required('Email is required field'),
});

export type EmailFormData = yup.InferType<typeof emailSchema>;

export const passwordSchema = yup.object({
  password: yup
    .string()
    .trim()
    .matches(/^(?=.*[A-Z])[A-Za-z\d]{5,10}$/, {
      excludeEmptyString: true,
      message: 'Min 5, max 10, contain 1 capital letter, without spaces',
    })
    .required('Password is required field'),
  confirmPassword: yup
    .string()
    .trim()
    .oneOf([yup.ref('password')], 'Passwords must match')
    .required('Confirm password is required field'),
});

export type PasswordFormData = yup.InferType<typeof passwordSchema>;
