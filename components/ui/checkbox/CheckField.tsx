'use client';
import styles from './checkfield.module.scss';
import { SvgHandler } from '@/components/SvgHandler';
import { EIconsSet } from '@/enums';
import { ChangeEvent, useState } from 'react';

export const CheckField = () => {
  const [checked, setChecked] = useState(false);

  const handler = (e: ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked);
  };

  return (
    <label htmlFor="ddd" className={styles.label}>
      <input
        type="checkbox"
        name="ddd"
        id="ddd"
        className={styles.hidden}
        checked={checked}
        onChange={handler}
      />
      {checked && <SvgHandler icon={EIconsSet.Checkbox} />}
    </label>
  );
};
