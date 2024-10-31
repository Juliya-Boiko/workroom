'use client';
import Link from 'next/link';
import styles from './signIn.module.scss';
import { useTranslations } from 'next-intl';
import { ROUTES } from '@/utils';
import { SignInForm } from '@/components/forms/signIn/SignInForm';
import { AuthWrapper } from '@/components/sections/auth/AuthWrapper';

export const SignInSection = () => {
  const t = useTranslations('Auth.SignIn');

  return (
    <AuthWrapper>
      <h1 className={styles.title}>{t('title')}</h1>
      <SignInForm />
      <Link href={ROUTES.signUp} className={styles.link}>
        {t('account')}
      </Link>
    </AuthWrapper>
  );
};
