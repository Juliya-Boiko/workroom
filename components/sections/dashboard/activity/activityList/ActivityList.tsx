import styles from './activityList.module.scss';
import imgSrc from '../../../../../public/placeholder-2.png';
import Image from 'next/image';

export const ActivityList = () => {
  return (
    <ul className={styles.activityList}>
      <li className={styles.placeholder}>
        <p>You dont have any activity yet</p>
        <Image src={imgSrc} alt="Employees" className={styles.image} />
      </li>
    </ul>
  );
};
