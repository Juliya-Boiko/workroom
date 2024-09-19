'use client';
import styles from './projectsPage.module.scss';
import imgSrc from '../../../public/placeholder-1.png';
import Image from 'next/image';
import { useState } from 'react';
import { useProjects } from '@/services';
import { Topping } from '@/components/topping/Topping';
import { projectsViewDataTypes, EIconsSet, IFilters } from '@/typings';
import { Modal, BtnPrimary, Preloader, BtnIcon, Pagination } from '@/components/ui';
import { AddProjectForm } from '@/components/forms/addProject/AddProjectForm';
import { SvgHandler } from '@/components/SvgHandler';
import { ProjectsGrid } from '@/components/sections/projects/projectsGrid/ProjectsGrid';
import { PROJECTS_STEP } from '@/utils';
import { ProjectsFilter } from '@/components/sections/projects/projectsFilter/ProjectsFilter';

export const ProjectsPage = () => {
  const [filters, setFilters] = useState<null | IFilters>(null);
  const [view, setView] = useState(projectsViewDataTypes[0].value);
  const [page, setPage] = useState(0);
  const { data, isLoading: isLoadingProjects } = useProjects(filters, PROJECTS_STEP, page);

  return (
    <div className={styles.projectsPage}>
      <Topping title="Projects">
        <div className={styles.filters}>
          {projectsViewDataTypes.map(({ value, icon }) => (
            <BtnIcon
              key={value}
              title={value}
              icon={icon}
              active={value === view}
              onClick={() => setView(value)}
            />
          ))}
          <ProjectsFilter filters={filters} setFilters={(v) => setFilters(v)} />
        </div>
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
        {data && !data.projects.length && (
          <div className={styles.placeholder}>
            <p>You dont have projects yet</p>
            <Image src={imgSrc} priority alt="Projects" className={styles.image} />
          </div>
        )}
        {data && data.projects.length > 0 && (
          <>
            <ProjectsGrid
              filters={filters}
              setFilters={(v) => setFilters(v)}
              view={view}
              projects={data.projects}
              onClick={(v) => setView(v)}
            />
            {data.projects.length < data.total && (
              <Pagination
                page={page}
                step={PROJECTS_STEP}
                total={data.total}
                onNext={() => setPage((v) => v + 1)}
                onPrev={() => setPage((v) => v - 1)}
              />
            )}
          </>
        )}
      </div>
    </div>
  );
};
