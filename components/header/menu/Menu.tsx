'use client';
import styles from './menu.module.scss';
import Link from 'next/link';
import { useModalContext } from '@/components/providers/ModalProvider';
import { SvgHandler } from '@/components/SvgHandler';
import { BtnIcon } from '@/components/ui/buttons/icon/BtnIcon';
import { EIconsSet } from '@/enums';
import { Overlay } from '@/components/ui/overlay/Overlay';
import { Logo } from '@/components/logo/Logo';
import { navRoutes } from '@/constants';
import { Company } from '../company/Company';

export const Menu = () => {
  const { isModalOpen, openModal, closeModal } = useModalContext();

  return (
    <div className={styles.menu}>
      <BtnIcon title="Menu" onClick={() => openModal()}>
        <SvgHandler icon={EIconsSet.Burger} />
      </BtnIcon>
      {isModalOpen && (
        <Overlay>
          <div className={styles.container}>
            <div className={styles.head}>
              <Logo colored cropped />
              <button type="button" className={styles.btnClose} onClick={() => closeModal()}>
                <SvgHandler icon={EIconsSet.Cross} />
              </button>
            </div>
            <nav className={styles.nav}>
              {navRoutes.map((route) => (
                <Link
                  key={route.title}
                  href={route.path}
                  className={styles.link}
                  onClick={() => closeModal()}
                >
                  <SvgHandler icon={route.icon} />
                  <span>{route.title}</span>
                </Link>
              ))}
            </nav>
            <div className={styles.company}>
              <Company />
            </div>
          </div>
        </Overlay>
      )}
    </div>
  );
};
