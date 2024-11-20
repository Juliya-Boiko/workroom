'use client';
import styles from './events.module.scss';
import { useRouter } from 'next/navigation';
import { ROUTES } from '@/utils';
import { useEvents } from '@/services';
import { useTranslations } from 'next-intl';
import { SvgHandler } from '@/components/SvgHandler';
import { EIconsSet } from '@/typings';
import { BtnSecondary } from '@/components/ui';
import { EventsList } from './eventsList/EventsList';

export const EventsSection = () => {
  const { data: events, isLoading } = useEvents(3);
  const router = useRouter();
  const tCommon = useTranslations('Common');
  const t = useTranslations('Events');

  return (
    <section className={styles.events}>
      <div className={styles.head}>
        <h2 className={styles.title}>{t('title')}</h2>
        <BtnSecondary disabled={isLoading} onClick={() => router.push(ROUTES.events)}>
          <span>{events?.length ? tCommon('viewAll') : t('add')}</span>
          <SvgHandler icon={EIconsSet.ChevronRight} />
        </BtnSecondary>
      </div>
      <EventsList holder="events" loading={isLoading} events={events} />
    </section>
  );
};
