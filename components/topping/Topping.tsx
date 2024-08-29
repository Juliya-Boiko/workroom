import styles from './topping.module.scss';

interface Props {
  children?: string | JSX.Element | JSX.Element[];
  title: string;
}

export const Topping = ({ title, children }: Props) => {
  return (
    <section className={styles.topping}>
      <h1 className={styles.title}>{title}</h1>
      {children}
    </section>
  );
};
