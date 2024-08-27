import styles from './badge.module.scss';
import { ETaskStatus } from '@/enums';

interface Props {
  label: ETaskStatus;
}

export const BadgeTask = ({ label }: Props) => {
  const getStyles = () => {
    if (label === ETaskStatus.INPROGRESS) {
      return styles.badgeProgress;
    }
    if (label === ETaskStatus.DONE) {
      return styles.badgeDone;
    }
    return styles.badgeDefault;
  };
  return <div className={`${styles.badge} ${getStyles()}`}>{label}</div>;
};
