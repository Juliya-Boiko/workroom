'use client';
import styles from './employeeInfo.module.scss';
import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import { EIconsSet, IEmployee } from '@/typings';
import { Avatar } from '@/components/ui';
import { SvgHandler } from '@/components/SvgHandler';
import { AddLevelForm } from '@/components/forms/addLevel/AddLevelForm';
import { LoaderSkeleton } from '@/components/LoaderSkeleton';
import { formatDayDate, LOCALE_LANGUAGE } from '@/utils';

interface Props {
  company?: string;
  user?: IEmployee;
  loading: boolean;
}

export const EmployeeInfo = ({ user, loading, company }: Props) => {
  const [locale, setLocale] = useState<string | null>(null);
  const t = useTranslations();

  useEffect(() => {
    const storedLocale = localStorage.getItem(LOCALE_LANGUAGE);
    setLocale(storedLocale);
  }, []);

  return (
    <section className={styles.employeeInfo}>
      <div className={styles.user}>
        <Avatar
          loading={loading}
          bordered
          size="xl"
          user={{ name: user?.name || '', avatar: user?.avatar || null }}
        />
        <p className={styles.name}>{user?.name}</p>
        <AddLevelForm id={user?._id} level={user?.level} loading={loading} />
      </div>
      <div className={styles.main}>
        <p className={styles.subtitle}>{t('Common.mainInfo')}</p>
        <div className={styles.wrapper}>
          <p className={styles.label}>{t('Common.position')}</p>
          {loading ? (
            <LoaderSkeleton height={48} />
          ) : (
            <div className={styles.containter}>{user?.profession}</div>
          )}
        </div>
        <div className={styles.wrapper}>
          <p className={styles.label}>{t('Common.company')}</p>
          {loading ? (
            <LoaderSkeleton height={48} />
          ) : (
            <div className={styles.containter}>{company}</div>
          )}
        </div>
        <div className={styles.wrapper}>
          <p className={styles.label}>{t('Common.location')}</p>
          {loading ? (
            <LoaderSkeleton height={48} />
          ) : (
            <div className={styles.containter}>
              <span>{user?.location}</span>
              <SvgHandler icon={EIconsSet.Location} />
            </div>
          )}
        </div>
        <div className={styles.wrapper}>
          <p className={styles.label}>{t('Common.birthday')}</p>
          {loading ? (
            <LoaderSkeleton height={48} />
          ) : (
            <div className={styles.containter}>
              <span>{user?.birthday ? formatDayDate(user?.birthday.toString(), locale) : ''}</span>
              <SvgHandler icon={EIconsSet.CalendarInput} />
            </div>
          )}
        </div>
      </div>
      <div className={styles.contact}>
        <p className={styles.subtitle}>{t('Common.contactInfo')}</p>
        <div className={styles.wrapper}>
          <p className={styles.label}>{t('Forms.email')}</p>
          {loading ? (
            <LoaderSkeleton height={48} />
          ) : (
            <div className={styles.containter}>{user?.email}</div>
          )}
        </div>
        <div className={styles.wrapper}>
          <p className={styles.label}>{t('Forms.number')}</p>
          {loading ? (
            <LoaderSkeleton height={48} />
          ) : (
            <div className={styles.containter}>{user?.phone}</div>
          )}
        </div>
      </div>
    </section>
  );
};
