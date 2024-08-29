import styles from './projectCard.module.scss';
import Image from 'next/image';
import thumb from '../../../public/project-thumb.svg';
import { LoaderSkeleton } from '@/components/LoaderSkeleton';
import { SvgHandler } from '@/components/SvgHandler';
import { EIconsSet, EPriority } from '@/enums';
import { BadgePriopity } from '@/components/ui/badges/priority/BadgePriority';
import { formatDeadlineDate, formatDayDate } from '@/helpers';

interface Props {
  loading: boolean;
  deadline: string;
  name: string;
  priority: EPriority;
  start: string;
  assignee: string[];
}

export const ProjectCard = ({ loading, deadline, name, start, priority }: Props) => {
  return (
    <div className={styles.projectCard}>
      <div className={styles.main}>
        {loading ? (
          <LoaderSkeleton height={48} />
        ) : (
          <div className={styles.head}>
            <Image src={thumb} alt="Thumb" className={styles.image} />
            <div className={styles.block}>
              <p className={styles.deadline}>Deadline: {formatDeadlineDate(deadline)}</p>
              <p className={styles.title}>
                <span className={styles.wrap}>{name}</span>
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
                <span className={styles.created}>Created</span> {formatDayDate(start)}
              </p>
            </div>
            <BadgePriopity label={priority} />
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
              <p className={styles.value}>34</p>
            </div>
            <div>
              <p className={styles.subtitle}>Active tasks</p>
              <p className={styles.value}>13</p>
            </div>
            <div>
              <p className={styles.subtitle}>Assignees</p>
              <div>avatars</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
