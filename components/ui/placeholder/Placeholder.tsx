import styles from './placeholder.module.scss';
import Image from 'next/image';
import imgPrimary from '../../../public/placeholder-1.png';
import imgSecondary from '../../../public/placeholder-2.png';

export const Placeholder = ({ title, primary }: { title: string; primary?: boolean }) => (
  <div className={styles.placeholder}>
    <p>{title}</p>
    <Image
      src={primary ? imgPrimary : imgSecondary}
      priority
      alt="Employees"
      className={primary ? styles.imagePrimary : styles.imageSecondary}
    />
  </div>
);
