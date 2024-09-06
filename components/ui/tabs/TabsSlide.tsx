import { EViewEmployees } from '@/typings';
import styles from './tabsSlide.module.scss';

interface Props {
  options: EViewEmployees[];
  value: EViewEmployees;
  onChange: (v: EViewEmployees) => void;
}

export const TabsSlide = ({ options, value, onChange }: Props) => {
  return (
    <ul className={styles.tabsSlide}>
      {options.map((el) => (
        <li
          key={el}
          className={`${styles.item} ${value === el ? styles.active : ''}`}
          onClick={() => onChange(el)}
        >
          {el}
        </li>
      ))}
    </ul>
  );
};
