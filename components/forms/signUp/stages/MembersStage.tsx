/* eslint-disable @typescript-eslint/no-explicit-any */
import styles from '../signUp.module.scss';
import { BtnSecondary } from '@/components/ui';
import { EIconsSet } from '@/typings';
import { SvgHandler } from '@/components/SvgHandler';

interface Props {
  members: (string | undefined)[] | undefined;
  onAdd: () => void;
  onDelete: (idx: number) => void;
  onChange: (idx: number, value: string) => void;
}

export const MembersStage = ({ members, onAdd, onChange, onDelete }: Props) => (
  <div className={styles.stageWrapper}>
    <ul className={styles.membersList}>
      {members &&
        Array.isArray(members) &&
        members.map((item, idx) => (
          <li key={idx}>
            <span className={styles.label}>Member’s Email</span>
            <div className={styles.memberItem}>
              <input
                type="email"
                placeholder="email@gmail.com"
                className={styles.input}
                onChange={(e) => onChange(idx, e.target.value)}
              />
              {members.length > 1 && (
                <button type="button" className={styles.btnDelete} onClick={() => onDelete(idx)}>
                  <SvgHandler icon={EIconsSet.Cross} />
                </button>
              )}
            </div>
          </li>
        ))}
    </ul>
    <BtnSecondary onClick={onAdd}>
      <SvgHandler icon={EIconsSet.Plus} />
      <span>Add another Member</span>
    </BtnSecondary>
  </div>
);
