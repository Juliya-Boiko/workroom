import styles from './projectsList.module.scss';
import Link from 'next/link';
import { projectSectionSkeleton, ROUTES } from '@/utils';
import { IProjectInfo } from '@/typings';
import { ProjectCard } from '@/components/cards/project/ProgectCard';
import { Placeholder } from '@/components/ui';

interface Props {
  loading: boolean;
  projects?: IProjectInfo[];
  placeholder: string;
}

export const ProjectsList = ({ loading, projects, placeholder }: Props) => {
  return (
    <ul className={styles.list}>
      {loading &&
        projectSectionSkeleton.map((el) => (
          <li key={el._id} className={styles.item}>
            <ProjectCard loading={loading} project={el} />
          </li>
        ))}
      {projects && !projects.length && <Placeholder primary title={placeholder} />}
      {projects &&
        projects.length > 0 &&
        projects.map((el) => (
          <li key={el._id}>
            <Link href={`${ROUTES.project}/${el._id}`}>
              <ProjectCard project={el} />
            </Link>
          </li>
        ))}
    </ul>
  );
};
