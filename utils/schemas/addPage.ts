import * as yup from 'yup';

export const addPageSchema = yup.object({
  title: yup.string().required(),
  content: yup.string().required(),
});

export type AddPageFormData = yup.InferType<typeof addPageSchema>;
