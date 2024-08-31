'use client';
import { SvgHandler } from '@/components/SvgHandler';
import styles from './chooseProject.module.scss';
import { EIconsSet } from '@/enums';
import { useState } from 'react';
import { chooseSectionSkeleton } from '@/helpers';

export const ChooseProject = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<{ _id: string; name: string }>();

  const toggleOpen = () => setOpen((prev) => !prev);

  const handleChoose = (value: { _id: string; name: string }) => {
    setActive(value);
    setOpen(false);
  };

  return (
    <section className={styles.chooseProject}>
      <button
        type="button"
        className={`${styles.chooseBtn} ${open ? styles.openBtn : ''}`}
        onClick={toggleOpen}
      >
        <span>{active ? active.name : 'Choose project'}</span>
        <SvgHandler icon={EIconsSet.ChevronDown} />
      </button>
      {open && (
        <ul className={styles.list}>
          {chooseSectionSkeleton.map((el) => (
            <li
              key={el._id}
              className={`${styles.item} ${active?._id === el._id ? styles.active : ''}`}
              onClick={() => handleChoose(el)}
            >
              <span>{el.name}</span>
              <span className={styles.icon}>
                <SvgHandler icon={EIconsSet.ArrowRight} />
              </span>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};
