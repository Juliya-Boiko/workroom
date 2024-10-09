import * as yup from 'yup';

export const shareFolderSchema = yup.object({
  users: yup
    .array()
    .of(yup.string().required())
    .required()
    .min(1, 'At least one user must be selected'),
});

export type ShareFolderFormData = yup.InferType<typeof shareFolderSchema>;
