'use client';
import styles from './filtersWrapper.module.scss';
import { useEffect } from 'react';
import { BtnIcon, Overlay } from '@/components/ui';
import { EIconsSet } from '@/typings';

interface Props {
  open: boolean;
  setOpen: (v: boolean) => void;
  children: JSX.Element | JSX.Element[];
}

export const FiltersWrapper = ({ open, setOpen, children }: Props) => {
  useEffect(() => {
    const body = document.body;
    if (open) {
      body.style.height = '100vh';
      body.style.overflowY = 'hidden';
    } else {
      body.style.height = '';
      body.style.overflowY = '';
    }
  }, [open]);

  return (
    <>
      <BtnIcon title="Filter" onClick={() => setOpen(true)} icon={EIconsSet.Filter} />
      {open && (
        <Overlay onClose={() => setOpen(false)}>
          <div className={styles.wrapper}>
            <div className={styles.scrollContent}>
              <div className={styles.head}>
                <h6 className={styles.title}>Filters</h6>
                <BtnIcon title="Close" onClick={() => setOpen(false)} icon={EIconsSet.Cross} />
              </div>
              {children}
            </div>
          </div>
        </Overlay>
      )}
    </>
  );
};
