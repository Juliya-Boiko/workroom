'use client';
import styles from './projectCard.module.scss';
import Image from 'next/image';
import { formatDayDate, defineImageSrc } from '@/utils';
import { useTranslations } from 'next-intl';
import { LoaderSkeleton } from '@/components/LoaderSkeleton';
import { SvgHandler } from '@/components/SvgHandler';
import { EIconsSet, IProjectInfo } from '@/typings';
import { BadgePriopity, Assignees } from '@/components/ui';

interface Props {
  loading?: boolean;
  project: IProjectInfo;
  expanded?: boolean;
}

export const ProjectCard = ({ loading, project, expanded }: Props) => {
  const imgSrc = defineImageSrc(project.image);
  const t = useTranslations('Common');

  return (
    <div className={styles.projectCard}>
      <div className={styles.main}>
        {loading ? (
          <LoaderSkeleton height={48} />
        ) : (
          <div className={styles.head}>
            <Image src={imgSrc} alt="Thumb" width={48} height={48} className={styles.image} />
            <div className={styles.block}>
              <p className={styles.order}>{project.order}</p>
              <p className={styles.title}>{project.name}</p>
            </div>
          </div>
        )}

        {loading ? (
          <LoaderSkeleton height={24} />
        ) : (
          <>
            <div className={styles.info}>
              <div className={styles.date}>
                <SvgHandler icon={EIconsSet.Calendar} />
                <p>
                  <span className={styles.created}>{t('created')}</span>{' '}
                  {formatDayDate(project.createdAt)}
                </p>
              </div>
              <BadgePriopity label={project.priority} />
            </div>
            {expanded && project.description && (
              <div className={styles.description}>{project.description}</div>
            )}
          </>
        )}
      </div>

      <div className={styles.details}>
        {loading ? (
          <LoaderSkeleton height={24} />
        ) : (
          <p className={styles.top}>{t('projectData')}</p>
        )}
        {loading ? (
          <LoaderSkeleton height={60} />
        ) : (
          <div className={styles.data}>
            <div>
              <p className={styles.subtitle}>{t('allTasks')}</p>
              <div className={styles.value}>{project.tasks.all}</div>
            </div>
            <div>
              <p className={styles.subtitle}>{t('activeTasks')}</p>
              <div className={styles.value}>{project.tasks.active}</div>
            </div>
            <div>
              <p className={styles.subtitle}>{t('assignees')}</p>
              <Assignees assignees={project.tasks.assignee} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
