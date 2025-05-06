import React from 'react';
import '../styles/Score.css';

const Score: React.FC = () => {
  return (
    <div className="score-container">
      <div className="score-text">
        <div className="text-score">SCORE&lt;1&gt;</div>
        <div className="score-value">0000</div>
      </div>
      <div className="hi-score-text">
        <div className="text-hi-score">HI-SCORE</div>
        <div className="score-value">0000</div>
      </div>
      <div className="score-text">
        <div className="text-score">SCORE&lt;2&gt;</div>
        <div className="score-value">0000</div>
      </div>
    </div>
  );
};

export default Score;
