'use client';
import styles from './account.module.scss';
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { useUser } from '@/services';
import { ROUTES } from '@/utils';
import { SvgHandler } from '@/components/SvgHandler';
import { Avatar } from '@/components/ui';
import { EIconsSet } from '@/typings';
import { Logout } from '@/components/Logout';

export const Account = () => {
  const [open, setOpen] = useState(false);
  const { data, isLoading } = useUser();
  const ref = useRef<HTMLDivElement>(null);

  const toggleOpen = () => {
    setOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleOutSideClick = (event: MouseEvent) => {
      if (!ref.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    window.addEventListener('mousedown', handleOutSideClick);
    return () => {
      window.removeEventListener('mousedown', handleOutSideClick);
    };
  }, [ref]);

  return (
    <div ref={ref} className={styles.account}>
      <button
        type="button"
        className={`${styles.btnOpen} ${open ? styles.active : ''}`}
        onClick={toggleOpen}
      >
        <Avatar loading={isLoading} size="m" user={data} />
        {data && <span className={styles.name}>{data.name}</span>}
        <SvgHandler icon={EIconsSet.ChevronDown} />
      </button>
      {open && (
        <ul className={styles.list}>
          <li className={styles.item} onClick={() => setOpen(false)}>
            <Link href={ROUTES.settings} className={styles.action}>
              <SvgHandler icon={EIconsSet.Settings} />
              <span>Profile</span>
            </Link>
          </li>
          <li className={styles.item} onClick={() => setOpen(false)}>
            <Logout>
              <div className={styles.action}>
                <SvgHandler icon={EIconsSet.Logout} />
                <span>Logout</span>
              </div>
            </Logout>
          </li>
        </ul>
      )}
    </div>
  );
};
