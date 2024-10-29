'use client';
import styles from './menu.module.scss';
import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { navRoutes } from '@/utils';
import { SvgHandler } from '@/components/SvgHandler';
import { BtnIcon, Overlay, Logo, BtnBase } from '@/components/ui';
import { EIconsSet } from '@/typings';

export const Menu = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const pathname = usePathname();

  return (
    <div className={styles.menu}>
      <BtnIcon title="Menu" onClick={() => setOpenMenu(true)} icon={EIconsSet.Burger} />
      {openMenu && (
        <Overlay isOpen={openMenu} onClose={() => setOpenMenu(false)}>
          <div className={styles.container}>
            <div className={styles.head}>
              <Logo colored cropped />
              <BtnBase color="#7D8592" onClick={() => setOpenMenu(false)} />
            </div>
            <nav className={styles.nav}>
              {navRoutes.map(({ title, path, icon }) => (
                <Link
                  key={title}
                  href={path}
                  className={`${styles.link} ${pathname === path ? styles.active : ''}`}
                  onClick={() => setOpenMenu(false)}
                >
                  <SvgHandler icon={icon} />
                  <span>{title}</span>
                </Link>
              ))}
            </nav>
          </div>
        </Overlay>
      )}
    </div>
  );
};
