import React, { useState } from 'react';
import { FaHistory } from 'react-icons/fa';
import {
  SecondsToDays, SecondsToHours, SecondsToMinutes, SecondsToSeconds,
} from '../../functions/seconds-to';
import EquationToSeconds from '../../functions/equation-to-seconds';
import ValidateInput from '../../functions/validate-input';
import History, { IEquation } from '../history';

import './index.css';
import Keypad from '../keypad';
import DatePicker from '../date-picker/index';

export default function Calculator() {
  const [calcInput, setCalcInput] = useState('');
  const [resultType, setResultType] = useState('days');
  const [errorInput, setErrorInput] = useState(null);
  const [showHistory, setShowHistory] = useState(false);
  const [history, setHistory] = useState<IEquation[]>([]);
  const [keypadType, setKeypadType] = useState('calc');

  const addEquationToHistory = (equation: string, result: string) => {
    if (history.length === 6) {
      history.splice(0, 1);
      history.push({ equation, result });
    } else {
      history.push({ equation, result });
    }
    setHistory(history);
  };

  const executeOperations = (equation: string) => {
    const hasError = ValidateInput(equation);

    if (!hasError && equation.length > 0) {
      setErrorInput(null);

      const totalSeconds = EquationToSeconds(equation);

      let result = '';

      switch (resultType) {
        case 'days':
          result = SecondsToDays(totalSeconds);
          break;
        case 'hours':
          result = SecondsToHours(totalSeconds);
          break;
        case 'minutes':
          result = SecondsToMinutes(totalSeconds);
          break;
        case 'seconds':
          result = SecondsToSeconds(totalSeconds);
          break;
        default:
      }

      addEquationToHistory(calcInput, result);
      setCalcInput(result);
    } else {
      setErrorInput(hasError);
    }
  };

  const submitCalcInput = (e: any) => {
    e.preventDefault();

    executeOperations(calcInput);
  };

  const addCharacter = (character: string) => {
    setCalcInput(calcInput + character);
  };

  const backspaceCommand = () => {
    setCalcInput(calcInput.substr(0, calcInput.length - 1));
  };

  return (
    <div className="calc-container">
      <div>
        <form onSubmit={submitCalcInput} className="calc-form">
          <textarea
            className="calc-input"
            value={calcInput}
            onChange={(e) => setCalcInput(e.target.value)}
          />
          <div className="result-type-list">
            <span onClick={() => setResultType('days')}>
              <input type="radio" value="days" name="timeType" checked={resultType === 'days'} /> in days
            </span>
            <span onClick={() => setResultType('hours')}>
              <input type="radio" value="hours" name="timeType" checked={resultType === 'hours'} /> in hours
            </span>
            <span onClick={() => setResultType('minutes')}>
              <input type="radio" value="minutes" name="timeType" checked={resultType === 'minutes'} /> in mins
            </span>
            <span onClick={() => setResultType('seconds')}>
              <input type="radio" value="seconds" name="timeType" checked={resultType === 'seconds'} /> in secs
            </span>
          </div>
          <table className="calc-input-board">
            <tbody>
              {
              keypadType === 'calc'
                ? <Keypad addCharacter={(character: string) => addCharacter(character)} />
                : <DatePicker />
                }
              <tr>
                <td className="keypad-button is-command" colSpan={2} onClick={submitCalcInput}>Submit</td>
                <td className="keypad-button is-command" onClick={() => backspaceCommand()}>C</td>
                <td className="keypad-button is-command" onClick={() => setShowHistory(!showHistory)}><FaHistory /></td>
              </tr>
            </tbody>
          </table>
          {/* <div className="nav-bar">
            <button
              type="button"
              className={`nav-button ${keypadType === 'calc' ? 'selected-button' : 'unselected-button'}`}
              onClick={() => setKeypadType('calc')}
            >Calculator
            </button>
            <button
              type="button"
              className={`nav-button ${keypadType === 'dateBetween' ? 'selected-button' : 'unselected-button'}`}
              onClick={() => setKeypadType('dateBetween')}
            >Time in between
            </button>
          </div> */}
        </form>
      </div>
      <div className={`history-frame ${showHistory ? 'should-show-history' : ''}`}>
        <History setHistInput={(selectedHist: string) => setCalcInput(selectedHist)} equationsHistory={history} />
      </div>
      <span
        className={`error-popup ${errorInput ? 'should-show-error' : ''}`}
      >sentence <span className="error-string">{errorInput}</span> is not supported
      </span>
    </div>
  );
}
