import React from 'react';
import PlayerShip from './PlayerShip';
import '../styles/GameStatus.css';

interface GameStatusProps {
  lives: number;
  credits: number;
}

const GameStatus: React.FC<GameStatusProps> = ({ lives, credits }) => {
  return (
    <div className="game-status">
      <div className="status-line"></div>
      <div className="status-container">
        <div className="lives-counter">
          <span>{lives}</span>
          {Array(lives - 1).fill(null).map((_, index) => (
            <div key={`life-${index}`} className="life-ship">
              <PlayerShip />
            </div>
          ))}
        </div>
        <div className="credits-counter">
          CREDIT {credits.toString().padStart(2, '0')}
        </div>
      </div>
    </div>
  );
};

export default GameStatus;
