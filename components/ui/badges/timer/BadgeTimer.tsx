import styles from './badgeTimer.module.scss';
import { SvgHandler } from '@/components/SvgHandler';
import { EIconsSet } from '@/typings';

export const BadgeTimer = () => {
  return (
    <div className={styles.badgeTimer}>
      <SvgHandler icon={EIconsSet.Clock} />
      <span>4h</span>
    </div>
  );
};
