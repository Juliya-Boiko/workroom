'use client';
import styles from './projectsSection.module.scss';
import { useRouter } from 'next/navigation';
import { useProjects, ROUTES } from '@/utils';
import { SvgHandler } from '@/components/SvgHandler';
import { EIconsSet } from '@/typings';
import { BtnSecondary } from '@/components/ui';
import { ProjectsList } from './progectsList/ProjectsList';

export const ProjectsSection = () => {
  const router = useRouter();
  const { data: projects, isLoading } = useProjects(4);

  return (
    <section className={styles.section}>
      <div className={styles.head}>
        <h2 className={styles.title}>Projects</h2>
        <BtnSecondary disabled={isLoading} onClick={() => router.push(ROUTES.projects)}>
          <span>{projects?.length ? 'View all' : 'Add project'}</span>
          <SvgHandler icon={EIconsSet.ChevronRight} />
        </BtnSecondary>
      </div>
      <ProjectsList loading={isLoading} projects={projects} />
    </section>
  );
};
