import React from 'react';

const ButtonWidget = (props) => {
  // Options for the buttons with corresponding text and handlers
  const options = [
    { text: 'Javascript', handler: () => handleOptionClick('Javascript'), id: 1 },
    { text: 'Python', handler: () => handleOptionClick('Python'), id: 2 },
    { text: 'Golang', handler: () => handleOptionClick('Golang'), id: 3 },
  ];

  // Function to handle the button click and call the actionProvider method
  const handleOptionClick = (language) => {
    const message = `Você escolheu aprender ${language}. Ótima escolha!`;
    props.actionProvider.handleLearningOption(message);  // Use the correct method from ActionProvider
  };

  // Render buttons with their styles
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