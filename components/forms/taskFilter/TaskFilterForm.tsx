'use client';
import styles from './taskFilterForm.module.scss';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

export const TaskFilterForm = () => {
  return (
    <form className={styles.taskFilterForm}>
      <div className={styles.container}>
        <p className={styles.label}>Status</p>
      </div>
      <div className={styles.container}>
        <p className={styles.label}>Priority</p>
      </div>
    </form>
  );
};
