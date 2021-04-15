/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { IEquation } from '../../interfaces';

import './index.css';

export default function History(props: any) {
  const equationsHistory: IEquation[] = props.equationHistory;

  return (
    <div className="history-container">
      <table cellSpacing={0} className="history-table">
        <tbody>
          <tr>
            <td>
              {equationsHistory[0]
                ? (
                  <>
                    <p className="equation-box" onClick={() => props.setHistInput(equationsHistory[0].equation)}>{equationsHistory[0].equation}</p>
                    <p className="result-box" onClick={() => props.setHistInput(equationsHistory[0].result)}>{equationsHistory[0].result}</p>
                  </>
                )
                : <></>}
            </td>
          </tr>
          <tr>
            <td>
              {equationsHistory[1]
                ? (
                  <><p className="equation-box" onClick={() => props.setHistInput(equationsHistory[1].equation)}>{equationsHistory[1].equation}</p>
                    <p className="result-box" onClick={() => props.setHistInput(equationsHistory[1].result)}>{equationsHistory[1].result}</p>
                  </>
                )
                : <></>}
            </td>
          </tr>
          <tr>
            <td>
              {equationsHistory[2]
                ? (
                  <><p className="equation-box" onClick={() => props.setHistInput(equationsHistory[2].equation)}>{equationsHistory[2].equation}</p>
                    <p className="result-box" onClick={() => props.setHistInput(equationsHistory[2].result)}>{equationsHistory[2].result}</p>
                  </>
                )
                : <></>}
            </td>
          </tr>
          <tr>
            <td>
              {equationsHistory[3]
                ? (
                  <><p className="equation-box" onClick={() => props.setHistInput(equationsHistory[3].equation)}>{equationsHistory[3].equation}</p>
                    <p className="result-box" onClick={() => props.setHistInput(equationsHistory[3].result)}>{equationsHistory[3].result}</p>
                  </>
                )
                : <></>}
            </td>
          </tr>
          <tr>
            <td>
              {equationsHistory[4]
                ? (
                  <><p className="equation-box" onClick={() => props.setHistInput(equationsHistory[4].equation)}>{equationsHistory[4].equation}</p>
                    <p className="result-box" onClick={() => props.setHistInput(equationsHistory[4].result)}>{equationsHistory[4].result}</p>
                  </>
                )
                : <></>}
            </td>
          </tr>
          <tr>
            <td>
              {equationsHistory[5]
                ? (
                  <><p className="equation-box" onClick={() => props.setHistInput(equationsHistory[5].equation)}>{equationsHistory[5].equation}</p>
                    <p className="result-box" onClick={() => props.setHistInput(equationsHistory[5].result)}>{equationsHistory[5].result}</p>
                  </>
                )
                : <></>}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
