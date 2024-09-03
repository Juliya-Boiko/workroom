'use client';
import 'react-datetime/css/react-datetime.css';
// import styles from './pickerTime.module.scss';
import Datetime from 'react-datetime';
import { Moment } from 'moment';

interface Props {
  value: Date;
  onChange: (v: Date) => void;
}

export const PickerTime = ({ onChange }: Props) => {

  const handleChange = (v: Moment | Date) => {
    if (v as Moment) {
      console.log(v);
      // onChange((v as Moment)._d);
    }
    // Check if v is a Moment object and has _d, or if it's a plain Date
    // if ((v as Moment)._d) {
    //   onChange((v as Moment)._d);
    // } else {
    //   onChange(v as Date);
    // }
  };

  return (
    <div className="custom-datetime">
      <p>Time</p>
      <Datetime
        dateFormat={false}
        timeFormat="HH:mm"
        renderInput={(openCalendar) => {
          return (
            <button type="button" onClick={() => openCalendar()}>
              Select Time
            </button>
          ); // Replace input with a button
        }}
        onChange={handleChange}
      />
    </div>
  );
};
