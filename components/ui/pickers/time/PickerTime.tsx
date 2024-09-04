'use client';
import 'react-datetime/css/react-datetime.css';
// import styles from './pickerTime.module.scss';
import Datetime from 'react-datetime';
import moment, { Moment } from 'moment';

interface Props {
  value: string;
  onChange: (v: Moment | string) => void;
}

export const PickerTime = ({ value, onChange }: Props) => {
  const handleChange = (v: Moment | string) => {
    if (moment.isMoment(v)) {
      onChange(v.format('HH:mm'));
    }
  };

  return (
    <div className="custom-datetime">
      <p>Time</p>
      <Datetime
        value={value}
        dateFormat={false}
        timeFormat="HH:mm"
        renderInput={(props, openCalendar) => {
          return (
            <button type="button" onClick={() => openCalendar()}>
              button
              {value}
            </button>
          );
        }}
        onChange={(v) => handleChange(v)}
      />
    </div>
  );
};
