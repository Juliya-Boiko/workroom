/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';
import styles from './notifications.module.scss';
import { useState, useEffect, useRef } from 'react';
import { useTranslations } from 'next-intl';
import { useNotifications } from '@/services';
import { formatNotification, getCreatedTimer, NOTIFICATIONS_TAKE_DASHBOARD } from '@/utils';
import { Avatar, BtnIcon, BtnBase, Overlay } from '@/components/ui';
import { EIconsSet } from '@/typings';

export const Notifications = () => {
  const [showList, setShowList] = useState(false);
  const { data: notifications } = useNotifications(NOTIFICATIONS_TAKE_DASHBOARD);
  const ref = useRef<HTMLDivElement>(null);
  const t = useTranslations('Notifications');

  useEffect(() => {
    const handleOutSideClick = (event: MouseEvent) => {
      if (!ref.current?.contains(event.target as Node)) {
        setShowList(false);
      }
    };

    window.addEventListener('mousedown', handleOutSideClick);

    return () => {
      window.removeEventListener('mousedown', handleOutSideClick);
    };
  }, [ref]);

  return (
    <div ref={ref} className={styles.notifications}>
      <BtnIcon title="Notifications" icon={EIconsSet.Bell} onClick={() => setShowList((v) => !v)} />
      {showList && (
        <div className={styles.container}>
          <div className={styles.head}>
            <p className={styles.title}>{t('title')}</p>
            <BtnBase title="Close" icon={EIconsSet.Cross} onClick={() => setShowList(false)} />
          </div>
          <ul className={styles.list}>
            {notifications && !notifications.length ? (
              <li className={styles.placeholder}>{t('placeholder')}</li>
            ) : null}
          </ul>
        </div>
      )}
      {/* {showList && (
        <Overlay isOpen={showList} onClose={() => setShowList(false)}>
          <div className={styles.container}>
            <div className={styles.wrapper}>
              <div className={styles.head}>
                <p className={styles.title}>{t('title')}</p>
                <BtnIcon
                  tonal
                  icon={EIconsSet.Cross}
                  title="Close"
                  onClick={() => setShowList(false)}
                />
              </div>
              <ul className={styles.list}>
                {notifications && notifications.length
                  ? notifications?.map(({ _id, text, user, createdAt }) => (
                      <li key={_id} className={styles.item}>
                        <div>
                          <Avatar size="l" user={user} />
                        </div>
                        <div className={styles.info}>
                          <div>
                            <span className={styles.name}>{user.name}</span>{' '}
                            <span dangerouslySetInnerHTML={{ __html: formatNotification(text) }} />
                          </div>
                          <p className={styles.date}>{getCreatedTimer(createdAt)}</p>
                        </div>
                      </li>
                    ))
                  : null}
                {notifications && !notifications.length ? (
                  <li className={styles.placeholder}>{t('placeholder')}</li>
                ) : null}
              </ul>
            </div>
          </div>
        </Overlay>
      )} */}
    </div>
  );
};
