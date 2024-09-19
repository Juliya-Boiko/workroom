'use client';
import styles from './editProjectPage.module.scss';
import { useProject } from '@/services';
import { Topping } from '@/components/topping/Topping';
import { Preloader } from '@/components/ui';
import { IDynamicComponent } from '@/typings';

export const EditProjectPage = ({ slug }: IDynamicComponent) => {
  const { data: project, isLoading } = useProject(slug);

  console.log(project);

  return (
    <div className={styles.editProjectPage}>
      <Topping title="Edit project" />
      <div className={styles.container}>
        {isLoading ? (
          <div className={styles.loader}>
            <Preloader />
          </div>
        ) : (
          <div className={styles.content}>edit project form</div>
        )}
      </div>
    </div>
  );
};
