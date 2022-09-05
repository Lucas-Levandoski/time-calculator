import React, { useState } from 'react';
import { FaHistory } from 'react-icons/fa';

import { ReturnTypes, KeypadTypes } from '../../enums/index';

import SecondsTo from '../../functions/seconds-to';
import ValidateInput from '../../functions/validate-input';
import SplitEquation from '../../functions/split-equation';

import { IEquation } from '../../interfaces';

import './index.css';
import History from '../history';
import Keypad from '../keypad';
import DatePicker from '../date-picker/index';

export default function Calculator() {
  const [calcInput, setCalcInput] = useState<string>('');
  const [resultType, setResultType] = useState<ReturnTypes>(ReturnTypes.days);
  const [errorMessage, setErrorMessage] = useState<string>();
  const [showHistory, setShowHistory] = useState<boolean>(false);
  const [keypadType, setKeypadType] = useState<KeypadTypes>(KeypadTypes.calc);
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

  const submitCalcInput = (e: any) => {
    e.preventDefault();

    if (!calcInput) {
      setErrorMessage('you should type something');
      return;
    }

    const splitedEquation = SplitEquation(calcInput);
    const error = ValidateInput(splitedEquation);

    if (error) {
      setErrorMessage(error);
      return;
    }

    setErrorMessage('');

    const result = SecondsTo(splitedEquation, resultType);
    addEquationToHistory(calcInput, result);
    setCalcInput(result);
  };

  const clearCommand = () => {
    setCalcInput('');
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
            <span
              onClick={() => setResultType(ReturnTypes.days)}
              className={resultType === ReturnTypes.days ? 'is-selected-result-type' : 'is-result-type'}
            >
              in days
            </span>
            <span
              onClick={() => setResultType(ReturnTypes.hours)}
              className={resultType === ReturnTypes.hours ? 'is-selected-result-type' : 'is-result-type'}
            >
              in hours
            </span>
            <span
              onClick={() => setResultType(ReturnTypes.minutes)}
              className={resultType === ReturnTypes.minutes ? 'is-selected-result-type' : 'is-result-type'}
            >
              in mins
            </span>
            <span
              onClick={() => setResultType(ReturnTypes.seconds)}
              className={resultType === ReturnTypes.seconds ? 'is-selected-result-type' : 'is-result-type'}
            >
              in secs
            </span>
          </div>
          <table className="calc-input-board">
            <tbody>
              {
              keypadType === 'calc'
                ? <Keypad addCharacter={(character: string) => setCalcInput(calcInput + character)} />
                : <DatePicker />
                }
              <tr>
                <td className="keypad-button is-command" colSpan={2} onClick={submitCalcInput}>Submit</td>
                <td className="keypad-button is-command" onClick={() => clearCommand()}>C</td>
                <td className="keypad-button is-command" onClick={() => setShowHistory(!showHistory)}><FaHistory /></td>
              </tr>
            </tbody>
          </table>
          {/* <div className="nav-bar">
            <button
              type="button"
              className={`nav-button ${keypadType === KeypadTypes.calc ? 'selected-button' : 'unselected-button'}`}
              onClick={() => setKeypadType(KeypadTypes.calc)}
            >Calculator
            </button>
            <button
              type="button"
              className={`nav-button ${keypadType === KeypadTypes.timeInBetween ? 'selected-button' : 'unselected-button'}`}
              onClick={() => setKeypadType(KeypadTypes.timeInBetween)}
            >Time in between
            </button>
          </div> */}
        </form>
      </div>
      <div className={`history-frame ${showHistory ? 'should-show-history' : ''}`}>
        <History setHistInput={(selectedHist: string) => setCalcInput(selectedHist)} equationHistory={history} />
      </div>
      <span
        className={`error-popup ${errorMessage ? 'should-show-error' : ''}`}
      >{errorMessage}
      </span>
    </div>
  );
}
