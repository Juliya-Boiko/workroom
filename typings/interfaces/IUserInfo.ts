import { EUserPosition, ELevelEmployee } from '../enums';

export interface IUserInfo {
  name: string;
  avatar: string | null;
  position: EUserPosition;
}

export interface IAssignee extends IUserInfo {
  _id: string;
}

export interface IProfile extends IUserInfo {
  birthday: Date | null;
  email: string;
  level: ELevelEmployee | null;
  location: string | null;
  _id: string;
  phone?: string | null;
  profession: string | null;
  settings: {
    emailActivity: boolean;
    notifyTask: boolean;
    notifyComment: boolean;
  };
}
