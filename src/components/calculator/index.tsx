import React, { useState } from 'react';
import { FaHistory } from 'react-icons/fa';
import {
  SecondsToDays, SecondsToHours, SecondsToMinutes, SecondsToSeconds,
} from '../../functions/seconds-to';
import EquationToSeconds, { EquationToSeconds2 } from '../../functions/equation-to-seconds';
import ValidateInput from '../../functions/validate-input';
import History, { IEquation } from '../history';

import './index.css';

export default function Calculator() {
  const [calcInput, setCalcInput] = useState('');
  const [resultType, setResultType] = useState('hours');
  const [errorInput, setErrorInput] = useState(null);
  const [showHistory, setShowHistory] = useState(false);
  const [history, setHistory] = useState<IEquation[]>([]);

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
          <table className="calc-keyboard">
            <tbody>
              <tr>
                <td className="is-number" onClick={() => addCharacter('1')}>1</td>
                <td className="is-number" onClick={() => addCharacter('2')}>2</td>
                <td className="is-number" onClick={() => addCharacter('3')}>3</td>
                <td className="is-operation" onClick={() => addCharacter('d')}>d</td>
              </tr>
              <tr>
                <td className="is-number" onClick={() => addCharacter('4')}>4</td>
                <td className="is-number" onClick={() => addCharacter('5')}>5</td>
                <td className="is-number" onClick={() => addCharacter('6')}>6</td>
                <td className="is-operation" onClick={() => addCharacter('h')}>h</td>
              </tr>
              <tr>
                <td className="is-number" onClick={() => addCharacter('7')}>7</td>
                <td className="is-number" onClick={() => addCharacter('8')}>8</td>
                <td className="is-number" onClick={() => addCharacter('9')}>9</td>
                <td className="is-operation" onClick={() => addCharacter('m')}>m</td>
              </tr>
              <tr>
                <td className="is-operation" onClick={() => addCharacter('+')}>+</td>
                <td className="is-number" onClick={() => addCharacter('0')}>0</td>
                <td className="is-operation" onClick={() => addCharacter('-')}>-</td>
                <td className="is-operation" onClick={() => addCharacter('s')}>s</td>
              </tr>
              <tr>
                <td className="is-operation" onClick={() => addCharacter('*')}>*</td>
                <td className="is-operation" onClick={() => addCharacter('/')}>/</td>
                <td className="is-operation" onClick={() => addCharacter('(')}>(</td>
                <td className="is-operation" onClick={() => addCharacter(')')}>)</td>
              </tr>
              <tr>
                <td className="is-command" colSpan={3} onClick={submitCalcInput}>Submit</td>
                <td className="is-command" onClick={() => setShowHistory(!showHistory)}><FaHistory /></td>
              </tr>
            </tbody>
          </table>
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
