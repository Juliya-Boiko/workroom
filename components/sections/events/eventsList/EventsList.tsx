import styles from './eventsList.module.scss';
import imgSrc from '../../../../public/placeholder-2.png';
import Image from 'next/image';

export const EventsList = () => {
  return (
    <ul className={styles.eventsList}>
      <li className={styles.placeholder}>
        <p>You dont have events yet</p>
        <Image src={imgSrc} alt="Employees" className={styles.image} />
      </li>
    </ul>
  );
};
