import React, { useState } from 'react';

import './index.css';

export interface IEquation {
  equation: string;
  result: string;
}

export default function History(props: any) {
  const { equationsHistory } = props;

  return (
    <div className="history-container">
      <table cellSpacing={0} className="history-table">
        <tbody>
          <tr>
            <td>
              {equationsHistory[0]
                ? (
                  <>
                    <p className="equation-box">{equationsHistory[0].equation}</p>
                    <p className="result-box">{equationsHistory[0].result}</p>
                  </>
                )
                : <></>}
            </td>
          </tr>
          <tr>
            <td>
              {equationsHistory[1]
                ? (
                  <><p className="equation-box">{equationsHistory[1].equation}</p>
                    <p className="result-box">{equationsHistory[1].result}</p>
                  </>
                )
                : <></>}
            </td>
          </tr>
          <tr>
            <td>
              {equationsHistory[2]
                ? (
                  <><p className="equation-box">{equationsHistory[2].equation}</p>
                    <p className="result-box">{equationsHistory[2].result}</p>
                  </>
                )
                : <></>}
            </td>
          </tr>
          <tr>
            <td>
              {equationsHistory[3]
                ? (
                  <><p className="equation-box">{equationsHistory[3].equation}</p>
                    <p className="result-box">{equationsHistory[3].result}</p>
                  </>
                )
                : <></>}
            </td>
          </tr>
          <tr>
            <td>
              {equationsHistory[4]
                ? (
                  <><p className="equation-box">{equationsHistory[4].equation}</p>
                    <p className="result-box">{equationsHistory[4].result}</p>
                  </>
                )
                : <></>}
            </td>
          </tr>
          <tr>
            <td>
              {equationsHistory[5]
                ? (
                  <><p className="equation-box">{equationsHistory[5].equation}</p>
                    <p className="result-box">{equationsHistory[5].result}</p>
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
