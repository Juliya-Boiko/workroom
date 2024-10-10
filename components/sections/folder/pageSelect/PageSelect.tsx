'use client';
import styles from './pageSelect.module.scss';
import { useState } from 'react';
import { SvgHandler } from '@/components/SvgHandler';
import { BtnIcon, BtnPrimary } from '@/components/ui';
import { EIconsSet, IPage } from '@/typings';
import { formatDayDate } from '@/utils';

interface Props {
  pages: IPage[] | undefined;
  active: string | null;
  setView: () => void;
  onSelect: (v: string) => void;
}
export const PageSelect = ({ active, pages, setView, onSelect }: Props) => {
  const [open, setOpen] = useState(false);

  const handleSleect = (id: string) => {
    onSelect(id);
    setOpen(false);
  };

  return (
    <section className={styles.pageSelect}>
      <div className={styles.head}>
        <p>Pages</p>
        <div className={styles.laptopHidden}>
          <BtnIcon
            tonal
            title="Open select"
            icon={EIconsSet.ChevronDown}
            onClick={() => setOpen((v) => !v)}
          />
        </div>
        <BtnPrimary onClick={() => setView()}>
          <SvgHandler icon={EIconsSet.Plus} />
        </BtnPrimary>
      </div>
      <ul className={`${styles.list} ${open ? styles.openList : styles.hiddenList}`}>
        {pages && pages.length
          ? pages.map(({ _id, title, updatedAt }) => (
              <li
                key={_id}
                className={`${styles.item} ${active === _id ? styles.active : ''}`}
                onClick={() => handleSleect(_id)}
              >
                <p className={styles.name}>{title}</p>
                <p className={styles.date}>Last modified {formatDayDate(updatedAt)}</p>
              </li>
            ))
          : null}
      </ul>
    </section>
  );
};
