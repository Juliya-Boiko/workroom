'use client';
import styles from './sidebat.module.scss';
import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { navRoutes } from '@/utils';
import { Logo } from '../logo/Logo';
import { SvgHandler } from '../SvgHandler';
import { Logout } from '../Logout';
import { EIconsSet } from '@/typings';

export const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const pathname = usePathname();

  const toggleOpen = () => {
    setOpen((prev) => !prev);
  };

  return (
    <aside className={styles.sidebar} style={{ width: open ? '200px' : 'auto' }}>
      <div className={styles.top}>
        <button
          type="button"
          className={styles.toggleBtn}
          style={{ transform: open ? 'rotate(0)' : 'rotate(180deg)' }}
          title="Toggle sidebar"
          onClick={toggleOpen}
        >
          <SvgHandler icon={EIconsSet.ArrowRight} />
        </button>
        <Logo colored cropped />
        <nav className={styles.nav}>
          {navRoutes.map(({ title, path, icon }) => (
            <Link
              key={title}
              href={path}
              title={title}
              className={`${styles.link} ${pathname === path ? styles.active : ''}`}
            >
              <SvgHandler icon={icon} />
              {open && <span>{title}</span>}
            </Link>
          ))}
        </nav>
      </div>

      <div className={styles.bottom}>
        <Logout>
          <div className={styles.logout}>
            <SvgHandler icon={EIconsSet.Logout} />
            {open && <span>Logout</span>}
          </div>
        </Logout>
      </div>
    </aside>
  );
};
