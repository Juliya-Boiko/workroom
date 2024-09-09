'use client';
import styles from './chooseProject.module.scss';
import Link from 'next/link';
import { useState } from 'react';
import { SvgHandler } from '@/components/SvgHandler';
import { EIconsSet } from '@/typings';
import { ROUTES } from '@/utils';

interface SelectedProject {
  _id: string;
  name: string;
}
interface Props {
  active?: SelectedProject;
  list: SelectedProject[];
  onChoose: (v: SelectedProject) => void;
}

export const ChooseProject = ({ active, list, onChoose }: Props) => {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => setOpen((prev) => !prev);

  const handleChoose = (value: SelectedProject) => {
    onChoose(value);
    setOpen(false);
  };

  return (
    <section className={styles.chooseProject}>
      <div className={styles.title}>
        <span>Choose project</span>
        <SvgHandler icon={EIconsSet.ChevronDown} />
      </div>
      <button
        type="button"
        className={`${styles.chooseBtn} ${open ? styles.openBtn : ''}`}
        onClick={toggleOpen}
      >
        <span className={styles.name}>{active ? active.name : 'Choose project'}</span>
        <SvgHandler icon={EIconsSet.ChevronDown} />
      </button>
      <ul className={`${open ? styles.list : styles.listHidden}`}>
        {list.map((el) => (
          <li
            key={el._id}
            className={`${styles.item} ${active?._id === el._id ? styles.active : ''}`}
          >
            <button type="button" className={styles.itemBtn} onClick={() => handleChoose(el)}>
              {el.name}
            </button>
            <Link href={`${ROUTES.project}/${el._id}`} className={styles.link}>
              <span>View details</span>
              <SvgHandler icon={EIconsSet.ArrowRight} />
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};
