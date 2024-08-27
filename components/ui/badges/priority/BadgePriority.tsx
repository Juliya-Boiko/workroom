import { SvgHandler } from '@/components/SvgHandler';
import styles from './badge.module.scss';
import { EPriority, EPrioritySet } from '@/enums';

interface Props {
  label: EPriority;
}

export const BadgePriopity = ({ label }: Props) => {
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
      <span>{label}</span>
    </div>
  );
};
