import styles from './eventsList.module.scss';
import imgSrc from '../../../../../public/placeholder-2.png';
import Image from 'next/image';
import { IEvent } from '@/typings';
import { eventSectionSkeleton } from '@/utils';
import { EventCard } from '@/components/cards/event/EventsCard';

interface Props {
  loading: boolean;
  events?: IEvent[];
}

export const EventsList = ({ loading, events }: Props) => {
  return (
    <ul className={styles.eventsList}>
      {loading &&
        eventSectionSkeleton.map((el) => <EventCard loading={loading} key={el._id} event={el} />)}
      {events &&
        events.length > 0 &&
        events.map((el) => (
          <li key={el._id} className={styles.item}>
            <EventCard event={el} />
          </li>
        ))}
      {events && !events.length && (
        <li className={styles.placeholder}>
          <p>You dont have events yet</p>
          <Image src={imgSrc} alt="Employees" priority className={styles.image} />
        </li>
      )}
    </ul>
  );
};
