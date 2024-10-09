import * as yup from 'yup';
import { folderThumbs } from '../constants';

export const addFolderSchema = yup.object({
  projectId: yup.string().required(),
  image: yup.string().oneOf(folderThumbs).default(folderThumbs[0]).required(),
});

export type AddFolderFormData = yup.InferType<typeof addFolderSchema>;
