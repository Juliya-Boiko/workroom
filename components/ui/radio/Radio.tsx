import styles from './radio.module.scss';

interface Props {
  options: string[];
  value: string;
  onChange: (v: string) => void;
}

export const RadioTab = ({ options, value, onChange }: Props) => (
  <ul className={styles.list}>
    {options.map((size) => (
      <li
        key={size}
        className={`${styles.item} ${value === size ? styles.active : ''}`}
        onClick={() => onChange(size)}
      >
        {size}
      </li>
    ))}
  </ul>
);
