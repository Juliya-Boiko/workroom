import styles from './overlay.module.scss';

interface Props {
  children: string | JSX.Element | JSX.Element[];
  onClose: () => void;
}

export const Overlay = ({ children }: Props) => {
  return <div className={styles.overlay}>{children}</div>;
};
