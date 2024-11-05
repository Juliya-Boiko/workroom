'use client';
import styles from './badge.module.scss';
import { useTranslations } from 'next-intl';
import { ETaskStatus } from '@/typings';

interface Props {
  label: ETaskStatus;
}

export const BadgeTask = ({ label }: Props) => {
  const t = useTranslations('Options');

  const getStyles = () => {
    if (label === ETaskStatus.INPROGRESS) {
      return styles.badgeProgress;
    }
    if (label === ETaskStatus.DONE) {
      return styles.badgeDone;
    }
    if (label === ETaskStatus.REVIEW) {
      return styles.badgeReview;
    }
    return styles.badgeDefault;
  };
  return <div className={`${styles.badge} ${getStyles()}`}>{t(label)}</div>;
};
