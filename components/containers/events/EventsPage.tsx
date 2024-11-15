'use client';
import styles from './eventsPage.module.scss';
import { useTranslations } from 'next-intl';
import { Topping } from '@/components/topping/Topping';
import { Modal, BtnPrimary } from '@/components/ui';
import { EIconsSet } from '@/typings';
import { SvgHandler } from '@/components/SvgHandler';
import { AddEventForm } from '@/components/forms/addEvent/AddEventForm';
import { EventsGrid } from '@/components/sections/events/eventsGrid/EventsGrid';

export const EventsPage = () => {
  const t = useTranslations('Events');

  return (
    <div className={styles.eventsPage}>
      <Topping title="events">
        <Modal
          title={t('add')}
          activator={
            <BtnPrimary>
              <SvgHandler icon={EIconsSet.Plus} />
              <span>{t('add')}</span>
            </BtnPrimary>
          }
          content={<AddEventForm />}
        />
      </Topping>
      <div className={styles.container}>
        <EventsGrid />
      </div>
    </div>
  );
};
