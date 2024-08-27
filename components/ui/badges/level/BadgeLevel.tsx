import styles from './badge.module.scss';
import { ELevelEmployee } from '@/enums';

interface Props {
  label: ELevelEmployee;
}

export const BadgeLevel = ({ label }: Props) => {
  return <div className={styles.badge}>{label}</div>;
};
