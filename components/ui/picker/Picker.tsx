'use client';
import 'react-datepicker/dist/react-datepicker.css';
import styles from './picker.module.scss';
import DatePicker from 'react-datepicker';
import { subDays } from 'date-fns';
import { forwardRef } from 'react';
import { SvgHandler } from '@/components/SvgHandler';
import { EIconsSet } from '@/enums';

interface Props {
  label: string;
  value: Date;
  onChange: (v: Date) => void;
}

interface CustomInputProps {
  value?: string;
  onClick?: () => void;
}

const CustomInput = forwardRef<HTMLButtonElement, CustomInputProps>(({ value, onClick }, ref) => (
  <button className={styles.btnPicker} onClick={onClick} ref={ref}>
    <span>{value || 'Select Date'}</span>
    <SvgHandler icon={EIconsSet.CalendarInput} />
  </button>
));

CustomInput.displayName = 'CustomInput';

export const Picker = ({ label, value, onChange }: Props) => {
  const handleDateChange = (data: Date | null) => {
    if (data) {
      onChange(data);
    }
  };

  return (
    <div className={styles.picker}>
      <span className={styles.label}>{label}</span>
      <DatePicker
        dateFormat="dd/MM/yyyy"
        showPopperArrow={false}
        calendarStartDay={1}
        selected={value}
        minDate={subDays(value, 0)}
        onChange={handleDateChange}
        customInput={<CustomInput />}
      />
    </div>
  );
};
