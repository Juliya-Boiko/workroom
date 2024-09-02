import { ELevelEmployee, EUserPosition } from '@/enums';

export interface IEmployee {
  name: string;
  avatar: string | null;
  birthday: string | null;
  email: string;
  level: ELevelEmployee | null;
  location: string | null;
  position: EUserPosition;
  _id: string;
}
