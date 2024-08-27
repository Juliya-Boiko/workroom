'use client';
import styles from './selectDrop.module.scss';
import { useEffect, useRef, useState } from 'react';
import { SvgHandler } from '@/components/SvgHandler';
import { EIconsSet } from '@/enums';

interface Props {
  options: string[];
  value: string;
  onChange: (v: string) => void;
}

export const SelectDrop = ({ options, value, onChange }: Props) => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const handleOption = (option: string) => {
    onChange(option);
    setOpen(false);
  };

  useEffect(() => {
    const handleOutSideClick = (event: MouseEvent) => {
      if (!ref.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    window.addEventListener('mousedown', handleOutSideClick);

    return () => {
      window.removeEventListener('mousedown', handleOutSideClick);
    };
  }, [ref]);

  return (
    <div className={styles.wrapper} ref={ref}>
      <button
        type="button"
        className={`${styles.selectedBtn} ${open ? styles.openDropBtn : ''}`}
        onClick={() => setOpen((prev) => !prev)}
      >
        <span>{value}</span>
        <SvgHandler icon={EIconsSet.ChevronDown} />
      </button>
      {open && (
        <ul className={styles.options}>
          {options.map((option) => (
            <li key={option} className={styles.option} onClick={() => handleOption(option)}>
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
