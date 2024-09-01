'use client';
import styles from './button.module.scss';

interface Props {
  type?: 'button' | 'submit';
  tonal?: boolean;
  children: string | JSX.Element | JSX.Element[];
  disabled?: boolean;
  title: string;
  active?: boolean;
  onClick?: () => void;
}

export const BtnIcon = ({ type, title, children, tonal, active, disabled, onClick }: Props) => {
  return (
    <button
      type={type ? type : 'button'}
      title={title}
      // eslint-disable-next-line max-len
      className={`${styles.button} ${tonal ? styles.btnTonal : styles.btnDef} ${active ? styles.active : ''}`}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
