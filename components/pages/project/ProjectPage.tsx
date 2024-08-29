import { Topping } from '@/components/topping/Topping';
import { Modal } from '@/components/ui/modal/Modal';
import { AddTaskForm } from '@/components/forms/addTask/AddTaskForm';
export const ProjectPage = () => {
  return (
    <div>
      <Topping title="Project">
        <Modal title="Add task">
          <AddTaskForm />
        </Modal>
      </Topping>
    </div>
  );
};
