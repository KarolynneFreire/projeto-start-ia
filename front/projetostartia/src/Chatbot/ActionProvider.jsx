import React from 'react';

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  
  // Function to handle the learning option message
  const handleLearningOption = (message) => {
    const botMessage = createChatBotMessage(message);
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleHello = () => {
    const botMessage = createChatBotMessage('Hello. Nice to meet you.');
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleDog = () => {
    const botMessage = createChatBotMessage(
      "Here's a nice dog picture for you!",
      {
        widget: 'dogPicture',
      }
    );
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            handleHello,
            handleDog,
            handleLearningOption,  // Include the new learning option action
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;