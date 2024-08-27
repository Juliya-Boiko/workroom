'use client';
import styles from './button.module.scss';

interface Props {
  type?: 'button' | 'submit';
  children: string | JSX.Element | JSX.Element[];
  disabled?: boolean;
  spread?: boolean;
  onClick?: () => void;
}

export const BtnPrimary = ({ type, spread, children, disabled, onClick }: Props) => {
  return (
    <button
      type={type ? type : 'button'}
      className={styles.button}
      disabled={disabled}
      style={{
        width: spread ? '100%' : 'fit-content',
      }}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
