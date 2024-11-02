'use client';
import styles from './options.module.scss';
import { useTranslations } from 'next-intl';
import { useEffect, useState, useRef } from 'react';
import { EIconsSet } from '@/typings';
import { SvgHandler } from '@/components/SvgHandler';

interface Props {
  options: {
    value: string;
    action: () => void;
  }[];
}

export const Options = ({ options }: Props) => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const t = useTranslations('Options');

  const handleClick = (action: () => void) => {
    setOpen(false);
    action();
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
    <div ref={ref} className={styles.options}>
      <button
        title="Options"
        type="button"
        className={`${styles.toggleBtn} ${open ? styles.btnActive : ''}`}
        onClick={() => setOpen((prev) => !prev)}
      >
        <SvgHandler icon={EIconsSet.Dots} />
      </button>
      {open && (
        <ul className={styles.list}>
          {options.map(({ value, action }) => (
            <li key={value} className={styles.item} onClick={() => handleClick(action)}>
              {t(value)}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
