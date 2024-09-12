import React from 'react';
import apiService from './apiService'; // Importing the API service to handle API requests

class ActionProvider {
  constructor(createChatBotMessage, setStateFunc, createClientMessage) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
    this.createClientMessage = createClientMessage;
  }

  // Handle FAQs
  handleFaq = () => {
    const message = this.createChatBotMessage("Aqui estão algumas Perguntas Frequentes:", {
      widget: "faq",
    });

    this.updateChatbotState(message);
  };

  // Handle fetching user by ID from API
  handleUserById = async (userId) => {
    const userData = await apiService.getUserById(userId);

    if (userData) {
      const message = this.createChatBotMessage(
        `User Info:
        \nCPF: ${userData.cpf}
        \nNome Completo: ${userData.nomeCompleto}
        \nEmail: ${userData.email}
        \nIs Vulnerável: ${userData.isVulneravel ? 'Yes' : 'No'}`
      );
      this.updateChatbotState(message);
    } else {
      const errorMessage = this.createChatBotMessage(
        "Desculpe, não consegui encontrar o usuário. Por favor, tente novamente com um ID válido."
      );
      this.updateChatbotState(errorMessage);
    }
  };

  // Update chatbot state with new messages
  updateChatbotState(message) {
    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  }
}

export default ActionProvider;
