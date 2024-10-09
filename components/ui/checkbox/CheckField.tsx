import styles from './checkfield.module.scss';
import { SvgHandler } from '@/components/SvgHandler';
import { EIconsSet } from '@/typings';

interface Props {
  name: string;
  value: boolean;
  onChange: () => void;
}

export const CheckField = ({ name, value, onChange }: Props) => (
  <label htmlFor={name} className={styles.label}>
    <input
      type="checkbox"
      name={name}
      id={name}
      className={styles.hidden}
      checked={value}
      onChange={onChange}
    />
    {value && <SvgHandler icon={EIconsSet.Checkbox} />}
  </label>
);
