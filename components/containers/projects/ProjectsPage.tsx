'use client';
import styles from './projectsPage.module.scss';
import imgSrc from '../../../public/placeholder-1.png';
import Image from 'next/image';
import { useProjects } from '@/services';
import { Topping } from '@/components/topping/Topping';
import { Modal, BtnPrimary, Preloader } from '@/components/ui';
import { AddProjectForm } from '@/components/forms/addProject/AddProjectForm';
import { EIconsSet } from '@/typings';
import { SvgHandler } from '@/components/SvgHandler';
import { ProjectsGrid } from '@/components/sections/projects/projectsGrid/ProjectsGrid';

export const ProjectsPage = () => {
  const { data: projects, isLoading: isLoadingProjects } = useProjects();

  return (
    <div className={styles.projectsPage}>
      <Topping title="Projects">
        <Modal
          title="Add Project"
          activator={
            <BtnPrimary disabled={isLoadingProjects}>
              <SvgHandler icon={EIconsSet.Plus} />
              <span>Add Project</span>
            </BtnPrimary>
          }
          content={<AddProjectForm />}
        />
      </Topping>
      <div className={styles.container}>
        {isLoadingProjects && (
          <div className={styles.loader}>
            <Preloader />
          </div>
        )}
        {projects && !projects.length && (
          <div className={styles.placeholder}>
            <p>You dont have projects yet</p>
            <Image src={imgSrc} priority alt="Projects" className={styles.image} />
          </div>
        )}
        {projects && projects.length > 0 && <ProjectsGrid projects={projects} />}
      </div>
    </div>
  );
};
