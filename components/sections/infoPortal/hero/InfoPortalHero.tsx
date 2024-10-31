'use client';
import styles from './infoPortalHero.module.scss';
import imgSrc from '../../../../public/tasks-placeholder.png';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

export const InfoPortalHero = () => {
  const t = useTranslations('InfoPortal');

  return (
    <section className={styles.infoPortalHero}>
      <div className={styles.container}>
        <h2 className={styles.title}>{t('title')}</h2>
        <p className={styles.text}>{t('description')}</p>
      </div>
      <Image priority src={imgSrc} alt="Info portal" className={styles.image} />
    </section>
  );
};
