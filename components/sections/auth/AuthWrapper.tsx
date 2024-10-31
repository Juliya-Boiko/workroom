'use client';
import styles from './authWrapper.module.scss';
import Image from 'next/image';
import imgSrc from '../../../public/auth.png';
import { Logo } from '@/components/ui';
import { useTranslations } from 'next-intl';

interface Props {
  children: string | JSX.Element | JSX.Element[];
}

export const AuthWrapper = ({ children }: Props) => {
  const t = useTranslations('Auth');

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <Logo />
        <h1 className={styles.heading}>
          {t('title1')}
          <br />
          {t('title2')}
        </h1>
        <Image src={imgSrc} priority alt="Workroom" className={styles.image} />
      </div>
      <div className={styles.wrapper}>{children}</div>
    </section>
  );
};
