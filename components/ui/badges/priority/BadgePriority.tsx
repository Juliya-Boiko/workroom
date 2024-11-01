'use client';
import styles from './badge.module.scss';
import { useTranslations } from 'next-intl';
import { SvgHandler } from '@/components/SvgHandler';
import { EPriority, EPrioritySet } from '@/typings';

interface Props {
  label: EPriority;
  crop?: boolean;
}

export const BadgePriopity = ({ label, crop }: Props) => {
  const t = useTranslations('Options');

  const getStyles = () => {
    if (label === EPriority.HIGH) {
      return styles.badgeHigh;
    }
    if (label === EPriority.MEDIUM) {
      return styles.badgeMedium;
    }
    return styles.badgeLow;
  };

  return (
    <div className={`${styles.badge} ${getStyles()}`}>
      <SvgHandler icon={EPrioritySet[label]} />
      {!crop && <span>{t(label)}</span>}
    </div>
  );
};
