import { EViewEmployees, EViewProfile } from '@/typings';
import styles from './tabsSlide.module.scss';

interface Props<T extends EViewEmployees | EViewProfile> {
  options: T[];
  value: T;
  onChange: (v: T) => void;
}

export const TabsSlide = <T extends EViewEmployees | EViewProfile>({
  options,
  value,
  onChange,
}: Props<T>) => {
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
