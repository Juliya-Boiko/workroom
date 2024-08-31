import { Topping } from '@/components/topping/Topping';
import { Modal } from '@/components/ui/modal/Modal';
import { AddProjectForm } from '@/components/forms/addProject/AddProjectForm';
import { EIconsSet } from '@/enums';
import { SvgHandler } from '@/components/SvgHandler';
import { BtnPrimary } from '@/components/ui/buttons/primary/BtnPrimary';

export const ProjectsPage = () => {
  return (
    <div>
      <Topping title="Projects">
        <Modal
          title="Add Project"
          activator={
            <BtnPrimary>
              <SvgHandler icon={EIconsSet.Plus} />
              <span>Add Project</span>
            </BtnPrimary>
          }
          content={<AddProjectForm />}
        />
      </Topping>
    </div>
  );
};
