'use client';
import styles from './projectSelect.module.scss';
import { useEffect, useRef, useState } from 'react';
import { SvgHandler } from '@/components/SvgHandler';
import { EIconsSet } from '@/typings';
import { useFolderlessProjects } from '@/services';

interface Props {
  label: string;
  value?: string;
  holder: string;
  onChange: (v: string) => void;
}

export const ProjectsSelect = ({ value, onChange, label, holder }: Props) => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const { data } = useFolderlessProjects();

  const selectedName = value && data ? data.find((el) => el._id === value)?.name : '';

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

  const handleOption = (id: string) => {
    onChange(id);
    setOpen(false);
  };

  return (
    <div ref={ref} className={styles.projectSelect}>
      <p className={styles.label}>{label}</p>
      <button
        type="button"
        className={`${styles.selectedBtn} ${open ? styles.openDropBtn : ''}`}
        onClick={() => setOpen((prev) => !prev)}
      >
        <span>{selectedName}</span>
        <SvgHandler icon={EIconsSet.ChevronDown} />
      </button>
      {open && (
        <ul className={styles.options}>
          {data && data.length
            ? data.map(({ _id, name }) => (
                <li key={_id} className={styles.option} onClick={() => handleOption(_id)}>
                  {name}
                </li>
              ))
            : null}
          {data && !data.length ? <li className={styles.placeholder}>{holder}</li> : null}
        </ul>
      )}
    </div>
  );
};
