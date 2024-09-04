import styles from './projectCard.module.scss';
import Image from 'next/image';
import thumb from '../../../public/project-thumb.svg';
import { LoaderSkeleton } from '@/components/LoaderSkeleton';
import { SvgHandler } from '@/components/SvgHandler';
import { EIconsSet, IProjectInfo } from '@/typings';
import { BadgePriopity, Assignees } from '@/components/ui';
import { formatDeadlineDate, formatDayDate } from '@/helpers';

interface Props {
  loading: boolean;
  project: IProjectInfo;
}

export const ProjectCard = ({ loading, project }: Props) => {
  return (
    <div className={styles.projectCard}>
      <div className={styles.main}>
        {loading ? (
          <LoaderSkeleton height={48} />
        ) : (
          <div className={styles.head}>
            <Image src={thumb} alt="Thumb" className={styles.image} />
            <div className={styles.block}>
              <p className={styles.deadline}>Deadline: {formatDeadlineDate(project.deadline)}</p>
              <p className={styles.title}>
                <span className={styles.wrap}>{project.name}</span>
              </p>
            </div>
          </div>
        )}

        {loading ? (
          <LoaderSkeleton height={24} />
        ) : (
          <div className={styles.info}>
            <div className={styles.date}>
              <SvgHandler icon={EIconsSet.Calendar} />
              <p>
                <span className={styles.created}>Created</span> {formatDayDate(project.start)}
              </p>
            </div>
            <BadgePriopity label={project.priority} />
          </div>
        )}
      </div>

      <div className={styles.details}>
        {loading ? <LoaderSkeleton height={24} /> : <p className={styles.top}>Project Data</p>}
        {loading ? (
          <LoaderSkeleton height={60} />
        ) : (
          <div className={styles.data}>
            <div>
              <p className={styles.subtitle}>All tasks</p>
              <div className={styles.value}>{project.tasks.all}</div>
            </div>
            <div>
              <p className={styles.subtitle}>Active tasks</p>
              <div className={styles.value}>{project.tasks.active}</div>
            </div>
            <div>
              <p className={styles.subtitle}>Assignees</p>
              <Assignees assignees={project.tasks.assignee} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
