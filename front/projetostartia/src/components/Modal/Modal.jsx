import React from 'react';
import './Modal.css'; 

function Modal({ onClose, children }) {
  return (
    <div className="modal" aria-modal="true" role="dialog">
      <div className="modal-content">
        <button className="close-button" onClick={onClose} aria-label="Fechar">
          &times;
        </button>
        {children} {/* Conteúdo que será exibido no modal */}
      </div>
    </div>
  );
}

export default Modal;
