import * as yup from 'yup';

export const logTimeSchema = yup.object({
  date: yup.date().default(new Date()).required('Date is required field'),
  start: yup.string().trim().required('Start date is required field'),
  end: yup.string().trim().required('End date is required field'),
});

export type LogTimeFormData = yup.InferType<typeof logTimeSchema>;
