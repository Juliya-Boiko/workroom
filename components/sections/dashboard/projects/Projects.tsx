'use client';
import styles from './projectsSection.module.scss';
import { useRouter } from 'next/navigation';
import { useProjects, useUser } from '@/services';
import { useTranslations } from 'next-intl';
import { ROUTES } from '@/utils';
import { SvgHandler } from '@/components/SvgHandler';
import { EIconsSet, EUserPosition } from '@/typings';
import { BtnSecondary } from '@/components/ui';
import { ProjectsList } from './progectsList/ProjectsList';

export const ProjectsSection = () => {
  const router = useRouter();
  const { data, isLoading } = useProjects(null, 3);
  const { data: user } = useUser();
  const t = useTranslations();

  return (
    <section className={styles.section}>
      <div className={styles.head}>
        <h2 className={styles.title}>{t('Projects.title')}</h2>
        <BtnSecondary disabled={isLoading} onClick={() => router.push(ROUTES.projects)}>
          <span>
            {t(
              user?.position === EUserPosition.OWNER && !data?.projects?.length
                ? 'Projects.add'
                : 'Common.viewAll'
            )}
          </span>
          <SvgHandler icon={EIconsSet.ChevronRight} />
        </BtnSecondary>
      </div>
      <ProjectsList
        loading={isLoading}
        projects={data?.projects}
        placeholder="projects"
      />
    </section>
  );
};
