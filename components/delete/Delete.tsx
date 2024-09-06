import styles from './delete.module.scss';
import { SvgHandler } from '@/components/SvgHandler';
import { EIconsSet } from '@/typings';

interface Props {
  title?: string;
}

export const Delete = ({ title }: Props) => {
  return (
    <div>
      <button title={title} type="button" className={styles.btnDelete}>
        {title && <span>{title}</span>}
        <SvgHandler icon={EIconsSet.Delete} />
      </button>
    </div>
  );
};
