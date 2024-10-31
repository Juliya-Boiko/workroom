'use client';
import Link from 'next/link';
import styles from './topping.module.scss';
import { useTranslations } from 'next-intl';
import { ROUTES } from '@/utils';
import { SvgHandler } from '../SvgHandler';
import { EIconsSet } from '@/typings';

interface Props {
  children?: string | JSX.Element | JSX.Element[];
  title: string;
  link?: string;
  path?: string;
}

export const Topping = ({ title, children, link, path }: Props) => {
  const t = useTranslations('SidebarMenu');

  return (
    <section className={styles.topping}>
      {link && (
        <Link href={path || ROUTES.dashboard} className={styles.link}>
          <SvgHandler icon={EIconsSet.ArrowLeft} />
          <span>{link}</span>
        </Link>
      )}
      <div className={styles.wrapper}>
        <h1 className={styles.title}>{t(title)}</h1>
        {children}
      </div>
    </section>
  );
};
