import React from 'react';
import contextManager from './Gerenciador/ContextManager'; // Import the context manager
import vulnerableFlow from './Fluxos/VulnerableFlow'; // Import the Vulnerable flow
import defaultFlow from './Fluxos/DefaultFlow'; // Import the Default flow

const ActionProvider = ({ createChatBotMessage, setState, children }) => {

  // Function to handle the learning option message
  const handleLearningOption = (message) => {
    const botMessage = createChatBotMessage(message);
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  // Function to handle "Hello" message
  const handleHello = () => {
    const botMessage = createChatBotMessage('Hello. Nice to meet you.');
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  // Function to handle "Dog" message
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

  // Handle any incoming message based on the current context
  const handleMessage = (message) => {
    const currentContext = contextManager.getContext(); // Get the current context

    if (currentContext === 'vulnerable') {
      vulnerableFlow.handleMessage(message, this);
    } else {
      defaultFlow.handleMessage(message, this); // Default flow when no specific context
    }
  };

  // Function to handle the FAQ option
  const handleFaq = () => {
    const faqTemplate = [
      { question: "O que é vulnerabilidade?", answer: "Vulnerabilidade se refere a uma condição de risco elevado." },
      { question: "Como posso me cadastrar?", answer: "Você pode se cadastrar acessando a página de cadastro." },
      { question: "Quem tem direito?", answer: "Qualquer pessoa em situação de vulnerabilidade social." },
    ];

    faqTemplate.forEach(item => {
      const faqMessage = `${item.question}: ${item.answer}`;
      const botMessage = createChatBotMessage(faqMessage);
      setState((prev) => ({
        ...prev,
        messages: [...prev.messages, botMessage],
      }));
    });
  };

  // Global handler to exit any conversation flow
  const handleExitFlow = () => {
    contextManager.resetContext(); // Reset the current context to default
    const botMessage = createChatBotMessage('Você saiu do fluxo atual e voltou ao fluxo padrão.');
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
            handleLearningOption,
            handleMessage,  // Add handleMessage to process messages based on context
            handleExitFlow, // Global exit handler for exiting any conversation flow
            handleFaq,      // Add handler for FAQ flow
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;
