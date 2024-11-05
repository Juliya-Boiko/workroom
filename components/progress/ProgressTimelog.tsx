'use client';
import styles from './progressTimelog.module.scss';
import { Progress } from '../ui';
import { formatDuration } from '@/utils';
import { useTranslations } from 'next-intl';

interface Props {
  estimate: string;
  value: number | undefined;
  total: number;
}

export const ProgressTimelog = ({ estimate, value, total }: Props) => {
  const logged = formatDuration(value);
  const t = useTranslations('Forms');

  return (
    <div className={styles.progressTimelog}>
      <Progress value={value} total={total} />
      <div className={styles.wrapper}>
        <p>
          {logged} {t('logged')}
        </p>
        <p className={styles.estimate}>{t('originalEstimate')} {estimate}</p>
      </div>
    </div>
  );
};
