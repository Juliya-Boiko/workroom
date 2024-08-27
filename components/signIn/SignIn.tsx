import Link from 'next/link';
import styles from './signIn.module.scss';
import { ROUTES } from '@/constants';
import { SignInForm } from '../forms/SignInForm';

export const SignInSection = () => (
  <section className={styles.section}>
    <h1 className={styles.title}>Sign In to Woorkroom</h1>
    <SignInForm />
    <Link href={ROUTES.signUp} className={styles.link}>
      Don’t have an account?
    </Link>
  </section>
);
