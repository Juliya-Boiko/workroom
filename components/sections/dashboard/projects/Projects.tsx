'use client';
import styles from './projectsSection.module.scss';
import { useRouter } from 'next/navigation';
import { useProjects } from '@/services';
import { useTranslations } from 'next-intl';
import { ROUTES } from '@/utils';
import { SvgHandler } from '@/components/SvgHandler';
import { EIconsSet } from '@/typings';
import { BtnSecondary } from '@/components/ui';
import { ProjectsList } from './progectsList/ProjectsList';

export const ProjectsSection = () => {
  const router = useRouter();
  const { data, isLoading } = useProjects(null, 3);
  const tHolder = useTranslations('Placeholder');
  const tCommon = useTranslations('Common');
  const t = useTranslations('Projects');

  return (
    <section className={styles.section}>
      <div className={styles.head}>
        <h2 className={styles.title}>{t('title')}</h2>
        <BtnSecondary disabled={isLoading} onClick={() => router.push(ROUTES.projects)}>
          <span>{data?.projects?.length ? tCommon('viewAll') : t('add')}</span>
          <SvgHandler icon={EIconsSet.ChevronRight} />
        </BtnSecondary>
      </div>
      <ProjectsList
        loading={isLoading}
        projects={data?.projects}
        placeholder={tHolder('projects')}
      />
    </section>
  );
};
