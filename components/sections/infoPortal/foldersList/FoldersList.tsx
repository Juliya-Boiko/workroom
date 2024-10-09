'use client';
import { FolderCard } from '@/components/cards/folder/FolderCard';
import styles from './foldersList.module.scss';
import { Placeholder, Preloader } from '@/components/ui';
import { useFolders } from '@/services';

export const FoldersList = () => {
  const { data: folders, isLoading } = useFolders();

  console.log({ folders });

  return (
    <section className={styles.foldersList}>
      {isLoading ? <Preloader /> : null}
      {folders && !folders.length ? (
        <Placeholder primary title="You dont have folders yet" />
      ) : null}
      {folders && folders.length ? (
        <ul className={styles.list}>
          {folders.map((el) => (
            <FolderCard key={el._id} folder={el} />
          ))}
        </ul>
      ) : null}
    </section>
  );
};
