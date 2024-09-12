import React from 'react';
import apiService from './apiService'; // Certifique-se de que este arquivo esteja configurado corretamente para fazer a chamada à API

class ActionProvider {
  constructor(createChatBotMessage, setStateFunc, createClientMessage) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
    this.createClientMessage = createClientMessage;
  }

  // Função para lidar com a solicitação de consulta por ID
  handleUserConsultationRequestById = () => {
    const message = this.createChatBotMessage("Digite o ID do usuário que você deseja consultar:");
    
    // Atualizar o estado para armazenar a flag de espera pelo ID
    this.setState((prevState) => ({
      ...prevState,
      waitingForUserId: true, // Define que estamos aguardando o ID do usuário
    }));

    console.log("Esperando o ID do usuário...");
    this.updateChatbotState(message);
  };

  // Função para lidar com a solicitação de consulta por Nome
  handleUserConsultationRequestByName = () => {
    const message = this.createChatBotMessage("Digite o nome completo do usuário que você deseja consultar:");
    
    // Atualizar o estado para armazenar a flag de espera pelo nome
    this.setState((prevState) => ({
      ...prevState,
      waitingForUserName: true, // Define que estamos aguardando o nome do usuário
    }));

    console.log("Esperando o nome do usuário...");
    this.updateChatbotState(message);
  };

  // Função para lidar com a solicitação de consulta por CPF
  handleUserConsultationRequestByCpf = () => {
    const message = this.createChatBotMessage("Digite o CPF do usuário que você deseja consultar:");
    
    // Atualizar o estado para armazenar a flag de espera pelo CPF
    this.setState((prevState) => ({
      ...prevState,
      waitingForUserCpf: true, // Define que estamos aguardando o CPF do usuário
    }));

    console.log("Esperando o CPF do usuário...");
    this.updateChatbotState(message);
  };

  // Função para lidar com a resposta do ID do usuário
  handleUserIdInput = async (userId) => {
    console.log("ID do usuário recebido:", userId);

    // Reseta a flag de espera pelo ID após a entrada do usuário
    this.setState((prevState) => ({
      ...prevState,
      waitingForUserId: false,
    }));

    if (isNaN(userId)) {
      const errorMessage = this.createChatBotMessage(
        "Por favor, insira um ID numérico válido."
      );
      this.updateChatbotState(errorMessage);
    } else {
      try {
        // Chamada da API
        console.log("Chamando API com o ID:", userId);
        const userData = await apiService.getUserById(userId);
        this.handleApiResponse(userData);
      } catch (error) {
        this.handleApiError();
      }
    }
  };

 // Função para lidar com a resposta do nome do usuário
handleUserNameInput = async (userName) => {
  console.log("Nome do usuário recebido:", userName);

  // Reseta a flag de espera pelo nome após a entrada do usuário
  this.setState((prevState) => ({
    ...prevState,
    waitingForUserName: false,
  }));

  if (!userName) {
    const errorMessage = this.createChatBotMessage(
      "Por favor, insira um nome válido."
    );
    this.updateChatbotState(errorMessage);
  } else {
    try {
      // Chamada da API
      console.log("Chamando API com o nome:", userName);
      const userData = await apiService.getUserByName(userName);

      // Log para verificar o retorno da API
      console.log("Retorno da API para o nome:", userData);

      if (userData) {
        const message = this.createChatBotMessage(
          `Dados do usuário:
          \nCPF: ${userData.cpf}
          \nNome Completo: ${userData.nomeCompleto}
          \nEmail: ${userData.email}
          \nÉ Vulnerável: ${userData.isVulneravel ? 'Sim' : 'Não'}`
        );
        this.updateChatbotState(message);
      } else {
        const errorMessage = this.createChatBotMessage(
          "Usuário não encontrado. Tente outro nome."
        );
        this.updateChatbotState(errorMessage);
      }
    } catch (error) {
      console.error("Erro ao chamar API:", error); // Debug
      const errorMessage = this.createChatBotMessage(
        "Ocorreu um erro ao tentar consultar o usuário."
      );
      this.updateChatbotState(errorMessage);
    }
  }
};

  // Função para lidar com a resposta do CPF do usuário
// Função para lidar com a resposta do CPF do usuário
handleUserCpfInput = async (userCpf) => {
  console.log("CPF do usuário recebido:", userCpf);

  // Reseta a flag de espera pelo CPF após a entrada do usuário
  this.setState((prevState) => ({
    ...prevState,
    waitingForUserCpf: false,
  }));

  // Realiza uma verificação básica para ver se o CPF não está vazio
  if (!userCpf || userCpf.trim() === "") {
    const errorMessage = this.createChatBotMessage(
      "Por favor, insira um CPF válido."
    );
    this.updateChatbotState(errorMessage);
  } else {
    try {
      // Chamada da API para consultar o usuário pelo CPF
      console.log("Chamando API com o CPF:", userCpf);
      const userData = await apiService.getUserByCpf(userCpf.trim());
      
      // Verifica se a API retornou dados do usuário
      if (userData) {
        const message = this.createChatBotMessage(
          `Dados do usuário:
          \nCPF: ${userData.cpf}
          \nNome Completo: ${userData.nomeCompleto}
          \nEmail: ${userData.email}
          \nÉ Vulnerável: ${userData.isVulneravel ? 'Sim' : 'Não'}`
        );
        this.updateChatbotState(message);
      } else {
        const errorMessage = this.createChatBotMessage(
          "Usuário não encontrado. Tente outro CPF."
        );
        this.updateChatbotState(errorMessage);
      }
    } catch (error) {
      console.error("Erro ao chamar API:", error); // Log do erro no console
      const errorMessage = this.createChatBotMessage(
        "Ocorreu um erro ao tentar consultar o usuário."
      );
      this.updateChatbotState(errorMessage);
    }
  }
};


  // Função genérica para lidar com a resposta da API
  handleApiResponse = (userData) => {
    if (userData) {
      const message = this.createChatBotMessage(
        `Dados do usuário:
        \nCPF: ${userData.cpf}
        \nNome Completo: ${userData.nomeCompleto}
        \nEmail: ${userData.email}
        \nÉ Vulnerável: ${userData.isVulneravel ? 'Sim' : 'Não'}`
      );
      this.updateChatbotState(message);
    } else {
      const errorMessage = this.createChatBotMessage(
        "Usuário não encontrado. Tente novamente."
      );
      this.updateChatbotState(errorMessage);
    }
  };

  // Função genérica para lidar com erros de API
  handleApiError = () => {
    const errorMessage = this.createChatBotMessage(
      "Ocorreu um erro ao tentar consultar o usuário."
    );
    this.updateChatbotState(errorMessage);
  };

  handleFaq = () => {
    const message = this.createChatBotMessage("Aqui estão algumas Perguntas Frequentes:", {
      widget: "faq",
    });
    this.updateChatbotState(message);
  };

  // Função para atualizar o estado do chatbot
  updateChatbotState(message) {
    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  }
}

export default ActionProvider;
