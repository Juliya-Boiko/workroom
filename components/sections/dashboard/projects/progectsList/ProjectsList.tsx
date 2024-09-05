import styles from './projectsList.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import imgSrc from '../../../../../public/placeholder-1.png';
import { projectSectionSkeleton, ROUTES } from '@/utils';
import { IProjectInfo } from '@/typings';
import { ProjectCard } from '@/components/cards/project/ProgectCard';

interface Props {
  loading: boolean;
  projects?: IProjectInfo[];
}

export const ProjectsList = ({ loading, projects }: Props) => {
  return (
    <ul className={styles.list}>
      {loading &&
        projectSectionSkeleton.map((el) => (
          <li key={el._id} className={styles.item}>
            <ProjectCard loading={loading} project={el} />
          </li>
        ))}
      {projects && !projects.length && (
        <li className={styles.placeholder}>
          <p>You dont have projects yet</p>
          <Image src={imgSrc} alt="Projects" className={styles.image} />
        </li>
      )}
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
