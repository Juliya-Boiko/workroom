import { EIconsSet } from './EIconsSet';

export enum ELanguage {
  EN = 'en',
  UK = 'uk',
}

export const languageDataTypes = Object.values(ELanguage);

export const languagesSet = [
  {
    label: 'Eng',
    value: ELanguage.EN,
    icon: EIconsSet.FlagEng,
  },
  {
    label: 'Ukr',
    value: ELanguage.UK,
    icon: EIconsSet.FlagUkr,
  },
];
