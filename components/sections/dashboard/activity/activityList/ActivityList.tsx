import { NotificationCard } from '@/components/cards/notificationCard/NotificationCard';
import styles from './activityList.module.scss';
import { Placeholder } from '@/components/ui';
import { INotification } from '@/typings';

export const ActivityList = ({ notifications }: { notifications: INotification[] }) => {
  return (
    <>
      {notifications.length ? (<ul className={styles.activityList}>
        {notifications.map((el) => (<li key={el._id}><NotificationCard /></li>))}
      </ul>) : <Placeholder title="You dont have any activity yet" />}
    </>
  );
};
