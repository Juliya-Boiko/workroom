import styles from './filtersWrapper.module.scss';
import { BtnIcon, Overlay } from '@/components/ui';
import { EIconsSet } from '@/typings';

interface Props {
  open: boolean;
  setOpen: (v: boolean) => void;
  children: JSX.Element | JSX.Element[];
}

export const FiltersWrapper = ({ open, setOpen, children }: Props) => (
  <>
    <BtnIcon title="Filter" onClick={() => setOpen(true)} icon={EIconsSet.Filter} />
    {open && (
      <Overlay isOpen={open} onClose={() => setOpen(false)}>
        <div className={styles.wrapper}>
          <div className={styles.scrollContent}>
            <div className={styles.head}>
              <h6 className={styles.title}>Filters</h6>
              <BtnIcon title="Close" onClick={() => setOpen(false)} icon={EIconsSet.Cross} />
            </div>
            {children}
          </div>
        </div>
      </Overlay>
    )}
  </>
);
