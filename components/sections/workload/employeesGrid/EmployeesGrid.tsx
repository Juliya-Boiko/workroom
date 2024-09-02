import styles from './employeesGrid.module.scss';
import imgSrc from '../../../../public/placeholder-1.png';
import Image from 'next/image';

export const EmployeesGrid = () => {
  return (
    <ul className={styles.employeesGrid}>
      <li className={styles.placeholder}>
        <p>You dont have employees yet</p>
        <Image src={imgSrc} alt="Employees" className={styles.image} />
      </li>
    </ul>
  );
};
