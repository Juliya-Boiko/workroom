import * as yup from 'yup';

export const addCommentSchema = yup.object({
  text: yup.string().trim().required('required'),
});

export type AddCommentFormData = yup.InferType<typeof addCommentSchema>;
