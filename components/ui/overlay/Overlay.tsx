'use client';
import { useEffect } from 'react';
import styles from './overlay.module.scss';

interface Props {
  children: string | JSX.Element | JSX.Element[];
  onClose: () => void;
}

export const Overlay = ({ children, onClose }: Props) => {
  const TARGET_ID = 'overlay';

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      if (target && target.id === TARGET_ID) {
        onClose();
      }
    };

    window.addEventListener('mousedown', handleClick);

    return () => {
      window.removeEventListener('mousedown', handleClick);
    };
  }, [onClose]);

  return (
    <div id={TARGET_ID} className={styles.overlay}>
      {children}
    </div>
  );
};
