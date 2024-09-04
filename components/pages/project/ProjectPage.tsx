import { Topping } from '@/components/topping/Topping';
import { Modal, BtnPrimary } from '@/components/ui';
import { AddTaskForm } from '@/components/forms/addTask/AddTaskForm';
import { EIconsSet, IDynamicComponent } from '@/typings';
import { SvgHandler } from '@/components/SvgHandler';

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
