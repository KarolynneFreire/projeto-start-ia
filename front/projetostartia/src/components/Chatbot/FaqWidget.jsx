import React from 'react';

const FaqWidget = () => {
  const faqTemplate = [
    { question: "O que é vulnerabilidade?", answer: "Vulnerabilidade se refere a uma condição de risco elevado." },
    { question: "Como posso me cadastrar?", answer: "Você pode se cadastrar acessando a página de cadastro." },
    { question: "Quem tem direito?", answer: "Qualquer pessoa em situação de vulnerabilidade social." },
    { question: "Como anda??", answer: "Qualquer pessoa em situação de vulnerabilidade social." },
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

// Styles with better organization and layout for chat size
const styles = {
  faqContainer: {
    padding: '10px',
    backgroundColor: '#f4f4f4',
    borderRadius: '8px',
    width: '100%',
    maxWidth: '350px', // Adjusted for smaller chat window
    margin: '0 auto',
    fontSize: '14px', // Reduced font size for smaller chat box
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
};

export default FaqWidget;
