import styles from './badge.module.scss';
import { ELevelEmployee } from '@/typings';

interface Props {
  label: ELevelEmployee;
}

export const BadgeLevel = ({ label }: Props) => <div className={styles.badge}>{label}</div>;
