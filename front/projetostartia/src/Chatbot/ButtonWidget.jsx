import React from 'react';

const ButtonWidget = (props) => {
  // Options for the buttons with corresponding decision logic
  const options = [
    { text: 'Vulnerável', handler: () => handleVulnerableOption(), id: 1 },
    { text: 'Cadastrar', handler: () => handleRegisterOption(), id: 2 },
    { text: 'Personalizar', handler: () => handleCustomOption(), id: 3 },
  ];

  // Function to handle the "Vulnerável" option, with a pre-modeled API call
  const handleVulnerableOption = () => {
    // Example of a pre-modeled API call (adjust the URL and details as needed)
    fetch('https://api.example.com/vulnerable-endpoint', {
      method: 'GET', // or 'POST', 'PUT', etc. depending on the API
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .then(data => {
        console.log('API response:', data); // You can handle the API response here
        const message = `API chamada com sucesso. Dados recebidos: ${JSON.stringify(data)}`;
        props.actionProvider.createChatBotMessage(message);
      })
      .catch(error => {
        console.error('Erro ao chamar a API:', error);
        props.actionProvider.createChatBotMessage('Houve um erro ao chamar a API.');
      });
  };

  // Function to handle the "Cadastrar" option, guiding to the registration page
  const handleRegisterOption = () => {
    const registerUrl = 'http://localhost:5173/start-projeto/cadastro'; // Replace with your actual registration page URL
    window.location.href = registerUrl;
  };

  // Function for the "Personalizar" option, currently left empty for future customization
  const handleCustomOption = () => {
    // Leave this function blank for future customization
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