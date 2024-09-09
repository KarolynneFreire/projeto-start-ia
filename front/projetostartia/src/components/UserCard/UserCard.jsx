import React, { useState } from 'react';
import Modal from '../../components/Modal/Modal';
import ChangingProgressProvider from '../../components/Feature/ChangingProgressProvider.js';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import axios from 'axios';
import '../../components/Feature/Feature.css'

function UserCard({ nome, idade }) {
  const [showModal, setShowModal] = useState(false);
  const [resultado, setResultado] = useState(null);
  const [progresso, setProgresso] = useState(0);
  const [isGifActive, setIsGifActive] = useState(true); // Controle do gif

  const handleVisualizar = () => {
    setShowModal(true);
  };

  const preverVulnerabilidade = async () => {
    try {
      const response = await axios.post('/prever/', { nome, idade });
      setResultado(response.data.vulneravel);
    } catch (error) {
      console.error('Erro ao prever vulnerabilidade:', error);
    }
  };

  return (
    <div className="user-card">
      <p>Nome: {nome}</p>
      <p>Idade: {idade}</p>
      <button className='button-real' onClick={handleVisualizar}>Visualizar</button>

      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <h2 className="modal-title">Detalhes de {nome}</h2>
          <div className="modal-content">
            <div className="progress-container">
              <ChangingProgressProvider values={[0, 20, 40, 60, 80, 100]}>
                {percentage => {
                  setProgresso(percentage); 
                  if (percentage === 100) {
                    preverVulnerabilidade();
                    setIsGifActive(false);
                  }
                  return (
                    <CircularProgressbar
                      value={percentage}
                      text={`${percentage}%`}
                      styles={buildStyles({
                        pathTransitionDuration: 0.95,
                        trailColor: "#82ca9d",
                        pathColor: "#210875",
                        textColor: "#210875",
                      })}
                    />
                  );
                }}
              </ChangingProgressProvider>
            </div>
            {resultado !== null && (
              <p>Vulnerável: {resultado ? 'Sim' : 'Não'}</p>
            )}
          </div>
        </Modal>
      )}
    </div>
  );
}

export default UserCard;
