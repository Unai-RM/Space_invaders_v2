import React, { useEffect, useState } from 'react';
import ControlsPopup from './ControlsPopup';
import '../styles/Game.css';
import Squid from './aliens/Squid';
import Crab from './aliens/Crab';
import Octopus from './aliens/Octopus';
import Defense from './Defense';
import PlayerShip from './PlayerShip';
import EnemyShip from './aliens/EnemyShip';
import Score from './Score';
import GameStatus from './GameStatus';

const Game: React.FC = () => {
  const MOVEMENT_SPEED = 15;
  const BOUNDARY_LIMIT = 270;

  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [showControls, setShowControls] = useState(true);

  const movePlayer = (direction: 'left' | 'right') => {
    setPosition(prev => {
      const newX = direction === 'left' 
        ? Math.max(-BOUNDARY_LIMIT, prev.x - MOVEMENT_SPEED)
        : Math.min(BOUNDARY_LIMIT, prev.x + MOVEMENT_SPEED);
      return { ...prev, x: newX };
    });
  };

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      const key = e.key.toLowerCase();
      
      if (key === 'arrowleft' || key === 'a') {
        movePlayer('left');
      } else if (key === 'arrowright' || key === 'd') {
        movePlayer('right');
      } else if (key === ' ') {
        // Implementar disparo
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  return (
    <div className="game-container">
      {showControls && <ControlsPopup onClose={() => setShowControls(false)} />}
      <h1 className="game-title">Space Invaders v2</h1>
      <div className="retro-monitor">
        <div className="monitor-frame">
          <div className="screen-bezel">
            <div className="game-content">
              <div className="game-area">
                <Score />
                <div className="enemy-ship">
                  <EnemyShip />
                </div>
                <div className="aliens-container">
                  <div className="aliens-row aliens-row-1">
                    {Array(11).fill(null).map((_, index) => (
                      <Squid key={`squid-${index}`} />
                    ))}
                  </div>
                  <div className="aliens-row aliens-row-2">
                    {Array(11).fill(null).map((_, index) => (
                      <Crab key={`crab1-${index}`} />
                    ))}
                  </div>
                  <div className="aliens-row aliens-row-3">
                    {Array(11).fill(null).map((_, index) => (
                      <Crab key={`crab2-${index}`} />
                    ))}
                  </div>
                  <div className="aliens-row aliens-row-4">
                    {Array(11).fill(null).map((_, index) => (
                      <Octopus key={`octopus1-${index}`} />
                    ))}
                  </div>
                  <div className="aliens-row aliens-row-5">
                    {Array(11).fill(null).map((_, index) => (
                      <Octopus key={`octopus2-${index}`} />
                    ))}
                  </div>
                </div>
                <div className="defenses-container">
                  {Array(8).fill(null).map((_, index) => (
                    <Defense key={`defense-${index}`} />
                  ))}
                </div>
                <div className="player" style={{ transform: `translate(${position.x}px, ${position.y}px)` }}>
                  <PlayerShip />
                </div>
                <GameStatus lives={3} credits={0} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright">Unai Ricco ©</div>
    </div>
  );
};

export default Game;
