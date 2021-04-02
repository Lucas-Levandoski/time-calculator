import React, { useState } from 'react';
import { SecondsToDays, SecondsToHours, SecondsToMinutes } from '../../functions/seconds-to';
import EquationToSeconds from '../../functions/equation-to-seconts';
import ValidateInput from '../../functions/validate-input';

import './index.css';

export default function Calculator() {
  const [calcInput, setCalcInput] = useState('');
  const [inDays, setInDays] = useState('');
  const [inHours, setInHours] = useState('');
  const [inMinutes, setInMinutes] = useState('');
  const [inSeconds, setInSeconds] = useState('');
  const [errorInput, setErrorInput] = useState(null);

  const executeOperations = (operations: string[]) => {
    const hasError = ValidateInput(operations);

    if (!hasError && operations.length > 0) {
      setErrorInput(null);

      const totalSeconds = EquationToSeconds(operations);

      setInDays(SecondsToDays(totalSeconds));
      setInHours(SecondsToHours(totalSeconds));
      setInMinutes(SecondsToMinutes(totalSeconds));
      setInSeconds(totalSeconds);
    } else {
      setErrorInput(hasError);
    }
  };

  const splitText = (rawInput: string) => {
    const input = rawInput.replaceAll('\n', ' ');
    return input.split(' ').filter((item) => item !== ' ' && item !== '');
  };

  const submitCalcInput = (e: any) => {
    e.preventDefault();

    const splitedText = splitText(calcInput);

    executeOperations(splitedText);
  };

  return (
    <div className="calc-container">
      <p className="example-text">Example: 20d 10h - 10d 50s = 10d 9:59:10</p>
      <form onSubmit={submitCalcInput} className="calc-form">
        <textarea
          className="calc-input"
          value={calcInput}
          onChange={(e) => setCalcInput(e.target.value)}
        />
        <button className="submit-button" type="submit">=</button>
      </form>
      <div className="calc-results">
        <p>in Days - <span className="calc-result">{inDays}</span></p>
        <p>in Hours - <span className="calc-result">{inHours}</span></p>
        <p>in Minutes - <span className="calc-result">{inMinutes}</span></p>
        <p>in Seconds - <span className="calc-result">{inSeconds}</span></p>
      </div>
      <span className={`error-popup ${errorInput ? 'should-show-error' : ''}`}>sentence <span className="error-string">{errorInput}</span> is not supported</span>
    </div>
  );
}
