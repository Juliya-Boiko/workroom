import { Topping } from '@/components/topping/Topping';
import { Modal } from '@/components/ui/modal/Modal';
import { AddTaskForm } from '@/components/forms/addTask/AddTaskForm';
import { IDynamicComponent } from '@/interfaces';

export const ProjectPage = ({ slug }: IDynamicComponent) => {
  return (
    <div>
      <Topping title="Project">
        <Modal title="Add task">
          <AddTaskForm slug={slug} />
        </Modal>
      </Topping>
    </div>
  );
};
