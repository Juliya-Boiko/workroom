import { Topping } from '@/components/topping/Topping';
import { Modal } from '@/components/ui/modal/Modal';
import { AddTaskForm } from '@/components/forms/addTask/AddTaskForm';
import { IDynamicComponent } from '@/interfaces';
import { EIconsSet } from '@/enums';
import { SvgHandler } from '@/components/SvgHandler';
import { BtnPrimary } from '@/components/ui/buttons/primary/BtnPrimary';

export const ProjectPage = ({ slug }: IDynamicComponent) => {
  return (
    <div>
      <Topping title="Project">
        <Modal
          title="Add task"
          activator={
            <BtnPrimary>
              <SvgHandler icon={EIconsSet.Plus} />
              <span>Add Task</span>
            </BtnPrimary>
          }
          content={<AddTaskForm slug={slug} />}
        />
      </Topping>
    </div>
  );
};
