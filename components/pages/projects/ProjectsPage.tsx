import { Topping } from '@/components/topping/Topping';
import { Modal } from '@/components/ui/modal/Modal';
import { AddProjectForm } from '@/components/forms/addProject/AddProjectForm';

export const ProjectsPage = () => {
  return (
    <div>
      <Topping title="Projects">
        <Modal title="Add Project">
          <AddProjectForm />
        </Modal>
      </Topping>
    </div>
  );
};
