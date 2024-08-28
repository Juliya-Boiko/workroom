'use client';
import styles from './account.module.scss';
import Link from 'next/link';
import { SvgHandler } from '@/components/SvgHandler';
import { Avatar } from '@/components/ui/avatar/Avatar';
import { EIconsSet } from '@/enums';
import { useState, useEffect, useRef } from 'react';
import { Logout } from '@/components/Logout';
import { ROUTES } from '@/constants';
import { axiosInstance } from '@/utils/axios';

export const Account = () => {
  const [user, setUser] = useState({ name: ' ', avatar: null });
  const [open, setOpen] = useState(false);
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

  const fetchData = async () => {
    try {
      const response = await axiosInstance.get('/user/info');
      if (response.status === 200) {
        setUser(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div ref={ref} className={styles.account}>
      <button
        type="button"
        className={`${styles.btnOpen} ${open ? styles.active : ''}`}
        onClick={toggleOpen}
      >
        {user.name && <Avatar size="m" avatar={user.avatar} name={user.name} />}
        <span className={styles.name}>{user.name}</span>
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
