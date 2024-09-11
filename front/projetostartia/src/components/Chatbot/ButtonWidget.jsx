import React from 'react';
import axios from 'axios'; // Axios for API requests

const ButtonWidget = (props) => {

  // Options for the buttons with corresponding decision logic
  const options = [
    { text: 'Vulnerável', handler: () => handleVulnerableOption(), id: 1 },
    { text: 'Cadastrar', handler: () => handleRegisterOption(), id: 2 },
    { text: 'Perguntas Frequentes', handler: () => handleFaqOption(), id: 3 },
  ];

  // Function to handle the "Vulnerável" option with Axios for API call
  const handleVulnerableOption = () => {
    axios.get('http://127.0.0.1:8000/v1/api/usuarios/?skip=0&limit=100')
      .then(response => {
        const data = response.data;
        const message = `API chamada com sucesso. Usuários recebidos: ${data.length}`;
        props.actionProvider.createChatBotMessage(message);
      })
      .catch(error => {
        console.error('Erro ao chamar a API:', error);
        props.actionProvider.createChatBotMessage('Houve um erro ao chamar a API.');
      });
  };

  // Function to handle the "Cadastrar" option, guiding to the registration page
  const handleRegisterOption = () => {
    const registerUrl = 'https://seusite.com/cadastro'; // Replace with your actual registration page URL
    window.location.href = registerUrl;
  };

  // Function to handle the "Perguntas Frequentes" option
  const handleFaqOption = () => {
    const faqTemplate = [
      { question: "O que é vulnerabilidade?", answer: "Vulnerabilidade se refere a uma condição de risco elevado." },
      { question: "Como posso me cadastrar?", answer: "Você pode se cadastrar acessando a página de cadastro." },
      { question: "Quem tem direito?", answer: "Qualquer pessoa em situação de vulnerabilidade social." },
    ];
    
    faqTemplate.forEach(item => {
      const message = `${item.question} - ${item.answer}`;
      props.actionProvider.createChatBotMessage(message);
    });
  };

  // Render buttons with their styles and handlers
  return (
    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', marginTop: '10px' }}>
      {options.map((option) => (
        <button
          key={option.id}
          onClick={() => option.handler()} // Attach the handler to the button click
          style={{
            border: '2px solid blue',
            backgroundColor: 'white',
            color: 'blue',
            borderRadius: '10px',
            padding: '5px 10px',
            cursor: 'pointer',
          }}
        >
          {option.text}
        </button>
      ))}
    </div>
  );
};

export default ButtonWidget;
