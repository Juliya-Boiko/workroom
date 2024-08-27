export enum EUserPosition {
  OWNER = 'Busines owner',
  EMPLOYEE = 'Company emplyee',
  CLIENT = 'Company client',
  OTHER = 'Other',
}

export const userPositionsDataTypes = Object.values(EUserPosition);
