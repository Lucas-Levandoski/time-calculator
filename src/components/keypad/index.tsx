import React from 'react';

import './index.css';

export default function Keypad(props: any) {
  return (
    <>
      <tr>
        <td className="keypad-button is-operation" onClick={() => props.addCharacter('+')}>+</td>
        <td className="keypad-button is-number" onClick={() => props.addCharacter('1')}>1</td>
        <td className="keypad-button is-number" onClick={() => props.addCharacter('2')}>2</td>
        <td className="keypad-button is-number" onClick={() => props.addCharacter('3')}>3</td>
        <td className="keypad-button is-operation" onClick={() => props.addCharacter('d')}>d</td>
      </tr>
      <tr>
        <td className="keypad-button is-operation" onClick={() => props.addCharacter('-')}>-</td>
        <td className="keypad-button is-number" onClick={() => props.addCharacter('4')}>4</td>
        <td className="keypad-button is-number" onClick={() => props.addCharacter('5')}>5</td>
        <td className="keypad-button is-number" onClick={() => props.addCharacter('6')}>6</td>
        <td className="keypad-button is-operation" onClick={() => props.addCharacter('h')}>h</td>
      </tr>
      <tr>
        <td className="keypad-button is-operation" onClick={() => props.addCharacter('*')}>*</td>
        <td className="keypad-button is-number" onClick={() => props.addCharacter('7')}>7</td>
        <td className="keypad-button is-number" onClick={() => props.addCharacter('8')}>8</td>
        <td className="keypad-button is-number" onClick={() => props.addCharacter('9')}>9</td>
        <td className="keypad-button is-operation" onClick={() => props.addCharacter('m')}>m</td>
      </tr>
      <tr>
        <td className="keypad-button is-operation" onClick={() => props.addCharacter('/')}>/</td>
        <td className="keypad-button is-operation" onClick={() => props.addCharacter('(')}>(</td>
        <td className="keypad-button is-number" onClick={() => props.addCharacter('0')}>0</td>
        <td className="keypad-button is-operation" onClick={() => props.addCharacter(')')}>)</td>
        <td className="keypad-button is-operation" onClick={() => props.addCharacter('s')}>s</td>
      </tr>
    </>
  );
}
