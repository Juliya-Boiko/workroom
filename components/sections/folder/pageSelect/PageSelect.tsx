'use client';
import styles from './pageSelect.module.scss';
import { useState } from 'react';
import { SvgHandler } from '@/components/SvgHandler';
import { BtnIcon, BtnPrimary } from '@/components/ui';
import { EIconsSet } from '@/typings';

interface Props {
  page: string | null;
  setView: () => void;
  onChange: (v: string) => void;
}
export const PageSelect = ({ setView }: Props) => {
  const [open, setOpen] = useState(false);

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
      <ul className={`${styles.list} ${open ? styles.openList : styles.hiddenList}`}>list</ul>
    </section>
  );
};
