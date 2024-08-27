import styles from './button.module.scss';

interface Props {
  type?: 'button' | 'submit';
  tonal?: boolean;
  children: string | JSX.Element | JSX.Element[];
  disabled?: boolean;
}

export const BtnIcon = ({ type, children, tonal, disabled }: Props) => {
  return (
    <button
      type={type ? type : 'button'}
      className={`${styles.button} ${tonal ? styles.btnTonal : styles.btnDef}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
