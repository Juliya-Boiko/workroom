import { ELevelEmployee, TaskCountsType } from '../enums';
import { IUserInfo } from './IUserInfo';

export interface IEmployee extends IUserInfo {
  birthday: Date | null;
  email: string;
  level: ELevelEmployee | null;
  location: string | null;
  _id: string;
  phone?: string | null;
  profession: string | null;
  tasks?: TaskCountsType;
}

export interface IUpdateEmployee {
  _id: string;
  level: ELevelEmployee;
}
