'use client';
import styles from './userInfo.module.scss';
import { useProfile, useCompany } from '@/services';
import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import { Avatar } from '@/components/ui';
import { LoaderSkeleton } from '@/components/LoaderSkeleton';
import { formatDayDate, LOCALE_LANGUAGE } from '@/utils';

export const UserInfo = () => {
  const [locale, setLocale] = useState<string | null>(null);
  const { data: user, isLoading } = useProfile();
  const { data: company } = useCompany();
  const t = useTranslations('Common');

  useEffect(() => {
    const storedLocale = localStorage.getItem(LOCALE_LANGUAGE);
    setLocale(storedLocale);
  }, []);

  return (
    <section className={styles.userInfo}>
      <div className={styles.head}>
        <Avatar
          loading={isLoading}
          bordered
          size="xl"
          user={{ name: user?.name || '', avatar: user?.avatar || null }}
        />
        <div className={styles.name}>{isLoading ? <LoaderSkeleton height={18} /> : user?.name}</div>
        <div className={styles.position}>
          {isLoading ? <LoaderSkeleton height={18} /> : user?.position}
        </div>
      </div>
      <div className={styles.container}>
        <p className={styles.title}>{t('mainInfo')}</p>
        <div className={styles.wrapper}>
          <p className={styles.label}>{t('company')}</p>
          {isLoading ? (
            <LoaderSkeleton height={48} />
          ) : (
            <div className={styles.block}>{company?.name}</div>
          )}
        </div>
        <div className={styles.wrapper}>
          <p className={styles.label}>{t('location')}</p>
          {isLoading ? (
            <LoaderSkeleton height={48} />
          ) : (
            <div className={styles.block}>{user?.location}</div>
          )}
        </div>
        <div className={styles.wrapper}>
          <p className={styles.label}>{t('birthday')}</p>
          {isLoading ? (
            <LoaderSkeleton height={48} />
          ) : (
            <div className={styles.block}>
              {user?.birthday ? formatDayDate(user?.birthday, locale) : ''}
            </div>
          )}
        </div>

        <p className={styles.title}>{t('contactInfo')}</p>
        <div className={styles.wrapper}>
          <p className={styles.label}>{t('email')}</p>
          {isLoading ? (
            <LoaderSkeleton height={48} />
          ) : (
            <div className={styles.block}>{user?.email}</div>
          )}
        </div>
        <div className={styles.wrapper}>
          <p className={styles.label}>{t('number')}</p>
          {isLoading ? (
            <LoaderSkeleton height={48} />
          ) : (
            <div className={styles.block}>{user?.phone}</div>
          )}
        </div>
      </div>
    </section>
  );
};
