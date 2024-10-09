import { SvgHandler } from '@/components/SvgHandler';
import styles from './notificationCard.module.scss';
import { Avatar } from '@/components/ui';
import { INotification, notificationsSet } from '@/typings';

export const NotificationCard = ({ item }: { item: INotification }) => {
  const label = notificationsSet[item.type];
  return (
    <div className={styles.notificationCard}>
      <div className={styles.author}>
        <Avatar size="l" user={{ name: item.user.name, avatar: item.user.avatar }} />
        <div className={styles.user}>
          <p className={styles.name}>{item.user.name}</p>
          {item.user.profession && <p className={styles.profession}>{item.user.profession}</p>}
        </div>
      </div>
      <div className={styles.wrapper}>
        <div style={{ color: label.color }}>
          <SvgHandler icon={label.icon} />
        </div>
        <div>{item.text}</div>
      </div>
    </div>
  );
};
