import styles from './confirm.module.scss';
import { BtnIcon, BtnPrimary, BtnSecondary, Overlay } from '@/components/ui';
import { EIconsSet } from '@/typings';

interface Props {
  text: string;
  onConfirm: () => void;
  onCancel: () => void;
}

export const Confirm = ({ text, onCancel, onConfirm }: Props) => {
  return (
    <Overlay onClose={onCancel}>
      <div className={styles.confirm}>
        <div className={styles.head}>
          <BtnIcon tonal title="Close" onClick={onCancel} icon={EIconsSet.Cross} />
        </div>
        <div className={styles.body}>
          <p className={styles.title}>Confirm deleting</p>
          <p className={styles.text}>{text}</p>
          <div className={styles.actions}>
            <BtnSecondary onClick={onCancel}>Cancel</BtnSecondary>
            <BtnPrimary onClick={onConfirm}>Delete</BtnPrimary>
          </div>
        </div>
      </div>
    </Overlay>
  );
};
