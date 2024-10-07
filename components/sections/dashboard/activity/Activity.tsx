'use client';
import { useNotifications } from '@/services';
import styles from './activity.module.scss';
import { ActivityList } from './activityList/ActivityList';

export const ActivitySection = () => {
  const { data: notifications } = useNotifications();

  return (
    <section className={styles.events}>
      <div className={styles.head}>
        <h2 className={styles.title}>Activity stream</h2>
      </div>
      {notifications && <ActivityList notifications={notifications} />}
    </section>
  );
};
