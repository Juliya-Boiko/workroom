'use client';
import styles from './eventsGrid.module.scss';
import Image from 'next/image';
import imgSrc from '../../../../public/placeholder-1.png';
import { useEvents } from '@/services';
import { Preloader } from '@/components/ui';
import { EventCard } from '@/components/cards/event/EventsCard';

export const EventsGrid = () => {
  const { data: events, isLoading } = useEvents(8);

  return (
    <section className={styles.eventsGrid}>
      {isLoading && (
        <div className={styles.looader}>
          <Preloader />
        </div>
      )}
      {events && !events.length && (
        <div className={styles.placeholder}>
          <p>You dont have events yet</p>
          <Image src={imgSrc} priority alt="Employees" className={styles.image} />
        </div>
      )}
      {events && events.length ? (
        <ul className={styles.list}>
          {events.map((el) => (
            <li key={el._id} className={styles.item}>
              <EventCard event={el} expanded />
            </li>
          ))}
        </ul>
      ) : null}
    </section>
  );
};
