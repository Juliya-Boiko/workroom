import styles from './toggle.module.scss';

interface Props {
  name: string;
  value: boolean;
  onChange: (v: boolean) => void;
}
export const Toggle = ({ name, value, onChange }: Props) => {
  return (
    <label htmlFor={name} className={styles.toggle}>
      <input
        type="checkbox"
        name={name}
        id={name}
        checked={value}
        className={styles.input}
        onChange={(e) => onChange(e.target.checked)}
      />
      <div className={styles.wrapper}>
        <div className={styles.round}></div>
      </div>
    </label>
  );
};
