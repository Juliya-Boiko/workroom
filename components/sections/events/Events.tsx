'use client';
import styles from './events.module.scss';
import { useRouter } from 'next/navigation';
import { ROUTES } from '@/constants';
import { SvgHandler } from '@/components/SvgHandler';
import { EIconsSet } from '@/enums';
import { BtnSecondary } from '@/components/ui/buttons/secondary/BtnSecondary';
import { EventsList } from './eventsList/EventsList';

export const EventsSection = () => {
  const router = useRouter();
  const data = [];

  return (
    <section className={styles.events}>
      <div className={styles.head}>
        <h2 className={styles.title}>Events</h2>
        <BtnSecondary onClick={() => router.push(ROUTES.events)}>
          <span>{data?.length ? 'View all' : 'Add event'}</span>
          <SvgHandler icon={EIconsSet.ChevronRight} />
        </BtnSecondary>
      </div>
      <EventsList />
    </section>
  );
};
