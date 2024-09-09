import React from 'react';

const MessageParser = ({ children, actions }) => {
  const parse = (message) => {
    // Save the user's message
    actions.saveUserMessage(message);

    if (message.includes('hello')) {
      actions.handleHello();
    }

    if (message.includes('dog')) {
      actions.handleDog();
    }

    if (message.includes('messages')) {
      actions.handleGetMessages();  // Action to retrieve and display saved messages
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