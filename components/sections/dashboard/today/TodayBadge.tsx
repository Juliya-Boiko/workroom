'use client';
import styles from './todayBadge.module.scss';
import { useEffect, useState } from 'react';
import { formatDayDate, LOCALE_LANGUAGE } from '@/utils';
import { SvgHandler } from '@/components/SvgHandler';
import { EIconsSet } from '@/typings';

export const TodayBadge = () => {
  const [locale, setLocale] = useState<string | null>(null);
  const today = new Date().toString();

  useEffect(() => {
    const storedLocale = localStorage.getItem(LOCALE_LANGUAGE);
    setLocale(storedLocale);
  }, []);

  return (
    <div className={styles.todayBadge}>
      <SvgHandler icon={EIconsSet.CalendarInput} />
      <span>{formatDayDate(today, locale)}</span>
    </div>
  );
};
