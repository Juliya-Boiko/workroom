'use client';
import styles from './selectDrop.module.scss';
import { useEffect, useRef, useState } from 'react';
import { SvgHandler } from '@/components/SvgHandler';
import { Avatar } from '../avatar/Avatar';
import { EIconsSet, IEmployee } from '@/typings';

type UserType = Pick<IEmployee, '_id' | 'name' | 'avatar'>;
interface Props {
  options: string[] | UserType[];
  value?: string | UserType;
  onChange: (v: string | UserType) => void;
}

export const SelectDrop = ({ options, value, onChange }: Props) => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

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
      <button
        type="button"
        className={`${styles.selectedBtn} ${open ? styles.openDropBtn : ''}`}
        onClick={() => setOpen((prev) => !prev)}
      >
        <div>
          {value && typeof value === 'string' && <span>{value}</span>}
          {value && typeof value !== 'string' && (
            <div className={styles.user}>
              {value.name && <Avatar size="s" user={{ name: value.name, avatar: value.avatar }} />}
              <span>{value.name}</span>
            </div>
          )}
        </div>
        <SvgHandler icon={EIconsSet.ChevronDown} />
      </button>
      {open && options && (
        <ul className={styles.options}>
          {options.map((option) => {
            return typeof option === 'string' ? (
              <li key={option} className={styles.option} onClick={() => handleOption(option)}>
                {option}
              </li>
            ) : (
              <li key={option._id} className={styles.option} onClick={() => handleOption(option)}>
                <Avatar size="s" user={{ name: option.name, avatar: option.avatar }} />
                <span>{option.name}</span>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};
