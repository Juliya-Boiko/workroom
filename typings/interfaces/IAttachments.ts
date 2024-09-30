import { EAttachType } from '../enums';

export interface ICreateLink {
  title: string;
  value: string;
  type: EAttachType;
}

export interface ICreateFile {
  title: string;
  value: File;
  type: EAttachType;
}

export interface IUploadFile extends ICreateFile {
  preview: string;
}

export interface IAttachments {
  links: ICreateLink[];
  files: ICreateFile[];
}
