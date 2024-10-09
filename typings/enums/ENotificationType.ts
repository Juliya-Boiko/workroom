import { EIconsSet } from './EIconsSet';

export enum ENotificationType {
  ATTACH = 'Attach',
  STATUS = 'Status',
  COMMENT = 'Comment',
  ASSIGN = 'Assign',
}

export const notificationsDataTypes = Object.values(ENotificationType);

export const notificationsSet = {
  [ENotificationType.STATUS]: {
    icon: EIconsSet.Info,
    color: '#3F8CFF',
  },
  [ENotificationType.ATTACH]: {
    icon: EIconsSet.Upload,
    color: '#6D5DD3',
  },
  [ENotificationType.COMMENT]: {
    icon: EIconsSet.Comment,
    color: '#C418E6',
  },
  [ENotificationType.ASSIGN]: {
    icon: EIconsSet.UserPlus,
    color: '#FFBD21',
  },
};
