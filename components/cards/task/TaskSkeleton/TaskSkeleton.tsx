import styles from './taskSkeleton.module.scss';
import { LoaderSkeleton } from '@/components/LoaderSkeleton';

export const TaskSkeleton = () => {
  const items = [1, 2, 3];

  return (
    <ul className={styles.list}>
      {items.map((el) => (
        <div key={el}>
          <li className={`${styles.item} ${styles.itemMulti}`}>
            <LoaderSkeleton height={24} />
            <LoaderSkeleton height={24} />
            <LoaderSkeleton height={30} />
          </li>
          <li className={`${styles.item} ${styles.itemSingle}`}>
            <LoaderSkeleton height={60} />
          </li>
        </div>
      ))}
    </ul>
  );
};
