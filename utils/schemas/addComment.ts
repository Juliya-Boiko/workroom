import * as yup from 'yup';

export const addCommentSchema = yup.object({
  text: yup.string().trim().required('Enter comment to save!'),
});

export type AddCommentFormData = yup.InferType<typeof addCommentSchema>;
