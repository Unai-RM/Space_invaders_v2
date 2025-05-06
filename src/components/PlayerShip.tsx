import React from 'react';
import '../styles/Aliens.css';

const PlayerShip: React.FC = () => {
  return (
    <div className="player-ship-container">
      <div className="player-item-1"></div>
      <div className="player-item-2"></div>
      <div className="player-item-3"></div>
      <div className="player-item-4"></div>
    </div>
  );
};

export default PlayerShip;
