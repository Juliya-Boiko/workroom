'use client';
import styles from './editProjectPage.module.scss';
import { useProject } from '@/services';
import { Topping } from '@/components/topping/Topping';
import { Preloader } from '@/components/ui';
import { IDynamicComponent } from '@/typings';
import { EditProjectForm } from '@/components/forms/editProject/EditProjectForm';
import { ROUTES } from '@/utils';

export const EditProjectPage = ({ slug }: IDynamicComponent) => {
  const { data: project, isLoading } = useProject(slug);

  return (
    <div className={styles.editProjectPage}>
      <Topping title="editProject" link="Projects.backTasks" path={`${ROUTES.project}/${slug}`} />
      <div className={styles.container}>
        {isLoading ? (
          <div className={styles.loader}>
            <Preloader />
          </div>
        ) : (
          project && (
            <div className={styles.content}>
              <EditProjectForm project={project} />
            </div>
          )
        )}
      </div>
    </div>
  );
};
