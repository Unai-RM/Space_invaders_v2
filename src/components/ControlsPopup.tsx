import React from 'react';
import '../styles/ControlsPopup.css';

interface ControlsPopupProps {
    onClose: () => void;
}

const ControlsPopup: React.FC<ControlsPopupProps> = ({ onClose }) => {
    return (
        <div className="popup-overlay">
            <div className="popup-content">
                <h2>Controles del Juego</h2>
                <p>Mueve la nave usando:</p>
                <div className="controls-list">
                    <div className="control-item">
                        <span className="key">←</span> o <span className="key">A</span>
                        <span className="description">Mover Izquierda</span>
                    </div>
                    <div className="control-item">
                        <span className="key">→</span> o <span className="key">D</span>
                        <span className="description">Mover Derecha</span>
                    </div>
                </div>
                <button className="close-button" onClick={onClose}>Entendido</button>
            </div>
        </div>
    );
};

export default ControlsPopup;
