'use client';
import styles from './filter.module.scss';
import { useRef } from 'react';
import { ICountry, ICity } from '@/typings';

interface Props {
  label: string;
  id: string;
  selected: ICountry | ICity | null;
  list: (ICountry | ICity)[];
  value: string;
  onClick: () => void;
  onType: (v: string) => void;
  onSelect: (v: ICountry | ICity) => void;
}

export const Filter = ({ label, id, selected, value, list, onClick, onType, onSelect }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    onClick();
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div className={styles.filter}>
      <p className={styles.label}>{label}</p>
      {selected ? (
        <button type="button" className={styles.btnOpen} onClick={handleClick}>
          <span>{selected.name}</span>
          <span>{'flag' in selected ? selected.flag : null}</span>
        </button>
      ) : (
        <input
          ref={inputRef}
          type="text"
          name={id}
          id={id}
          value={value}
          className={styles.input}
          onChange={(e) => onType(e.target.value)}
        />
      )}
      {list.length ? (
        <ul className={styles.list}>
          {list.map((el) => (
            <li key={el.name} className={styles.item} onClick={() => onSelect(el)}>
              {'flag' in el ? el.flag : null} {el.name}
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};
