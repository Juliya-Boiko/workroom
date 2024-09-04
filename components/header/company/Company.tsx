'use client';
import styles from './company.module.scss';
import { useCompany } from '@/utils';

export const Company = () => {
  const { data } = useCompany();

  return <div className={styles.company}>{data && <h4>{data}</h4>}</div>;
};
