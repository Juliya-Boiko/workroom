/* eslint-disable @typescript-eslint/no-explicit-any */
import styles from '../signUp.module.scss';
import { BtnSecondary } from '@/components/ui/buttons/secondary/BtnSecondary';
import { EIconsSet } from '@/enums';
import { SvgHandler } from '@/components/SvgHandler';

interface Props {
  members: (string | undefined)[] | undefined;
  onAdd: () => void;
  onChange: (idx: number, value: string) => void;
}

export const MembersStage = ({ members, onAdd, onChange }: Props) => (
  <div className={styles.stageWrapper}>
    <ul className={styles.membersList}>
      {members &&
        Array.isArray(members) &&
        members.map((item, idx) => (
          <li key={idx} className={styles.memberItem}>
            <span className={styles.label}>Member’s Email</span>
            <input
              type="email"
              placeholder="email@gmail.com"
              className={styles.input}
              onChange={(e) => onChange(idx, e.target.value)}
            />
          </li>
        ))}
    </ul>
    <BtnSecondary onClick={onAdd}>
      <SvgHandler icon={EIconsSet.Plus} />
      <span>Add another Member</span>
    </BtnSecondary>
  </div>
);
