import Link from 'next/link';
import Image from 'next/image';
import styles from './signIn.module.scss';
import { ROUTES } from '@/constants';
import { SignInForm } from '../forms/SignInForm';
import { Logo } from '../logo/Logo';
import imgSrc from '../../public/sign-in.png';

export const SignInSection = () => (
  <section className={styles.section}>
    <div className={styles.container}>
      <Logo />
      <h1 className={styles.heading}>
        Your place to work <br /> Plan. Create. Control.
      </h1>
      <Image src={imgSrc} alt="Workroom" className={styles.image} />
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
