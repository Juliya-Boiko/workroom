'use client';
import styles from './events.module.scss';
import { useRouter } from 'next/navigation';
import { useEvents, ROUTES } from '@/utils';
import { SvgHandler } from '@/components/SvgHandler';
import { EIconsSet } from '@/typings';
import { BtnSecondary } from '@/components/ui';
import { EventsList } from './eventsList/EventsList';

export const EventsSection = () => {
  const { data: events, isLoading } = useEvents(3);
  const router = useRouter();

  return (
    <section className={styles.events}>
      <div className={styles.head}>
        <h2 className={styles.title}>Events</h2>
        <BtnSecondary disabled={isLoading} onClick={() => router.push(ROUTES.events)}>
          <span>{events?.length ? 'View all' : 'Add event'}</span>
          <SvgHandler icon={EIconsSet.ChevronRight} />
        </BtnSecondary>
      </div>
      <EventsList loading={isLoading} events={events} />
    </section>
  );
};
