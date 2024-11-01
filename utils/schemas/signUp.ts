import * as yup from 'yup';
import {
  usingGoalsDataTypes,
  userPositionsDataTypes,
  businessDirectionDataTypes,
  companySizeDataTypes,
} from '@/typings';

export const signUpSchema = yup.object().shape({
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
  usingGoal: yup.string().trim().oneOf(usingGoalsDataTypes).default(usingGoalsDataTypes[0]),
  userPosition: yup
    .string()
    .trim()
    .oneOf(userPositionsDataTypes)
    .default(userPositionsDataTypes[0]),
  companyName: yup.string().trim().required('required'),
  direction: yup
    .string()
    .trim()
    .oneOf(businessDirectionDataTypes)
    .default(businessDirectionDataTypes[0]),
  companySize: yup.string().trim().oneOf(companySizeDataTypes).default(companySizeDataTypes[0]),
  members: yup.array().of(yup.string().trim().email()).default([]),
});

export type SignUpFormData = yup.InferType<typeof signUpSchema>;
