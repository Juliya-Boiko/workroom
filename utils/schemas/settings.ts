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
