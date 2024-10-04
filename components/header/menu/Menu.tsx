'use client';
import styles from './menu.module.scss';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { navRoutes } from '@/utils';
import { SvgHandler } from '@/components/SvgHandler';
import { BtnIcon, Overlay, Logo, BtnBase } from '@/components/ui';
import { EIconsSet } from '@/typings';
import { useCompany } from '@/services';

export const Menu = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const { data: company } = useCompany();
  const pathname = usePathname();

  useEffect(() => {
    const body = document.body;
    if (openMenu) {
      body.style.height = '100vh';
      body.style.overflowY = 'hidden';
    } else {
      body.style.height = '';
      body.style.overflowY = '';
    }
  }, [openMenu]);

  return (
    <div className={styles.menu}>
      <BtnIcon title="Menu" onClick={() => setOpenMenu(true)} icon={EIconsSet.Burger} />
      {openMenu && (
        <Overlay onClose={() => setOpenMenu(false)}>
          <div className={styles.container}>
            <div className={styles.head}>
              <Logo colored cropped />
              <p className={styles.company}>{company?.name}</p>
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
