export enum EUserPosition {
  OWNER = 'owner',
  EMPLOYEE = 'employee',
  CLIENT = 'client',
  OTHER = 'other',
}

export const userPositionsDataTypes = Object.values(EUserPosition);

export const invitePositionDataTypes = userPositionsDataTypes.filter(
  (el) => el !== EUserPosition.OWNER
);
