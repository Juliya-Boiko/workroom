'use client';
import styles from './foldersList.module.scss';
import { useFolders } from '@/services';
import { useTranslations } from 'next-intl';
import { Placeholder, Preloader } from '@/components/ui';

import { FolderCard } from '@/components/cards/folder/FolderCard';

export const FoldersList = () => {
  const { data: folders, isLoading } = useFolders();
  const t = useTranslations('Placeholder');

  return (
    <section className={styles.foldersList}>
      {isLoading ? <Preloader /> : null}
      {folders && !folders.length ? <Placeholder primary title={t('folders')} /> : null}
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
