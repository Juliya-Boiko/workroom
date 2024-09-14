import styles from './projectsGrid.module.scss';
import { ProjectCard } from '@/components/cards/project/ProgectCard';
import { projectsViewDataTypes, IProjectInfo, EViewTasks } from '@/typings';
import { ROUTES } from '@/utils';
import Link from 'next/link';
import { BtnIcon } from '@/components/ui';

interface Props {
  view: EViewTasks;
  projects: IProjectInfo[];
  onClick: (v: EViewTasks) => void;
}

export const ProjectsGrid = ({ projects, view, onClick }: Props) => {
  return (
    <section className={styles.projectsGrid}>
      <div className={styles.filters}>
        {projectsViewDataTypes.map(({ value, icon }) => (
          <BtnIcon
            key={value}
            title={value}
            icon={icon}
            active={value === view}
            onClick={() => onClick(value)}
          />
        ))}
      </div>
      <ul className={styles.list}>
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
