'use client';
import 'react-datetime/css/react-datetime.css';
import styles from './pickerTime.module.scss';
import Datetime from 'react-datetime';
import moment, { Moment } from 'moment';
import { SvgHandler } from '@/components/SvgHandler';
import { EIconsSet } from '@/typings';

interface Props {
  label?: string;
  value: string | undefined;
  onChange: (v: Moment | string) => void;
}

export const PickerTime = ({ label, value, onChange }: Props) => {
  const handleChange = (v: Moment | string) => {
    if (moment.isMoment(v)) {
      onChange(v.format('HH:mm'));
    }
  };

  return (
    <div className={`custom-datetime ${styles.picker}`}>
      <p className={styles.label}>{label || 'Time'}</p>
      <Datetime
        value={value}
        dateFormat={false}
        timeFormat="HH:mm"
        renderInput={(props, openCalendar) => {
          return (
            <button type="button" className={styles.pickBtn} onClick={() => openCalendar()}>
              <span>{value}</span>
              <SvgHandler icon={EIconsSet.ClockOutlined} />
            </button>
          );
        }}
        onChange={(v) => handleChange(v)}
      />
    </div>
  );
};
