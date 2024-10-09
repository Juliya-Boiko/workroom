import styles from './projectsGrid.module.scss';
import Link from 'next/link';
import { projectsViewDataTypes, IFilters, IProjectInfo, EViewTasks } from '@/typings';
import { ProjectCard } from '@/components/cards/project/ProgectCard';
import { ProjectsFilter } from '../projectsFilter/ProjectsFilter';
import { ROUTES } from '@/utils';
import { BtnIcon } from '@/components/ui';

interface Props {
  filters: IFilters | null;
  setFilters: (v: IFilters) => void;
  view: EViewTasks;
  projects: IProjectInfo[];
  onClick: (v: EViewTasks) => void;
}

export const ProjectsGrid = ({ filters, setFilters, projects, view, onClick }: Props) => (
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
      <ProjectsFilter filters={filters} setFilters={setFilters} />
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
