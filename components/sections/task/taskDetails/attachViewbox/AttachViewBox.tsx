'use client';
import styles from './attachViewbox.module.scss';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { formatDayDate, LOCALE_LANGUAGE } from '@/utils';
import { IAttachment } from '@/typings';
import { Overlay } from '@/components/ui';

interface Props {
  item: IAttachment;
}

export const AttachViewBox = ({ item }: Props) => {
  const [showFull, setShowFull] = useState(false);
  const [locale, setLocale] = useState<string | null>(null);

  useEffect(() => {
    const storedLocale = localStorage.getItem(LOCALE_LANGUAGE);
    setLocale(storedLocale);
  }, []);

  return (
    <div onClick={() => setShowFull((v) => !v)}>
      <Image
        priority
        src={item.value}
        alt={item.title}
        width={156}
        height={144}
        className={styles.image}
      />
      <div className={styles.overlay}>
        <p className={styles.fileName}>{item.title}</p>
        <p className={styles.date}>{formatDayDate(item.createdAt, locale)}</p>
      </div>
      {showFull && (
        <Overlay isOpen={showFull} onClose={() => setShowFull(false)}>
          <div className={styles.imageFull}>
            <Image priority src={item.value} alt={item.title} fill />
          </div>
        </Overlay>
      )}
    </div>
  );
};
