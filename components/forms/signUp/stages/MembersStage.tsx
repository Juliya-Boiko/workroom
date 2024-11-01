/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import styles from '../signUp.module.scss';
import { usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { BtnSecondary } from '@/components/ui';
import { EIconsSet } from '@/typings';
import { SvgHandler } from '@/components/SvgHandler';
import { ROUTES } from '@/utils';

interface Props {
  members: (string | undefined)[] | undefined;
  onAdd: () => void;
  onDelete: (idx: number) => void;
  onChange: (idx: number, value: string) => void;
}

export const MembersStage = ({ members, onAdd, onChange, onDelete }: Props) => {
  const t = useTranslations('Forms');
  const pathname = usePathname();

  return (
    <div className={styles.stageWrapper}>
      {pathname === ROUTES.signUp && <p className={styles.text}>{t('later')}</p>}
      <ul className={styles.membersList}>
        {members &&
          Array.isArray(members) &&
          members.map((item, idx) => (
            <li key={idx}>
              <span className={styles.label}>{t('member')}</span>
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
        <span>{t('addMember')}</span>
      </BtnSecondary>
    </div>
  );
};
