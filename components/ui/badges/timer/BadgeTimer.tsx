import styles from './badgeTimer.module.scss';
import { SvgHandler } from '@/components/SvgHandler';
import { EIconsSet } from '@/typings';
import { getEventTimer } from '@/utils';

interface Props {
  time: string;
  date: Date;
}

export const BadgeTimer = ({ date, time }: Props) => {
  return (
    <div className={styles.badgeTimer}>
      <SvgHandler icon={EIconsSet.Clock} />
      <span>{getEventTimer(date, time)}</span>
    </div>
  );
};
