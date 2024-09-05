/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';
import styles from './projectsPage.module.scss';
import imgSrc from '../../../public/placeholder-1.png';
import Image from 'next/image';
import { useState } from 'react';
import { useProjects, useTasks } from '@/utils';
import { Topping } from '@/components/topping/Topping';
import { Modal, BtnPrimary, Preloader } from '@/components/ui';
import { AddProjectForm } from '@/components/forms/addProject/AddProjectForm';
import { EIconsSet, EView } from '@/typings';
import { SvgHandler } from '@/components/SvgHandler';
import { ChooseProject } from '@/components/sections/chooseProject/ChooseProject';
import { Tasks } from '@/components/sections/tasks/Tasks';

interface SelectedProject {
  _id: string;
  name: string;
}

export const ProjectsPage = () => {
  const [active, setActive] = useState<SelectedProject>();
  const [view, setView] = useState(EView.LIST);

  const { data: projects, isLoading: isLoadingProjects } = useProjects();
  const { data: tasks, isLoading: isLoadingTasks } = useTasks({
    projectId: active?._id,
    enabled: !!active,
  });

  const handleChoose = (value: SelectedProject) => {
    setActive(value);
  };

  return (
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
      {isLoadingProjects && (
        <div className={styles.loader}>
          <Preloader />
        </div>
      )}
      <div className={styles.container}>
        {projects && !projects.length && (
          <div className={styles.placeholder}>
            <p>You dont have projects yet</p>
            <Image src={imgSrc} alt="Projects" className={styles.image} />
          </div>
        )}
      </div>
      {/* 
        <ChooseProject active={active} list={projects} onChoose={handleChoose} />
        <Tasks
          view={view}
          loading={isLoadingTasks}
          project={!!active}
          tasks={tasks || []}
          setView={(v: EView) => setView(v)}
        />
      */}
    </div>
  );
};
