'use client';
import styles from './events.module.scss';
import { useRouter } from 'next/navigation';
import { ROUTES } from '@/constants';
import { SvgHandler } from '@/components/SvgHandler';
import { EIconsSet } from '@/enums';
import { BtnSecondary } from '@/components/ui/buttons/secondary/BtnSecondary';
import { EventsList } from './eventsList/EventsList';
import { useEvents } from '@/services';

export const EventsSection = () => {
  const { data: events, isLoading } = useEvents({});
  const router = useRouter();

  console.log({ events, isLoading });

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
