import React, { useState } from 'react';
import DatePickerInput from 'react-date-picker';
import TimePickerInput from 'react-time-picker';
import { SecondsToHours } from '../../functions/seconds-to';

import './index.css';

export default function DatePicker(props: any) {
  const [startDate, setStartDate] = useState<Date>(new Date());
  const [endDate, setEndDate] = useState<Date>(new Date());
  const [result, setResult] = useState('');

  const calculateTime = () => {
    const start = startDate.getTime() / 1000;
    const end = endDate.getTime() / 1000;

    setResult(SecondsToHours(end - start));
  };

  const startDateHandle = (date: any) => {
    setStartDate(date);
    calculateTime();
  };

  const startTimeHandle = (time: any) => {
    const newDate = new Date(`${startDate.toJSON().substr(0, 11)}${time}`);
    // newDate.setDate(newDate.getDate() - 1);
    setStartDate(newDate);
    calculateTime();
  };

  const endDateHandle = (date: any) => {
    setEndDate(date);
    calculateTime();
  };

  const endTimeHandle = (time: any) => {
    const newDate = new Date(`${endDate.toISOString().substr(0, 10)} ${time}`);
    // newDate.setDate(newDate.getDate() - 1);
    setEndDate(newDate);
    calculateTime();
  };

  return (
    <tr className="date-time-picker-frame">
      <td colSpan={4}>
        <div className="date-pickers-container">
          <div className="date-picker-container">
            Start
            <div>
              <DatePickerInput value={startDate} onChange={startDateHandle} />
              <TimePickerInput value={startDate} onChange={startTimeHandle} format="HH:mm:ss" disableClock />
            </div>
          </div>
          <div className="date-picker-container">
            End
            <div>
              <DatePickerInput value={endDate} onChange={endDateHandle} />
              <TimePickerInput value={endDate} onChange={endTimeHandle} format="HH:mm:ss" disableClock />
            </div>
          </div>
        </div>
        <div>
          <p>{result}</p>
        </div>
        <div>
          <button type="button">Sum on Calc</button>
          <button type="button">Sub on Calc</button>
        </div>
      </td>
    </tr>
  );
}
