import styles from './thumbSelect.module.scss';
import Image from 'next/image';
import { folderThumbs } from '@/utils';

interface Props {
  label: string;
  value?: string;
  onChange: (v: string) => void;
}

export const ThumbSelect = ({ value, onChange, label }: Props) => (
  <div className={styles.thumbSelect}>
    <p className={styles.label}>{label}</p>
    <ul className={styles.list}>
      {folderThumbs.map((el) => (
        <li
          key={el}
          className={`${styles.item} ${value && value === el ? styles.selected : ''}`}
          onClick={() => onChange(el)}
        >
          <Image priority src={el} alt="Folder Thumb" width={44} height={44} />
        </li>
      ))}
    </ul>
  </div>
);
