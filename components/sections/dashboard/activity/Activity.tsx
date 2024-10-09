'use client';
import styles from './activity.module.scss';
import { useNotifications } from '@/services';
import { ActivityList } from './activityList/ActivityList';
import { NOTIFICATIONS_TAKE_DASHBOARD } from '@/utils';

export const ActivitySection = () => {
  const { data: notifications } = useNotifications(NOTIFICATIONS_TAKE_DASHBOARD);

  return (
    <section className={styles.events}>
      <div className={styles.head}>
        <h2 className={styles.title}>Activity stream</h2>
      </div>
      {notifications && <ActivityList notifications={notifications.slice(0, 3)} />}
    </section>
  );
};
