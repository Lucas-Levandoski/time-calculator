import React from 'react';
import Calculator from '../../components/calculator';

import './index.css';

export default function LandingPage() {
  return (
    <div className="landing-page">
      <div className="calc-frame">
        <Calculator />
      </div>
    </div>
  );
}
