'use client';
import styles from './pickerPeriod.module.scss';
import { useState, useRef, useEffect } from 'react';
import { PickerDate } from '../date/PickerDate';
import { EIconsSet } from '@/typings';
import { SvgHandler } from '@/components/SvgHandler';

interface Props {
  startValue: Date | null;
  endValue: Date | null;
  onStart: (v: Date | null) => void;
  onEnd: (v: Date | null) => void;
}

export const PickerPeriod = ({ startValue, endValue, onEnd, onStart }: Props) => {
  const [open, setOpen] = useState(false);
  const [start, setStart] = useState<Date | null>(startValue);
  const [end, setEnd] = useState<Date | null>(endValue);
  const ref = useRef<HTMLDivElement>(null);

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

  const handleStart = (v: Date | null) => {
    setStart(v);
    onStart(v);
  };

  const handleEnd = (v: Date | null) => {
    setEnd(v);
    onEnd(v);
  };

  const handleDeleteStart = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setStart(null);
    onStart(null);
  };

  const handleDeleteEnd = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setEnd(null);
    onEnd(null);
  };

  return (
    <div ref={ref} className={styles.pickerPeriod}>
      <div
        className={`${styles.toggleBtn} ${open ? styles.open : ''}`}
        onClick={() => setOpen((v) => !v)}
      >
        <div className={styles.wrapper}>
          <span className={styles.date}>{start?.toLocaleDateString()}</span>
          {start && (
            <button type="button" className={styles.deleteBtn} onClick={handleDeleteStart}>
              <SvgHandler icon={EIconsSet.CrossRound} />
            </button>
          )}
        </div>
        {'-'}
        <div className={styles.wrapper}>
          <span className={styles.date}>{end?.toLocaleDateString()}</span>
          {end && (
            <button type="button" className={styles.deleteBtn} onClick={handleDeleteEnd}>
              <SvgHandler icon={EIconsSet.CrossRound} />
            </button>
          )}
        </div>
      </div>
      {open && (
        <div className={styles.drop}>
          <PickerDate label="Start" value={start} onChange={handleStart} />
          <PickerDate label="End" value={end} onChange={handleEnd} />
        </div>
      )}
    </div>
  );
};
