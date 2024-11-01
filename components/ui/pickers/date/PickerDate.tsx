'use client';
import 'react-datepicker/dist/react-datepicker.css';
import styles from './picker.module.scss';
import DatePicker from 'react-datepicker';
import { subDays } from 'date-fns';
import { forwardRef } from 'react';
import { useState, useEffect } from 'react';
import { registerLocale } from 'react-datepicker';
import { enGB } from 'date-fns/locale/en-GB';
import { uk } from 'date-fns/locale/uk';
import { useTranslations } from 'next-intl';
import { SvgHandler } from '@/components/SvgHandler';
import { EIconsSet, ELanguage } from '@/typings';
import { LOCALE_LANGUAGE } from '@/utils';

interface Props {
  expanded?: boolean;
  label: string;
  value: Date | null;
  disabled?: boolean;
  minDate?: Date | string | null;
  maxDate?: Date | string | null;
  onChange: (v: Date) => void;
}

interface CustomInputProps {
  value?: string;
  onClick?: () => void;
}

const CustomInput = forwardRef<HTMLButtonElement, CustomInputProps>(({ value, onClick }, ref) => {
  const t = useTranslations('Forms');

  return (
    <button type="button" className={styles.btnPicker} onClick={onClick} ref={ref}>
      <p>{value || <span className={styles.placeholder}>{t('selectDate')}</span>}</p>
      <SvgHandler icon={EIconsSet.CalendarInput} />
    </button>
  );
});

CustomInput.displayName = 'CustomInput';

export const PickerDate = ({
  expanded,
  label,
  value,
  minDate,
  maxDate,
  disabled,
  onChange,
}: Props) => {
  const [currentLocale, setCurrentLocale] = useState(enGB);

  useEffect(() => {
    const locale = localStorage.getItem(LOCALE_LANGUAGE) || 'en';
    if (locale === ELanguage.UK) {
      registerLocale('uk', uk);
      setCurrentLocale(uk);
    } else {
      registerLocale('en', enGB);
      setCurrentLocale(enGB);
    }
  }, []);

  const handleDateChange = (data: Date | null): void => {
    if (data) {
      onChange(data);
    }
  };

  return (
    <div className={`${styles.picker} ${disabled ? styles.pickerDis : ''}`}>
      <span className={styles.label}>{label}</span>
      <DatePicker
        locale={currentLocale}
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
        minDate={minDate ? subDays(minDate, 0) : undefined}
        maxDate={maxDate ? subDays(maxDate, 0) : undefined}
        onChange={handleDateChange}
        customInput={<CustomInput />}
        popperContainer={({ children }) => <div>{children}</div>}
      />
    </div>
  );
};
