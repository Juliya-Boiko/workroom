'use client';
import styles from './pageSelect.module.scss';
import { useState, useEffect } from 'react';
import { SvgHandler } from '@/components/SvgHandler';
import { BtnIcon, BtnPrimary } from '@/components/ui';
import { EIconsSet, IPage } from '@/typings';
import { formatDayDate, LOCALE_LANGUAGE } from '@/utils';

interface Props {
  pages: IPage[] | undefined;
  active: string | null;
  setView: () => void;
  onSelect: (v: string) => void;
}
export const PageSelect = ({ active, pages, setView, onSelect }: Props) => {
  const [open, setOpen] = useState(false);
  const [locale, setLocale] = useState<string | null>(null);

  useEffect(() => {
    const storedLocale = localStorage.getItem(LOCALE_LANGUAGE);
    setLocale(storedLocale);
  }, []);

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
                <p className={styles.date}>Last modified {formatDayDate(updatedAt, locale)}</p>
              </li>
            ))
          : null}
        {pages && !pages.length ? (
          <li className={styles.placeholder} onClick={() => setOpen(false)}>
            No pages created
          </li>
        ) : null}
      </ul>
    </section>
  );
};
