'use client';
import styles from './menu.module.scss';
import { SvgHandler } from '@/components/SvgHandler';
import { BtnIcon } from '@/components/ui/buttons/icon/BtnIcon';
import { EIconsSet } from '@/enums';
import { useState } from 'react';
import { Overlay } from '@/components/ui/overlay/Overlay';
import { Logo } from '@/components/logo/Logo';
import { navRoutes } from '@/constants';
import Link from 'next/link';
import { Company } from '../company/Company';

export const Menu = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.menu}>
      <BtnIcon title="Menu" onClick={() => setOpen(true)}>
        <SvgHandler icon={EIconsSet.Burger} />
      </BtnIcon>
      {open && (
        <Overlay onClose={() => setOpen(false)}>
          <div className={styles.container}>
            <div className={styles.head}>
              <Logo colored cropped />
              <button type="button" className={styles.btnClose} onClick={() => setOpen(false)}>
                <SvgHandler icon={EIconsSet.Cross} />
              </button>
            </div>
            <nav className={styles.nav}>
              {navRoutes.map((route) => (
                <Link
                  key={route.title}
                  href={route.path}
                  className={styles.link}
                  onClick={() => setOpen(false)}
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
