'use client';
import styles from './projectsSection.module.scss';
import { useRouter } from 'next/navigation';
import { useProjects } from '@/services';
import { ROUTES } from '@/utils';
import { SvgHandler } from '@/components/SvgHandler';
import { EIconsSet } from '@/typings';
import { BtnSecondary } from '@/components/ui';
import { ProjectsList } from './progectsList/ProjectsList';

export const ProjectsSection = () => {
  const router = useRouter();
  const { data, isLoading } = useProjects(3);

  return (
    <section className={styles.section}>
      <div className={styles.head}>
        <h2 className={styles.title}>Projects</h2>
        <BtnSecondary disabled={isLoading} onClick={() => router.push(ROUTES.projects)}>
          <span>{data?.projects?.length ? 'View all' : 'Add project'}</span>
          <SvgHandler icon={EIconsSet.ChevronRight} />
        </BtnSecondary>
      </div>
      <ProjectsList
        loading={isLoading}
        projects={data?.projects}
        placeholder="You dont have projects yet"
      />
    </section>
  );
};
