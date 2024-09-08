class ActionProvider {
    constructor(createChatBotMessage, setStateFunc) {
      this.createChatBotMessage = createChatBotMessage;
      this.setState = setStateFunc;
    }
  
    // Função para criar uma mensagem com botões de perguntas
    handleQuestionList = () => {
      const message = this.createChatBotMessage(
        "Selecione uma das perguntas abaixo:",
        {
          widget: "questionButtons",
        }
      );
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, message],
      }));
    };
  
    handleIA = () => {
      const message = this.createChatBotMessage("IA significa Inteligência Artificial.");
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, message],
      }));
    };
  
    handleProjeto = () => {
      const message = this.createChatBotMessage("Este projeto visa demonstrar o uso de chatbots.");
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, message],
      }));
    };
  
    handleTecnologias = () => {
      const message = this.createChatBotMessage("Este projeto utiliza React, Vite e react-chatbot-kit.");
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, message],
      }));
    };
  
    handleChatbot = () => {
      const message = this.createChatBotMessage("Este chatbot usa react-chatbot-kit para criar um fluxo de perguntas e respostas.");
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, message],
      }));
    };
  
    handleDefault = () => {
      const message = this.createChatBotMessage("Desculpe, não entendi sua pergunta.");
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, message],
      }));
    };
  }
  
  export default ActionProvider;
  