import * as yup from 'yup';
import {
  usingGoalsDataTypes,
  userPositionsDataTypes,
  businessDirectionDataTypes,
  companySizeDataTypes,
  priorityDataTypes,
} from '@/enums';

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

export const signUpSchema = yup.object().shape({
  email: yup.string().trim().email().required('Email is required field'),
  password: yup
    .string()
    .trim()
    .matches(/^(?=.*[A-Z])[A-Za-z\d]{5,10}$/, {
      excludeEmptyString: true,
      message: 'Min 5, max 10, contain 1capital letter',
    })
    .required('Password is required field'),
  confirmPassword: yup
    .string()
    .trim()
    .oneOf([yup.ref('password')], 'Passwords must match')
    .required('Confirm password is required field'),
  name: yup.string().trim().required('Name is required'),
  usingGoal: yup.string().trim().oneOf(usingGoalsDataTypes).default(usingGoalsDataTypes[0]),
  userPosition: yup
    .string()
    .trim()
    .oneOf(userPositionsDataTypes)
    .default(userPositionsDataTypes[0]),
  companyName: yup.string().trim().required('Company name is required'),
  direction: yup
    .string()
    .trim()
    .oneOf(businessDirectionDataTypes)
    .default(businessDirectionDataTypes[0]),
  companySize: yup.string().trim().oneOf(companySizeDataTypes).default(companySizeDataTypes[0]),
  members: yup.array().of(yup.string().trim().email()),
});

export type SignUpFormData = yup.InferType<typeof signUpSchema>;

export const addProjectSchema = yup.object({
  name: yup.string().trim().required('Name is required field'),
  start: yup.date().default(new Date()).required(),
  deadline: yup.date().default(new Date()).required(),
  priority: yup.string().trim().oneOf(priorityDataTypes).default(priorityDataTypes[0]),
  description: yup.string().trim(),
});

export type AddProjectFormData = yup.InferType<typeof addProjectSchema>;
