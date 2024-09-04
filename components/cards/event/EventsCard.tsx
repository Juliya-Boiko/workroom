import { IEvent } from '@/typings';
import styles from './eventCard.module.scss';
import { BadgePriopity } from '@/components/ui';
import { eventsType, getEventDateTime } from '@/helpers';

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
          <p>{event.name}</p>
          <BadgePriopity label={event.priority} />
        </div>
        <div className={styles.wrapper}>
          <div>
            <span>{getEventDateTime(event.date)}</span> <span>|</span> <span>{event.time}</span>
          </div>
          <p>time badge</p>
        </div>
      </div>
    </li>
  );
};
