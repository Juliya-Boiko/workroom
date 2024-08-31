'use client';
import styles from './modal.module.scss';
import { useState } from 'react';
import { EIconsSet } from '@/enums';
import { SvgHandler } from '@/components/SvgHandler';
import { Overlay } from '../overlay/Overlay';
import { BtnIcon } from '../buttons/icon/BtnIcon';

interface Props {
  title: string;
  activator: string | JSX.Element | JSX.Element[];
  content: string | JSX.Element | JSX.Element[];
}

export const Modal = ({ content, title, activator }: Props) => {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.modal}>
      <div onClick={() => setOpen(true)}>{activator}</div>
      {open && (
        <Overlay onClose={() => setOpen(false)}>
          <div className={styles.container}>
            <div className={styles.head}>
              <h3 className={styles.title}>{title}</h3>
              <BtnIcon title="Close" tonal onClick={() => setOpen(false)}>
                <SvgHandler icon={EIconsSet.Cross} />
              </BtnIcon>
            </div>
            {content}
          </div>
        </Overlay>
      )}
    </div>
  );
};
