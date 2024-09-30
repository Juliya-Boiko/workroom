import * as yup from 'yup';
import { EUserPosition, invitePositionDataTypes } from '@/typings';

export const inviteSchema = yup.object().shape({
  email: yup.string().trim().email().required('Email is required field'),
  password: yup
    .string()
    .trim()
    .matches(/^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{5,10}$/, {
      excludeEmptyString: true,
      message: 'Min 5, max 10, contain 1 capital letter & 1 digit, without spaces',
    })
    .required('Password is required field'),
  confirmPassword: yup
    .string()
    .trim()
    .oneOf([yup.ref('password')], 'Passwords must match')
    .required('Confirm password is required field'),
  name: yup.string().trim().required('Name is required'),
  userPosition: yup
    .string()
    .trim()
    .oneOf(invitePositionDataTypes)
    .default(invitePositionDataTypes[0]),
  profession: yup.string().when('userPosition', {
    is: EUserPosition.EMPLOYEE,
    then: (schema) => schema.required('Profession is required for employees'),
    otherwise: (schema) => schema.trim().nullable(),
  }),
});

export type InviteFormData = yup.InferType<typeof inviteSchema>;
