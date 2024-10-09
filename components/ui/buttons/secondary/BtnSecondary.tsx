'use client';
import styles from './button.module.scss';

interface Props {
  type?: 'button' | 'submit';
  children: string | JSX.Element | JSX.Element[];
  disabled?: boolean;
  onClick?: () => void;
}

export const BtnSecondary = ({ type, children, disabled, onClick }: Props) => (
  <button
    type={type ? type : 'button'}
    className={styles.button}
    disabled={disabled}
    onClick={onClick}
  >
    {children}
  </button>
);
