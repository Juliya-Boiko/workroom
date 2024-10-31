import { NotificationCard } from '@/components/cards/notificationCard/NotificationCard';
import styles from './activityList.module.scss';
import { Placeholder } from '@/components/ui';
import { INotification } from '@/typings';

interface Props {
  notifications: INotification[];
  holder: string;
}

export const ActivityList = ({ notifications, holder }: Props) => (
  <>
    {notifications.length ? (
      <ul className={styles.activityList}>
        {notifications.map((el) => (
          <li key={el._id}>
            <NotificationCard item={el} />
          </li>
        ))}
      </ul>
    ) : (
      <Placeholder title={holder} />
    )}
  </>
);
