'use client';
import styles from './button.module.scss';
import { EIconsSet } from '@/typings';
import { SvgHandler } from '@/components/SvgHandler';

interface Props {
  type?: 'button' | 'submit';
  tonal?: boolean;
  icon: EIconsSet;
  disabled?: boolean;
  title: string;
  active?: boolean;
  onClick?: () => void;
}

export const BtnIcon = ({ type, title, icon, tonal, active, disabled, onClick }: Props) => {
  return (
    <button
      type={type ? type : 'button'}
      title={title}
      className={`
        ${styles.button} ${tonal ? styles.btnTonal : styles.btnDef} ${active ? styles.active : ''}
      `}
      disabled={disabled}
      onClick={onClick}
    >
      <SvgHandler icon={icon} />
    </button>
  );
};
