import Link from 'next/link';
import Image from 'next/image';
import styles from './signIn.module.scss';
import imgSrc from '../../../public/auth.png';
import { ROUTES } from '@/utils';
import { Logo } from '@/components/ui/logo/Logo';
import { SignInForm } from '@/components/forms/signIn/SignInForm';

export const SignInSection = () => (
  <section className={styles.section}>
    <div className={styles.container}>
      <Logo />
      <h1 className={styles.heading}>
        Your place to work <br /> Plan. Create. Control.
      </h1>
      <Image src={imgSrc} priority alt="Workroom" className={styles.image} />
    </div>
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Sign In to Woorkroom</h1>
      <SignInForm />
      <Link href={ROUTES.signUp} className={styles.link}>
        Don’t have an account?
      </Link>
    </div>
  </section>
);
