import * as yup from 'yup';
import { EUserPosition, invitePositionDataTypes } from '@/typings';

export const inviteSchema = yup.object().shape({
  email: yup.string().trim().email('invalidEmail').required('required'),
  password: yup
    .string()
    .trim()
    .matches(/^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{5,10}$/, {
      excludeEmptyString: true,
      message: 'passwordRegexp',
    })
    .required('required'),
  confirmPassword: yup
    .string()
    .trim()
    .oneOf([yup.ref('password')], 'matchPasswords')
    .required('required'),
  name: yup.string().trim().required('required'),
  userPosition: yup
    .string()
    .trim()
    .oneOf(invitePositionDataTypes)
    .default(invitePositionDataTypes[0]),
  profession: yup.string().when('userPosition', {
    is: EUserPosition.EMPLOYEE,
    then: (schema) => schema.required('required'),
    otherwise: (schema) => schema.trim().nullable(),
  }),
});

export type InviteFormData = yup.InferType<typeof inviteSchema>;
