import React, { useState } from 'react';
import axios from 'axios';

const PreverVulnerabilidade = ({ dadosUsuario }) => {
  const [resultado, setResultado] = useState(null);
  const [erro, setErro] = useState(null);

  const preverVulnerabilidade = async () => {
    try {
      const response = await axios.post('http://localhost:8000/prever/', dadosUsuario);
      setResultado(response.data.vulneravel);
    } catch (error) {
      setErro('Ocorreu um erro ao processar sua solicitação.');
      console.error(error);
    }
  };

  return (
    <div>
      <button className='button-real' onClick={preverVulnerabilidade}>Prever Vulnerabilidade</button>
      {erro && <p className="error">{erro}</p>}
      {resultado !== null && (
        <p>Vulnerável: {resultado ? 'Sim' : 'Não'}</p>
      )}
    </div>
  );
};

export default PreverVulnerabilidade;


export default PreverVulnerabilidade;
