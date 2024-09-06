import React, { useState } from 'react';
import Modal from './Modal';
import PreverVulnerabilidade from './PreverVulnerabilidade';
import {CircularProgressbar,  buildStyles} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import ChangingProgressProvider from './ChangingProgressProvider'

function UserCard({ nome, idade }) {
  const [showModal, setShowModal] = useState(false);
  const [resultadoPrevisao, setResultadoPrevisao] = useState(null); 

  const handleVisualizar = async () => {
    setShowModal(true);

    const resultado = await preverVulnerabilidade(nome, idade); 
    setResultadoPrevisao(resultado);
  };


    return (
        <div className="user-card">
          {/* ... */}
          {showModal && (
            <Modal onClose={() => setShowModal(false)}>
              <h2 className="modal-title">Detalhes de {nome}</h2>
              <div className="modal-content">
                <ChangingProgressProvider values={[0, 20, 40, 60, 80, 100]}>
                  {percentage => (
                    <CircularProgressbar
                      value={percentage}
                      text={`${percentage}%`}
                      styles={buildStyles({
                        pathTransitionDuration: 0.95,   
    
                        trailColor: "#82ca9d",
                        pathColor:   
     "#210875",
                        textColor: "#210875"
                      })}
                    />
                  )}
                </ChangingProgressProvider>
                <PreverVulnerabilidade dadosUsuario={{ nome, idade }} />
                {resultadoPrevisao !== null && (
                  <p>Vulnerável: {resultadoPrevisao ? 'Sim' : 'Não'}</p>
                )}
              </div>
            </Modal>
          )}
        </div>
      );
    }


// Componente Modal
function Modal({ onClose, children }) {
  return (
    <div className="modal" aria-modal="true" role="dialog">
      <div className="modal-content">
        <button className="close" onClick={onClose} aria-label="Fechar">
          &times;
        </button>
        {children}
      </div>
    </div>
  );
}