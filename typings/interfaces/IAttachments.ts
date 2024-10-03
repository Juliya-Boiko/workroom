import { EAttachType } from '../enums';

export interface ICreateAttach {
  _id?: string;
  title: string;
  value: string | File;
  type: EAttachType;
}

export interface IAttachment {
  title: string;
  value: string;
  type: EAttachType;
  _id: string;
  createdAt: string;
}
