import Link from 'next/link';
import styles from './signIn.module.scss';
import { ROUTES } from '@/utils';
import { SignInForm } from '@/components/forms/signIn/SignInForm';
import { AuthWrapper } from '@/components/sections/auth/AuthWrapper';

export const SignInSection = () => (
  <AuthWrapper>
    <h1 className={styles.title}>Sign In to Woorkroom</h1>
    <SignInForm />
    <Link href={ROUTES.signUp} className={styles.link}>
      Don’t have an account?
    </Link>
  </AuthWrapper>
);
