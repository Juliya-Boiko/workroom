import { SvgHandler } from '@/components/SvgHandler';
import styles from './uploadAttach.module.scss';
import { EIconsSet } from '@/typings';

export const UploadAttach = () => {
  return (
    <div className={styles.uploadApplications}>
      <button type="button" className={`${styles.btn} ${styles.btnFile}`}>
        <SvgHandler icon={EIconsSet.AttachFile} />
      </button>
      <button type="button" className={`${styles.btn} ${styles.btnLink}`}>
        <SvgHandler icon={EIconsSet.AttachLink} />
      </button>
    </div>
  );
};
