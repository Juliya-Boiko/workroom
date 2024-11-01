'use client';
import { EIconsSet } from '@/typings';
import styles from './btnBase.module.scss';
import { SvgHandler } from '@/components/SvgHandler';

interface Props {
  title?: string;
  disabled?: boolean;
  icon?: EIconsSet;
  color?: string;
  onClick: () => void;
}

export const BtnBase = ({ title, disabled, icon, color, onClick }: Props) => (
  <button
    title={title || ''}
    type="button"
    className={styles.btnBase}
    style={{ color: color || 'inherit' }}
    disabled={disabled}
    onClick={onClick}
  >
    <SvgHandler icon={icon || EIconsSet.Cross} />
  </button>
);
