import React, { useState } from 'react';
import axios from 'axios';

const PreverVulnerabilidade = () => {
  const [dadosUsuario, setDadosUsuario] = useState({
    nome: '',
    idade: '',
    renda: '',
    // Adicione outros campos conforme necessário
  });
  const [resultado, setResultado] = useState(null);
  const [erro, setErro] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErro(null); 
    try {
      if (!dadosUsuario.nome || !dadosUsuario.idade || !dadosUsuario.renda) {
        setErro('Por favor, preencha todos os campos.');
        return;
      }

      const response = await axios.post('http://seu-servidor/prever/', dadosUsuario);
      setResultado(response.data);
    } catch (error) {
      setErro('Ocorreu um erro ao processar sua solicitação.');
      console.error(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {/* Campos do formulário */}
        <input
          type="text"
          name="nome"
          value={dadosUsuario.nome}
          onChange={(e) => setDadosUsuario({ ...dadosUsuario, nome: e.target.value })}
        />
        {/* Outros campos... */}
        <button type="submit">Prever</button>
      </form>

      {erro && <p className="error">{erro}</p>}
      {resultado && (
        <div>
          Resultado: {resultado.vulneravel ? 'Vulnerável' : 'Não vulnerável'}
        </div>
      )}
    </div>
  );
};

export default PreverVulnerabilidade;