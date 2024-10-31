'use client';
import styles from './radio.module.scss';
import { useTranslations } from 'next-intl';

interface Props {
  options: string[];
  value: string;
  onChange: (v: string) => void;
}

export const RadioTab = ({ options, value, onChange }: Props) => {
  const t = useTranslations('Options');

  return (
    <ul className={styles.list}>
      {options.map((size) => (
        <li
          key={size}
          className={`${styles.item} ${value === size ? styles.active : ''}`}
          onClick={() => onChange(size)}
        >
          {t(size)}
        </li>
      ))}
    </ul>
  );
};
