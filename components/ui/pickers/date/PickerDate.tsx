'use client';
import 'react-datepicker/dist/react-datepicker.css';
import styles from './picker.module.scss';
import DatePicker from 'react-datepicker';
import { subDays } from 'date-fns';
import { forwardRef } from 'react';
import { SvgHandler } from '@/components/SvgHandler';
import { EIconsSet } from '@/enums';

interface Props {
  expanded?: boolean;
  label: string;
  value: Date | null;
  disabled?: boolean;
  onChange: (v: Date) => void;
}

interface CustomInputProps {
  value?: string;
  onClick?: () => void;
}

const CustomInput = forwardRef<HTMLButtonElement, CustomInputProps>(({ value, onClick }, ref) => (
  <button type="button" className={styles.btnPicker} onClick={onClick} ref={ref}>
    <span>{value || 'Select Date'}</span>
    <SvgHandler icon={EIconsSet.CalendarInput} />
  </button>
));

CustomInput.displayName = 'CustomInput';

export const PickerDate = ({ expanded, label, value, disabled, onChange }: Props) => {
  const handleDateChange = (data: Date | null): void => {
    if (data) {
      onChange(data);
    }
  };

  return (
    <div className={`${styles.picker} ${disabled ? styles.pickerDis : ''}`}>
      <span className={styles.label}>{label}</span>
      <DatePicker
        showMonthDropdown={expanded}
        showYearDropdown={expanded}
        dropdownMode="select"
        yearDropdownItemNumber={15}
        scrollableYearDropdown={expanded}
        disabled={disabled}
        dateFormat="dd/MM/yyyy"
        showPopperArrow={false}
        calendarStartDay={1}
        selected={value}
        minDate={value ? subDays(value, 0) : undefined}
        onChange={handleDateChange}
        customInput={<CustomInput />}
        popperContainer={({ children }) => <div>{children}</div>}
      />
    </div>
  );
};
