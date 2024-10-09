import styles from './folderCard.module.scss';
import Link from 'next/link';
import { IFolder } from '@/typings';
import { ROUTES } from '@/utils';
import Image from 'next/image';

export const FolderCard = ({ folder }: { folder: IFolder }) => {
  return (
    <li className={styles.folderCard}>
      <Link href={`${ROUTES.folder}/${folder._id}`} className={styles.link}>
        <Image priority src={folder.image} alt={folder.projectId.name} width={44} height={44} />
        <p className={styles.name}>{folder.projectId.name}</p>
        <p className={styles.pages}>{folder.pages} pages</p>
      </Link>
    </li>
  );
};
