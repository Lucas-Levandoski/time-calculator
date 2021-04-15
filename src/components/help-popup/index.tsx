/* eslint-disable react/no-unescaped-entities */
/* eslint-disable max-len */
import React from 'react';

import './index.css';

export default function HelpPopup(props: any) {
  const { shouldShow } = props;

  return (
    <div className={`help-popup-container ${shouldShow ? 'show-help' : 'hide-help'}`}>
      <div className="help-content">
        <h1>How to use it</h1>
        <h3>Intro</h3>
        <p>This calculator was crated to <strong>Calculate Time</strong> and look like any other normal calculator, basically make your life easier.</p>
        <h3>Examples</h3>
        <p>125h10s - 2d11h10m = 2d17h50m10s</p>
        <p>43h * 2 = 3d14h0m0s</p>
        <p>3d10h + (75h42m/2) = 4d23h51m0s</p>
        <h3>Explanation</h3>
        <p>every number is seconds based, using a number without decoration like *2 is the same as *2s, so if you use 10h*10m is the same as 10h*600s or 10*600</p>
      </div>
    </div>
  );
}
