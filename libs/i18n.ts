import { getRequestConfig } from 'next-intl/server';
import { cookies } from 'next/headers';
import { ELanguage } from '@/typings';
import { LOCALE_LANGUAGE } from '@/utils';

export default getRequestConfig(async () => {
  const localeCookie = cookies().get(LOCALE_LANGUAGE);
  const locale = localeCookie?.value || ELanguage.EN;

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});
