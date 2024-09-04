import styles from './eventsPage.module.scss';
import { Topping } from '@/components/topping/Topping';
import { Modal, BtnPrimary } from '@/components/ui';
import { EIconsSet } from '@/typings';
import { SvgHandler } from '@/components/SvgHandler';
import { AddEventForm } from '@/components/forms/addEvent/AddEventForm';
import { EventsGrid } from '@/components/sections/events/eventsGrid/EventsGrid';

export const EventsPage = () => {
  return (
    <div className={styles.eventsPage}>
      <Topping title="Nearest Events">
        <Modal
          title="Add Event"
          activator={
            <BtnPrimary>
              <SvgHandler icon={EIconsSet.Plus} />
              <span>Add Event</span>
            </BtnPrimary>
          }
          content={<AddEventForm />}
        />
      </Topping>
      <EventsGrid />
    </div>
  );
};
