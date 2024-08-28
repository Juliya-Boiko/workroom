'use client';
import styles from './company.module.scss';
import { usePersonStore } from '@/utils/store';

export const Company = () => {
  const { company } = usePersonStore((s) => s);

  return (
    <div className={styles.company}>
      <h4>{company}</h4>
    </div>
  );
};
