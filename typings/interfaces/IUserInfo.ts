import { EUserPosition } from '../enums';

export interface IUserInfo {
  name: string;
  avatar: string | null;
  position: EUserPosition;
}

export interface IAssignee extends IUserInfo {
  _id: string;
}
