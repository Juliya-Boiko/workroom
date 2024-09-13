import styles from './projectsGrid.module.scss';
import { ProjectCard } from '@/components/cards/project/ProgectCard';
import { IProjectInfo } from '@/typings';
import { ROUTES } from '@/utils';
import Link from 'next/link';

interface Props {
  projects: IProjectInfo[];
}

export const ProjectsGrid = ({ projects }: Props) => {
  return (
    <section>
      <ul className={styles.projectsGrid}>
        {projects.map((el) => (
          <li key={el._id}>
            <Link href={`${ROUTES.project}/${el._id}`}>
              <ProjectCard project={el} expanded />
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};
