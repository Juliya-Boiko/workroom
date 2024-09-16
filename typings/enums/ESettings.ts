import { EIconsSet } from './EIconsSet';

export enum ESettings {
  ACCOUNT = 'Account',
  NOTIFICATIONS = 'Notifications',
  COMPANY = 'My Company',
  APPS = 'Connected Apps',
  PAYMENTS = 'Payments',
  CONFIDENTIALITY = 'Confidentiality',
  SAFETY = 'Safety',
}

export interface ISetting {
  icon: EIconsSet;
  title: ESettings;
}

export const settings: ISetting[] = [
  {
    icon: EIconsSet.User,
    title: ESettings.ACCOUNT,
  },
  {
    icon: EIconsSet.Bell,
    title: ESettings.NOTIFICATIONS,
  },
  {
    icon: EIconsSet.Buildings,
    title: ESettings.COMPANY,
  },
  {
    icon: EIconsSet.CirclesTriangle,
    title: ESettings.APPS,
  },
  {
    icon: EIconsSet.Payments,
    title: ESettings.PAYMENTS,
  },
  {
    icon: EIconsSet.Lock,
    title: ESettings.CONFIDENTIALITY,
  },
  {
    icon: EIconsSet.Safety,
    title: ESettings.SAFETY,
  },
];
