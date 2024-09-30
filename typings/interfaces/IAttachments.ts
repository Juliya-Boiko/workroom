import { EAttachType } from '../enums';

export interface ICreateAttach {
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
