import React from 'react';

const MessageParser = ({ children, actions }) => {
  const parse = (message) => {
    // Save the user's message
    /*actions.saveUserMessage(message);*/

    if (message.includes('hello')) {
      actions.handleHello();
    }

    if (message.includes('dog')) {
      actions.handleDog();
    }

    if (message.includes('faq') || message.includes('perguntas')) {
      actions.handleFaq();  // Trigger FAQ flow
    }

    if (message.includes('messages')) {
      actions.handleGetMessages();  // Action to retrieve and display saved messages
    }

    if (message.includes('sair')) {
      actions.handleExitFlow();  // Global exit handler
    }
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          actions,
        });
      })}
    </div>
  );
};

export default MessageParser;
