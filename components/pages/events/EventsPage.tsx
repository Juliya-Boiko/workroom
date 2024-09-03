import { Topping } from '@/components/topping/Topping';
import { Modal } from '@/components/ui/modal/Modal';
import { EIconsSet } from '@/enums';
import { SvgHandler } from '@/components/SvgHandler';
import { BtnPrimary } from '@/components/ui/buttons/primary/BtnPrimary';
import { AddEventForm } from '@/components/forms/addEvent/AddEventForm';

export const EventsPage = () => {
  return (
    <div>
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
    </div>
  );
};
