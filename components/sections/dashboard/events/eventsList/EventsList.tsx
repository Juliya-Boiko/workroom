import styles from './eventsList.module.scss';
import { IEvent } from '@/typings';
import { eventSectionSkeleton } from '@/utils';
import { EventCard } from '@/components/cards/event/EventsCard';
import { Placeholder } from '@/components/ui';

interface Props {
  holder: string;
  loading: boolean;
  events?: IEvent[];
}

export const EventsList = ({ loading, events, holder }: Props) => (
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
    {events && !events.length && <Placeholder title={holder} />}
  </ul>
);
