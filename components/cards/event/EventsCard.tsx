import styles from './eventCard.module.scss';
import { eventsType, getEventDateTime } from '@/utils';
import { IEvent } from '@/typings';
import { BadgePriopity, BadgeTimer } from '@/components/ui';
import { SvgHandler } from '@/components/SvgHandler';
import { LoaderSkeleton } from '@/components/LoaderSkeleton';

interface Props {
  loading?: boolean;
  event: IEvent;
}

export const EventCard = ({ loading, event }: Props) => {
  const category = eventsType(event.category);

  return (
    <li className={styles.eventCard}>
      <div
        className={styles.line}
        style={{ backgroundColor: loading ? '#E6EDF5' : category.color }}
      />
      {loading ? (
        <LoaderSkeleton height={32} />
      ) : (
        <div className={styles.wrapper}>
          <p className={styles.title}>
            <SvgHandler icon={category.icon} />
            <span className={styles.name}>{event.name}</span>
          </p>
          <BadgePriopity label={event.priority} />
        </div>
      )}
      {loading ? (
        <LoaderSkeleton height={44} />
      ) : (
        <div className={styles.wrapper}>
          <div className={styles.date}>
            <span>{getEventDateTime(event.date)}</span> <span>|</span> <span>{event.time}</span>
          </div>
          <BadgeTimer time={event.time} date={event.date} />
        </div>
      )}
    </li>
  );
};