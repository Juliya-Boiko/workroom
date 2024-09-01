'use client';
import styles from './modal.module.scss';
import { EIconsSet } from '@/enums';
import { SvgHandler } from '@/components/SvgHandler';
import { Overlay } from '../overlay/Overlay';
import { BtnIcon } from '../buttons/icon/BtnIcon';
import { useModalContext } from '@/components/providers/ModalProvider';

interface Props {
  title: string;
  activator: string | JSX.Element | JSX.Element[];
  content: string | JSX.Element | JSX.Element[];
}

export const Modal = ({ activator, title, content }: Props) => {
  const { isModalOpen, openModal, closeModal } = useModalContext();

  return (
    <div className={styles.modal}>
      <div onClick={openModal}>{activator}</div>
      {isModalOpen && (
        <Overlay>
          <div className={styles.container}>
            <div className={styles.head}>
              <h3 className={styles.title}>{title}</h3>
              <BtnIcon title="Close" tonal onClick={closeModal}>
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
