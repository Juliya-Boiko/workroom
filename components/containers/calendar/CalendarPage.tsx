'use client';
import styles from './calendarPage.module.scss';
import { useTranslations } from 'next-intl';
import { Topping } from '@/components/topping/Topping';
import { Modal, BtnPrimary } from '@/components/ui';
import { EIconsSet } from '@/typings';
import { SvgHandler } from '@/components/SvgHandler';
import { AddEventForm } from '@/components/forms/addEvent/AddEventForm';
import { CalendarSection } from '@/components/sections/calendar/CalendarSection';

export const CalendarPage = () => {
  const t = useTranslations('Events');

  return (
    <div className={styles.calendarPage}>
      <Topping title="calendar">
        <Modal
          title="Add Event"
          activator={
            <BtnPrimary>
              <SvgHandler icon={EIconsSet.Plus} />
              <span>{t('add')}</span>
            </BtnPrimary>
          }
          content={<AddEventForm />}
        />
      </Topping>
      <CalendarSection />
    </div>
  );
};
