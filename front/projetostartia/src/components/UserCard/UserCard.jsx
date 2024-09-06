import React, { useState } from 'react';
import Modal from './Modal'; 

function UserCard({ nome, idade }) {
  const [showModal, setShowModal] = useState(false);

  const handleVisualizar = () => {
    setShowModal(true);
  };

  return (
    <div>
      <p>Nome: {nome}</p>
      <p>Idade: {idade}</p>
      <button onClick={handleVisualizar}>Visualizar</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          {/* Conteúdo do modal, incluindo o resultado da previsão */}
          <h2>Detalhes de {nome}</h2>
          <p>Vulnerável: {/* Aqui você colocaria o resultado da previsão */}</p>
        </Modal>
      )}
    </div>
  );
}