import React from 'react';

const FaqWidget = () => {
  const faqTemplate = [
    { 
      question: "O que é vulnerabilidade social?", 
      answer: "Vulnerabilidade social ocorre quando pessoas enfrentam dificuldades para acessar direitos básicos, como saúde, educação e moradia, devido à sua condição socioeconômica."
    },
    { 
      question: "Como posso cadastrar um usuário?", 
      answer: (
        <>
          Você pode cadastrar os usuários acessando a página de cadastro ou clicando{" "}
          <a href="http://localhost:5173/start-projeto/cadastro" style={styles.link} target="_blank" rel="noopener noreferrer">aqui</a>.
        </>
      ),
    },
    { 
      question: "Como posso consultar as informações dos usuários pelo chat?", 
      answer: (
        <>
          Você pode consultar as informações dos usuários utilizando 3 métodos diferentes: CPF, ID ou Nome Cadastrado. 
          Aqui estão os comandos que você pode usar:
          <div style={styles.commandList}>
            <div style={styles.commandItem}>
              <strong>Consultar usuário pelo ID</strong>: Para consultar um usuário pelo ID, digite: <code>consultar usuário pelo id</code>
            </div>
            <div style={styles.commandItem}>
              <strong>Consultar usuário pelo Nome</strong>: Para consultar um usuário pelo nome, digite: <code>consultar usuário pelo nome</code>
            </div>
            <div style={styles.commandItem}>
              <strong>Consultar usuário pelo CPF</strong>: Para consultar um usuário pelo CPF, digite: <code>consultar usuário pelo cpf</code>
            </div>
          </div>
          <p>Exemplo de como prosseguir:</p>
          <ol style={styles.exampleList}>
            <li>
              <strong>Usuário:</strong> Digite: <code>consultar usuário pelo id</code> e pressione enviar.
            </li>
            <li>
              <strong>Bot:</strong> O bot irá pedir que você digite o ID do usuário.
            </li>
            <li>
              <strong>Usuário:</strong> Responda com o ID desejado, por exemplo: <code>12345</code>.
            </li>
            <li>
              <strong>Bot:</strong> O bot retornará as informações do usuário correspondente.
            </li>
          </ol>
        </>
      ),
    },
  ];

  return (
    <div style={styles.faqContainer}>
      <h4 style={styles.header}>Perguntas Frequentes</h4>
      {faqTemplate.map((item, index) => (
        <div key={index} style={styles.faqItem}>
          <div style={styles.question}><strong>{item.question}</strong></div>
          <div style={styles.answer}>{item.answer}</div>
        </div>
      ))}
    </div>
  );
};

// Styles for a responsive and visually appealing layout
const styles = {
  faqContainer: {
    padding: '10px',
    backgroundColor: '#f4f4f4',
    borderRadius: '8px',
    width: '100%',
    maxWidth: '350px', // Adjusted for smaller chat window
    margin: '0 auto',
    fontSize: '14px',
  },
  header: {
    textAlign: 'left',
    fontSize: '16px',
    marginBottom: '15px',
  },
  faqItem: {
    marginBottom: '15px', // Space between each FAQ item
    padding: '10px',
    backgroundColor: '#fff',
    borderRadius: '5px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
  question: {
    fontWeight: 'bold',
    fontSize: '14px',
    marginBottom: '5px',
  },
  answer: {
    fontSize: '13px',
    lineHeight: '1.5',
  },
  commandList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    marginTop: '10px',
  },
  commandItem: {
    padding: '8px',
    backgroundColor: '#E0F7FA',
    borderRadius: '5px',
  },
  exampleList: {
    marginTop: '10px',
    paddingLeft: '20px',
  },
  link: {
    color: '#00A9A5',
    textDecoration: 'underline',
    cursor: 'pointer',
  },
};

export default FaqWidget;
