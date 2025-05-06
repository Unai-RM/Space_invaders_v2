import React from 'react';

interface Squid {
  position?: { x: number; y: number };
}

const Squid: React.FC<Squid> = ({ position = { x: 0, y: 0 } }) => {
  return (
    <div className="squid-container" style={{ transform: `translate(${position.x}px, ${position.y}px)` }}>
      <div className="item1"></div>
      <div className="item2"></div>
      <div className="item3"></div>
      <div className="item4"></div>
      <div className="item5"></div>
      <div className="item6"></div>
      <div className="item7"></div>
      <div className="item8"></div>
      <div className="item9"></div>
      <div className="item10"></div>
      <div className="item11"></div>
      <div className="item12"></div>
      <div className="item13"></div>
      <div className="item14"></div>
      <div className="item15"></div>
    </div>
  );
};

export default Squid;
