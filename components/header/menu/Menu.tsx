'use client';
import styles from './menu.module.scss';
import Link from 'next/link';
import { useState } from 'react';
import { navRoutes } from '@/utils';
import { SvgHandler } from '@/components/SvgHandler';
import { BtnIcon, Overlay, Logo } from '@/components/ui';
import { EIconsSet } from '@/typings';
import { Company } from '../company/Company';

export const Menu = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div className={styles.menu}>
      <BtnIcon title="Menu" onClick={() => setOpenMenu(true)}>
        <SvgHandler icon={EIconsSet.Burger} />
      </BtnIcon>
      {openMenu && (
        <Overlay onClose={() => setOpenMenu(false)}>
          <div className={styles.container}>
            <div className={styles.head}>
              <Logo colored cropped />
              <button type="button" className={styles.btnClose} onClick={() => setOpenMenu(false)}>
                <SvgHandler icon={EIconsSet.Cross} />
              </button>
            </div>
            <nav className={styles.nav}>
              {navRoutes.map((route) => (
                <Link
                  key={route.title}
                  href={route.path}
                  className={styles.link}
                  onClick={() => setOpenMenu(false)}
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
