'use client';
import styles from './pagination.module.scss';
import { useTranslations } from 'next-intl';
import { SvgHandler } from '@/components/SvgHandler';
import { EIconsSet } from '@/typings';

interface Props {
  page: number;
  step: number;
  total: number;
  onNext: () => void;
  onPrev: () => void;
}

export const Pagination = ({ page, step, total, onNext, onPrev }: Props) => {
  const t = useTranslations('Common');

  const start = page * step + 1;
  const counter = (page + 1) * step;
  const end = counter > total ? total : counter;

  return (
    <div className={styles.pagination}>
      <div className={styles.wrapper}>
        <div>
          {start}-{end} {t('of')} {total}
        </div>
        <button type="button" disabled={!page} className={styles.btnArrow} onClick={onPrev}>
          <SvgHandler icon={EIconsSet.ArrowLeft} />
        </button>
        <button type="button" disabled={end >= total} className={styles.btnArrow} onClick={onNext}>
          <SvgHandler icon={EIconsSet.ArrowRight} />
        </button>
      </div>
    </div>
  );
};
