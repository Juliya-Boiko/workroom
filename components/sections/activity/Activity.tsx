'use client';
import styles from './activity.module.scss';
import { ActivityList } from './activityList/ActivityList';

export const ActivitySection = () => {
  return (
    <section className={styles.events}>
      <div className={styles.head}>
        <h2 className={styles.title}>Activity stream</h2>
      </div>
      <ActivityList />
    </section>
  );
};
