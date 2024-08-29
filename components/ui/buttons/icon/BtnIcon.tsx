'use client';
import styles from './button.module.scss';

interface Props {
  type?: 'button' | 'submit';
  tonal?: boolean;
  children: string | JSX.Element | JSX.Element[];
  disabled?: boolean;
  title: string;
  onClick?: () => void;
}

export const BtnIcon = ({ type, title, children, tonal, disabled, onClick }: Props) => {
  return (
    <button
      type={type ? type : 'button'}
      title={title}
      className={`${styles.button} ${tonal ? styles.btnTonal : styles.btnDef}`}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
