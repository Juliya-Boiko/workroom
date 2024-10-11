'use client';
import styles from './editFolderPage.module.scss';
import { IDynamicComponent } from '@/typings';
import { Topping } from '@/components/topping/Topping';
import { EditFolderForm } from '@/components/forms/editFolder/EditFolderForm';

export const EditFolderPage = ({ slug }: IDynamicComponent) => (
  <div className={styles.editFolderPage}>
    <Topping title="Edit folder" />
    <div className={styles.container}>
      <EditFolderForm folderId={slug} />
    </div>
  </div>
);
