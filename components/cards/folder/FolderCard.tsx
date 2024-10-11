import styles from './folderCard.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import { IFolder } from '@/typings';
import { FolderCardOptions } from './options/FolderCardOptions';
import { ROUTES } from '@/utils';

export const FolderCard = ({ folder }: { folder: IFolder }) => {
  return (
    <li className={styles.folderCard}>
      <div className={styles.wrapper}>
        <Image priority src={folder.image} alt={folder.projectId.name} width={44} height={44} />
        <FolderCardOptions folderId={folder._id} />
      </div>
      <Link href={`${ROUTES.folder}/${folder._id}`} className={styles.link}>
        {folder.projectId.name}
      </Link>
      <p className={styles.pages}>
        {folder.pages} {folder.pages === 1 ? 'page' : 'pages'}
      </p>
    </li>
  );
};
