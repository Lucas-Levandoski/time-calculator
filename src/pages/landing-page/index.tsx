import React, { useState } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';
import { FiHelpCircle } from 'react-icons/fi';
import HelpPopup from '../../components/help-popup';
import Calculator from '../../components/calculator';
import RelativityTheory from '../../components/relativity-theory';

import './index.css';

export default function LandingPage() {
  const userMode = localStorage.getItem('user-mode');

  const [mode, setMode] = useState(userMode || 'light-mode');
  const [showHelp, setShowHelp] = useState(false);

  const changeMode = () => {
    const nextMode = mode === 'light-mode' ? 'dark-mode' : 'light-mode';
    setMode(nextMode);
    localStorage.setItem('user-mode', nextMode);
  };

  return (
    <div className={mode}>
      <div className="landing-page">
        <button
          className="mode-button"
          type="button"
          onClick={() => changeMode()}
        >
          {mode === 'light-mode'
            ? <FaSun className="light-mode-icon" />
            : <FaMoon className="dark-mode-icon" />}
        </button>
        <button
          className="help-button"
          type="button"
          onClick={() => setShowHelp(!showHelp)}
        >
          <FiHelpCircle className="help-icon" />
        </button>
        <div className="calc-frame">
          <Calculator />
          <HelpPopup shouldShow={showHelp} />
        </div>
        <div className="page-separator" />
        <div className="knowledge-frame">
          <RelativityTheory />
        </div>
      </div>
    </div>
  );
}
