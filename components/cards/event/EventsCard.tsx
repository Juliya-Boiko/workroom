import styles from './eventCard.module.scss';
import { eventsType, getEventDateTime } from '@/utils';
import { IEvent } from '@/typings';
import { BadgePriopity, BadgeTimer } from '@/components/ui';

interface Props {
  event: IEvent;
}

export const EventCard = ({ event }: Props) => {
  const category = eventsType(event.category);

  return (
    <li className={styles.eventCard}>
      <div className={styles.line} style={{ backgroundColor: category.color }} />
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <p className={styles.name}>{event.name}</p>
          <BadgePriopity label={event.priority} />
        </div>
        <div className={styles.wrapper}>
          <div>
            <span>{getEventDateTime(event.date)}</span> <span>|</span> <span>{event.time}</span>
          </div>
          <BadgeTimer />
        </div>
      </div>
    </li>
  );
};
