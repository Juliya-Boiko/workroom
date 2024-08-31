'use client';
import { useEffect } from 'react';
import { useModal } from '@/services';
import styles from './overlay.module.scss';

interface Props {
  children: string | JSX.Element | JSX.Element[];
}

export const Overlay = ({ children }: Props) => {
  const { closeModal } = useModal();
  const TARGET_ID = 'overlay';

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      if (target && target.id === TARGET_ID) {
        closeModal();
      }
    };

    window.addEventListener('mousedown', handleClick);

    return () => {
      window.removeEventListener('mousedown', handleClick);
    };
  }, [closeModal]);

  return (
    <div id={TARGET_ID} className={styles.overlay}>
      {children}
    </div>
  );
};
