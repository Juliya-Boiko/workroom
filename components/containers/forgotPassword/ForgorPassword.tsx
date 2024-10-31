'use client';
import styles from './forgorPassword.module.scss';
import { useTranslations } from 'next-intl';
import { AuthWrapper } from '@/components/sections/auth/AuthWrapper';
import { EmailForm } from '@/components/forms/emailForm/EmailForm';

export const ForgotPassword = () => {
  const t = useTranslations('Auth.ForgotPassword');

  return (
    <AuthWrapper>
      <h1 className={styles.title}>{t('title')}</h1>
      <p className={styles.text}>{t('text')}</p>
      <EmailForm />
    </AuthWrapper>
  );
};
