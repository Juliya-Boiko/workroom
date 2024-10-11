import * as yup from 'yup';
import { folderThumbs } from '../constants';

const pageSchema = yup.object().shape({
  _id: yup.string().required(),
  title: yup.string().required(),
  order: yup.number().required(),
});

export const editFolderSchema = yup.object({
  image: yup.string().oneOf(folderThumbs).default(folderThumbs[0]).required(),
  pages: yup.array().of(pageSchema).default([]),
});

export type EditFolderFormData = yup.InferType<typeof editFolderSchema>;
