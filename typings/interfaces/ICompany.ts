import { EBusinessDirection, ECompanySize } from '../enums';

export interface ICompany {
  name: string;
  direction: EBusinessDirection;
  size: ECompanySize;
}
