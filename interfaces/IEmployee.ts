import { ELevelEmployee, EUserPosition } from '@/enums';
import { IUserInfo } from './IUserInfo';

export interface IEmployee extends IUserInfo {
  birthday: string | null;
  email: string;
  level: ELevelEmployee | null;
  location: string | null;
  position: EUserPosition;
  _id: string;
}
