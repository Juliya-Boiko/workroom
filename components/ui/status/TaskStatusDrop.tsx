'use client';
import styles from './taskStatusDrop.module.scss';
import { useState, useRef, useEffect } from 'react';
import { useTasksMutation } from '@/services';
import { useTranslations } from 'next-intl';
import { EIconsSet, ETaskStatus, taskStatusDataTypes } from '@/typings';
import { SvgHandler } from '@/components/SvgHandler';

interface Props {
  id: string;
  status: ETaskStatus;
}

export const TaskStatusDrop = ({ id, status }: Props) => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(status);
  const ref = useRef<HTMLDivElement>(null);
  const { update } = useTasksMutation();
  const t = useTranslations('Options');

  const getStyles = (value: ETaskStatus) => {
    if (value === ETaskStatus.INPROGRESS) return styles.progress;
    if (value === ETaskStatus.DONE) return styles.done;
    if (value === ETaskStatus.REVIEW) return styles.review;
    return styles.default;
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

  const handleSelected = (value: ETaskStatus) => {
    setSelected(value);
    setOpen(false);
    const data = {
      _id: id,
      update: {
        status: value,
      },
    };
    update(data);
  };

  return (
    <div ref={ref} className={styles.taskStatusDrop}>
      <div
        className={`${styles.badge} ${getStyles(selected)}`}
        onClick={() => setOpen((prev) => !prev)}
      >
        <span>{t(selected)}</span>
        <SvgHandler icon={EIconsSet.ChevronDown} />
      </div>
      {open && (
        <ul className={styles.list}>
          {taskStatusDataTypes.map((el) => (
            <li
              key={el}
              className={`${styles.item} ${getStyles(el)}`}
              onClick={() => handleSelected(el)}
            >
              {t(el)}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
