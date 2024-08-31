'use client';
import styles from './projectsPage.module.scss';
import { useProjects } from '@/services';
import { Topping } from '@/components/topping/Topping';
import { Modal } from '@/components/ui/modal/Modal';
import { AddProjectForm } from '@/components/forms/addProject/AddProjectForm';
import { EIconsSet } from '@/enums';
import { SvgHandler } from '@/components/SvgHandler';
import { BtnPrimary } from '@/components/ui/buttons/primary/BtnPrimary';
import { ChooseProject } from '@/components/sections/chooseProject/ChooseProject';
import { Preloader } from '@/components/ui/preloader/Preloader';

export const ProjectsPage = () => {
  const { data, isLoading } = useProjects({});

  console.log({ data, isLoading });

  return (
    <>
      <div className={styles.projectsPage}>
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
        {isLoading ? (
          <div className={styles.loader}>
            <Preloader />
          </div>
        ) : (
          <div className={styles.container}>
            <ChooseProject />
            <div>table</div>
          </div>
        )}
      </div>
    </>
  );
};
