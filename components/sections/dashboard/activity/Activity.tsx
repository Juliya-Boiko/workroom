'use client';
import styles from './activity.module.scss';
import { useNotifications } from '@/services';
import { useTranslations } from 'next-intl';
import { ActivityList } from './activityList/ActivityList';
import { NOTIFICATIONS_TAKE_DASHBOARD } from '@/utils';

export const ActivitySection = () => {
  const { data: notifications } = useNotifications(NOTIFICATIONS_TAKE_DASHBOARD);
  const t = useTranslations('Notifications');

  return (
    <section className={styles.events}>
      <div className={styles.head}>
        <h2 className={styles.title}>{t('stream')}</h2>
      </div>
      {notifications && (
        <ActivityList holder="activity" notifications={notifications.slice(0, 3)} />
      )}
    </section>
  );
};
