import * as yup from 'yup';
import { businessDirectionDataTypes, companySizeDataTypes } from '@/typings';

export const companySchema = yup.object({
  name: yup.string().trim().required('Name is required'),
  direction: yup
    .string()
    .trim()
    .oneOf(businessDirectionDataTypes)
    .default(businessDirectionDataTypes[0]),
  size: yup.string().trim().oneOf(companySizeDataTypes).default(companySizeDataTypes[0]),
});

export type CompanyFormData = yup.InferType<typeof companySchema>;

export const contactsSchema = yup.object({
  email: yup.string().trim().email().required('Email is required field'),
  phone: yup.string().trim().nullable().optional().default(null),
});

export type ContactsFormData = yup.InferType<typeof contactsSchema>;

export const accountSchema = yup.object({
  avatar: yup.mixed(),
  name: yup.string().trim().required('Name is required'),
  location: yup.string().trim().nullable().optional().default(null),
  birthday: yup.date().nullable().optional().default(null),
});

export type AccountFormData = yup.InferType<typeof accountSchema>;
