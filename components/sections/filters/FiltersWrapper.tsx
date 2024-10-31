'use client';
import styles from './filtersWrapper.module.scss';
import { useTranslations } from 'next-intl';
import { BtnIcon, Overlay } from '@/components/ui';
import { EIconsSet } from '@/typings';

interface Props {
  open: boolean;
  setOpen: (v: boolean) => void;
  children: JSX.Element | JSX.Element[];
}

export const FiltersWrapper = ({ open, setOpen, children }: Props) => {
  const t = useTranslations('Forms');

  return (
    <>
      <BtnIcon title="Filter" onClick={() => setOpen(true)} icon={EIconsSet.Filter} />
      {open && (
        <Overlay isOpen={open} onClose={() => setOpen(false)}>
          <div className={styles.wrapper}>
            <div className={styles.scrollContent}>
              <div className={styles.head}>
                <h6 className={styles.title}>{t('filters')}</h6>
                <BtnIcon title="Close" onClick={() => setOpen(false)} icon={EIconsSet.Cross} />
              </div>
              {children}
            </div>
          </div>
        </Overlay>
      )}
    </>
  );
};
