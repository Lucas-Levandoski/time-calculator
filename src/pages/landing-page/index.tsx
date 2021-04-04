import React, { useState } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';
import Calculator from '../../components/calculator';

import './index.css';

export default function LandingPage() {
  const userMode = localStorage.getItem('user-mode');

  const [mode, setMode] = useState(userMode || 'light-mode');

  const changeMode = () => {
    const nextMode = mode === 'light-mode' ? 'dark-mode' : 'light-mode';
    setMode(nextMode);
    localStorage.setItem('user-mode', nextMode);
  };

  return (
    <div className={mode}>
      <div className="landing-page">
        <div className="calc-frame">
          <Calculator />
          <button
            className="mode-button"
            type="button"
            onClick={() => changeMode()}
          >
            {mode === 'light-mode'
              ? <FaSun className="light-mode-icon" />
              : <FaMoon className="dark-mode-icon" />}
          </button>
        </div>
      </div>
    </div>
  );
}
