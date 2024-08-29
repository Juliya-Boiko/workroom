'use client';
import styles from './modal.module.scss';
import { useState } from 'react';
import { EIconsSet } from '@/enums';
import { SvgHandler } from '@/components/SvgHandler';
import { BtnPrimary } from '../buttons/primary/BtnPrimary';
import { Overlay } from '../overlay/Overlay';
import { BtnIcon } from '../buttons/icon/BtnIcon';

interface Props {
  title: string;
  children: string | JSX.Element | JSX.Element[];
}

export const Modal = ({ children, title }: Props) => {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.modal}>
      <BtnPrimary onClick={() => setOpen(true)}>
        <SvgHandler icon={EIconsSet.Plus} />
        <span>{title}</span>
      </BtnPrimary>
      {open && (
        <Overlay onClose={() => setOpen(false)}>
          <div className={styles.container}>
            <div className={styles.head}>
              <h3 className={styles.title}>{title}</h3>
              <BtnIcon title="Close" tonal onClick={() => setOpen(false)}>
                <SvgHandler icon={EIconsSet.Cross} />
              </BtnIcon>
            </div>
            {children}
          </div>
        </Overlay>
      )}
    </div>
  );
};
