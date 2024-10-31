'use client';
import styles from './overlay.module.scss';
import { useEffect } from 'react';
import { useModalContext } from '@/components/providers/ModalProvider';

interface Props {
  isOpen: boolean;
  children: string | JSX.Element | JSX.Element[];
  onClose?: () => void;
}

export const Overlay = ({ isOpen, children, onClose }: Props) => {
  const { closeModal } = useModalContext();
  const TARGET_ID = 'overlay';

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      onClose?.();
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

  useEffect(() => {
    const body = document.body;
    if (isOpen) {
      body.style.height = '100vh';
      body.style.overflowY = 'hidden';
    } else {
      body.style.height = '';
      body.style.overflowY = '';
    }
    return () => {
      body.style.height = '';
      body.style.overflowY = '';
    };
  }, [isOpen]);

  return (
    <div id={TARGET_ID} className={styles.overlay} onClick={() => onClose?.()}>
      {children}
    </div>
  );
};
