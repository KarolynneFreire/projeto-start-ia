import React from 'react';
import apiService from './apiService'; // Certifique-se de que este arquivo esteja configurado corretamente para fazer a chamada à API

class ActionProvider {
  constructor(createChatBotMessage, setStateFunc, createClientMessage, setUploadCsvState) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
    this.createClientMessage = createClientMessage;
    this.setUploadCsvState = setUploadCsvState; // Função para atualizar o estado de upload CSV
  }

  // Função para lidar com a solicitação de consulta por ID
  handleUserConsultationRequestById = () => {
    const message = this.createChatBotMessage("Digite o ID do usuário que você deseja consultar:");
    
    // Atualizar o estado para armazenar a flag de espera pelo ID
    this.setState((prevState) => ({
      ...prevState,
      waitingForUserId: true,
    }));

    this.updateChatbotState(message);
  };

  // Função para lidar com a solicitação de consulta por Nome
  handleUserConsultationRequestByName = () => {
    const message = this.createChatBotMessage("Digite o nome completo do usuário que você deseja consultar:");
    
    // Atualizar o estado para armazenar a flag de espera pelo nome
    this.setState((prevState) => ({
      ...prevState,
      waitingForUserName: true,
    }));

    this.updateChatbotState(message);
  };

  // Função para lidar com a solicitação de consulta por CPF
  handleUserConsultationRequestByCpf = () => {
    const message = this.createChatBotMessage("Digite o CPF do usuário que você deseja consultar:");
    
    // Atualizar o estado para armazenar a flag de espera pelo CPF
    this.setState((prevState) => ({
      ...prevState,
      waitingForUserCpf: true,
    }));

    this.updateChatbotState(message);
  };

  // Função para lidar com a resposta do ID do usuário
  handleUserIdInput = async (userId) => {
    this.setState((prevState) => ({
      ...prevState,
      waitingForUserId: false,
    }));

    if (isNaN(userId)) {
      const errorMessage = this.createChatBotMessage("Por favor, insira um ID numérico válido.");
      this.updateChatbotState(errorMessage);
    } else {
      try {
        const userData = await apiService.getUserById(userId);
        this.handleApiResponse(userData);
      } catch (error) {
        this.handleApiError();
      }
    }
  };

  // Função para lidar com a resposta do nome do usuário
  handleUserNameInput = async (userName) => {
    this.setState((prevState) => ({
      ...prevState,
      waitingForUserName: false,
    }));

    if (!userName) {
      const errorMessage = this.createChatBotMessage("Por favor, insira um nome válido.");
      this.updateChatbotState(errorMessage);
    } else {
      try {
        const userData = await apiService.getUserByName(userName);
        this.handleApiResponse(userData);
      } catch (error) {
        this.handleApiError();
      }
    }
  };

  // Função para lidar com a resposta do CPF do usuário
  handleUserCpfInput = async (userCpf) => {
    this.setState((prevState) => ({
      ...prevState,
      waitingForUserCpf: false,
    }));

    if (!userCpf || userCpf.trim() === "") {
      const errorMessage = this.createChatBotMessage("Por favor, insira um CPF válido.");
      this.updateChatbotState(errorMessage);
    } else {
      try {
        const userData = await apiService.getUserByCpf(userCpf.trim());
        this.handleApiResponse(userData);
      } catch (error) {
        this.handleApiError();
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
      const errorMessage = this.createChatBotMessage("Usuário não encontrado. Tente novamente.");
      this.updateChatbotState(errorMessage);
    }
  };

  // Função genérica para lidar com erros de API
  handleApiError = () => {
    const errorMessage = this.createChatBotMessage("Ocorreu um erro ao tentar consultar o usuário.");
    this.updateChatbotState(errorMessage);
  };

  handleCsvUploadRequest = () => {
    const message = this.createChatBotMessage("Por favor, envie o arquivo CSV abaixo:", {
      widget: "uploadCsv",
    });
  
    this.updateChatbotState(message);
  };

  // Função de FAQ
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
