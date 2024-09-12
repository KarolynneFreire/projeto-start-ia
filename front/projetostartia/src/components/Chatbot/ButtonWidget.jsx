import React from 'react';

const ButtonWidget = ({ actionProvider }) => {
  return (
    <div style={styles.container}>
      <button
        onClick={() => actionProvider.handleFaq()}
        style={styles.button}
      >
        Perguntas Frequentes
      </button>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '15px',
  },
  button: {
    background: 'linear-gradient(135deg, #00b2a9, #008c9e)',
    color: '#fff',
    border: 'none',
    borderRadius: '20px',
    padding: '8px 15px', // Smaller padding for compactness
    fontSize: '14px', // Smaller font size
    cursor: 'pointer',
    boxShadow: '0 3px 6px rgba(0, 0, 0, 0.15)', // Slightly smaller shadow
    transition: 'transform 0.3s ease, background-color 0.3s ease',
    outline: 'none',
    width: '100%', // Responsive to the chat container size
    maxWidth: '200px', // Sets a maximum width for larger screens
  },
  buttonHover: {
    background: 'linear-gradient(135deg, #008c9e, #00b2a9)',
    transform: 'scale(1.05)',
  },
};

export default ButtonWidget;
