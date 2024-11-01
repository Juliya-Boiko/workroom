'use client';
import styles from './localization.module.scss';
import { LOCALE_LANGUAGE } from '@/utils';
import { useEffect, useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { EIconsSet, languagesSet } from '@/typings';
import { SvgHandler } from '@/components/SvgHandler';

export const Localization = () => {
  const [locale, setLocale] = useState<null | { label: string; value: string; icon: EIconsSet }>(
    null
  );
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const selectLanguage = useCallback(
    (v: string) => {
      const lang = languagesSet.find((el) => el.value === v) || languagesSet[0];
      setLocale(lang);
      localStorage.setItem(LOCALE_LANGUAGE, lang.value);
      document.cookie = `${LOCALE_LANGUAGE}=${v}; path=/;`;
      router.refresh();
    },
    [router]
  );

  useEffect(() => {
    const storageLang = localStorage.getItem(LOCALE_LANGUAGE);
    if (storageLang) {
      selectLanguage(storageLang);
    }
    if (!storageLang) {
      const match = document.cookie.match(/(?:^|; )locale=([^;]*)/);
      const browserLocale = match ? decodeURIComponent(match[1]) : 'en';
      selectLanguage(browserLocale);
    }
  }, [selectLanguage]);

  return (
    <div className={styles.localization}>
      {locale && (
        <button type="button" className={styles.btnToggle} onClick={() => setIsOpen((v) => !v)}>
          {isOpen ? (
            <ul className={styles.list}>
              {languagesSet.map(({ label, value, icon }) => (
                <li key={value} className={styles.item} onClick={() => selectLanguage(value)}>
                  <SvgHandler icon={icon} />
                  <span>{label}</span>
                </li>
              ))}
            </ul>
          ) : (
            <>
              <SvgHandler icon={locale.icon} />
              <span>{locale.label}</span>
            </>
          )}
        </button>
      )}
    </div>
  );
};
