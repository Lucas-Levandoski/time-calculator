/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useRef } from 'react';
import { FaHistory } from 'react-icons/fa';
import { SecondsToDays, SecondsToHours, SecondsToMinutes } from '../../functions/seconds-to';
import EquationToSeconds from '../../functions/equation-to-seconts';
import ValidateInput from '../../functions/validate-input';
import History, { IEquation } from '../history';

import './index.css';

export default function Calculator() {
  const [calcInput, setCalcInput] = useState('');
  const [resultType, setResultType] = useState('days');
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

  const executeOperations = (operations: string[]) => {
    const hasError = ValidateInput(operations);

    if (!hasError && operations.length > 0) {
      setErrorInput(null);

      const totalSeconds = EquationToSeconds(operations);

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
          result = totalSeconds;
          break;
        default:
      }

      addEquationToHistory(calcInput, result);
      setCalcInput(result);
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
            <span>
              <input type="radio" value="days" name="timeType" /> in Days
            </span>
            <span>
              <input type="radio" value="hours" name="timeType" /> in Hours
            </span>
            <span>
              <input type="radio" value="minutes" name="timeType" /> in Mins
            </span>
            <span>
              <input type="radio" value="seconds" name="timeType" /> in Secs
            </span>
          </div>
          <table className="calc-keyboard">
            <tbody>
              <tr>
                <td className="is-number" onClick={() => addCharacter('1')}>1</td>
                <td className="is-number" onClick={() => addCharacter('2')}>2</td>
                <td className="is-number" onClick={() => addCharacter('3')}>3</td>
                <td className="is-operation" onClick={() => addCharacter('d ')}>d</td>
              </tr>
              <tr>
                <td className="is-number" onClick={() => addCharacter('4')}>4</td>
                <td className="is-number" onClick={() => addCharacter('5')}>5</td>
                <td className="is-number" onClick={() => addCharacter('6')}>6</td>
                <td className="is-operation" onClick={() => addCharacter('h ')}>h</td>
              </tr>
              <tr>
                <td className="is-number" onClick={() => addCharacter('7')}>7</td>
                <td className="is-number" onClick={() => addCharacter('8')}>8</td>
                <td className="is-number" onClick={() => addCharacter('9')}>9</td>
                <td className="is-operation" onClick={() => addCharacter('m ')}>m</td>
              </tr>
              <tr>
                <td className="is-number" onClick={() => addCharacter('0')}>0</td>
                <td className="is-operation" onClick={() => addCharacter('+ ')}>+</td>
                <td className="is-operation" onClick={() => addCharacter('- ')}>-</td>
                <td className="is-operation" onClick={() => addCharacter('s ')}>s</td>
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
        <History equationsHistory={history} />
      </div>
      <span className={`error-popup ${errorInput ? 'should-show-error' : ''}`}>sentence <span className="error-string">{errorInput}</span> is not supported</span>
    </div>
  );
}
