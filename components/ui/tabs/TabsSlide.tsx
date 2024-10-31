'use client';
import styles from './tabsSlide.module.scss';
import { useTranslations } from 'next-intl';
import { EViewEmployees, EViewProfile } from '@/typings';

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
  const t = useTranslations('Options');

  return (
    <ul className={styles.tabsSlide}>
      {options.map((el) => (
        <li
          key={el}
          className={`${styles.item} ${value === el ? styles.active : ''}`}
          onClick={() => onChange(el)}
        >
          {t(el)}
        </li>
      ))}
    </ul>
  );
};
