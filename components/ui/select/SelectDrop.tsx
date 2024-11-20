'use client';
import styles from './selectDrop.module.scss';
import { useTranslations } from 'next-intl';
import { useEffect, useRef, useState } from 'react';
import { SvgHandler } from '@/components/SvgHandler';
import { Avatar } from '../avatar/Avatar';
import { EIconsSet } from '@/typings';

type UserType = {
  _id: string;
  name: string;
  avatar?: string | null | undefined;
};

interface Props {
  clearable?: boolean;
  label?: string;
  options: string[] | UserType[];
  value?: string | null | UserType;
  onChange: (v: string | UserType | null) => void;
}

export const SelectDrop = ({ clearable, label, options, value, onChange }: Props) => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const t = useTranslations('Options');

  const handleOption = (option: string | UserType) => {
    if (typeof option !== 'string' && !option._id) return;
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
      {label && <div className={styles.label}>{label}</div>}
      <div
        className={`${styles.selectedBtn} ${open ? styles.openDropBtn : ''}`}
        onClick={() => setOpen((prev) => !prev)}
      >
        <div>
          {value && typeof value === 'string' && <span>{t(value)}</span>}
          {value && typeof value !== 'string' && (
            <div className={styles.user}>
              {value.name && (
                <Avatar size="s" user={{ name: value.name, avatar: value.avatar || null }} />
              )}
              <span>{value.name}</span>
            </div>
          )}
        </div>
        <div className={styles.actions}>
          {clearable && value && (
            <button type="button" className={styles.btnReset} onClick={() => onChange(null)}>
              <SvgHandler icon={EIconsSet.Cross} />
            </button>
          )}
          <SvgHandler icon={EIconsSet.ChevronDown} />
        </div>
      </div>
      {open && options && (
        <ul className={styles.options}>
          {options.map((option) => {
            return typeof option === 'string' ? (
              <li key={option} className={styles.option} onClick={() => handleOption(option)}>
                {t(option)}
              </li>
            ) : (
              <li key={option._id} className={styles.option} onClick={() => handleOption(option)}>
                <Avatar size="s" user={{ name: option.name, avatar: option.avatar || null }} />
                <span>{option.name}</span>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};
