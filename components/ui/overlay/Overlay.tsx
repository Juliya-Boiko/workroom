'use client';
import styles from './overlay.module.scss';
import { useEffect } from 'react';
import { useModalContext } from '@/components/providers/ModalProvider';

interface Props {
  transparent?: boolean;
  children: string | JSX.Element | JSX.Element[];
  onClose?: () => void;
}

export const Overlay = ({ transparent, children, onClose }: Props) => {
  const { closeModal } = useModalContext();
  const TARGET_ID = 'overlay';

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      if (target && target.id === TARGET_ID) {
        closeModal();
        onClose?.();
      }
    };

    window.addEventListener('mousedown', handleClick);

    return () => {
      window.removeEventListener('mousedown', handleClick);
    };
  }, [closeModal, onClose]);

  return (
    <div
      id={TARGET_ID}
      style={{ backgroundColor: transparent ? 'transparent' : 'rgba(33, 85, 163, 0.16)' }}
      className={styles.overlay}
    >
      {children}
    </div>
  );
};
