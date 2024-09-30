import styles from './todayBadge.module.scss';
import { formatDayDate } from '@/utils';
import { SvgHandler } from '@/components/SvgHandler';
import { EIconsSet } from '@/typings';

export const TodayBadge = () => {
  const today = new Date().toString();

  return (
    <div className={styles.todayBadge}>
      <SvgHandler icon={EIconsSet.CalendarInput} />
      <span>{formatDayDate(today)}</span>
    </div>
  );
};
