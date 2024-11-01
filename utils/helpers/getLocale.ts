import { ELanguage } from '@/typings';
import { DATE_LOCALE_ENG, DATE_LOCALE_UK } from '@/utils';

export const getLocale = (v: string | null) => {
  return v === ELanguage.UK ? DATE_LOCALE_UK : DATE_LOCALE_ENG;
};
