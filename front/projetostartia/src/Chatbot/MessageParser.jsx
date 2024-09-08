class MessageParser {
    constructor(actionProvider) {
      this.actionProvider = actionProvider;
    }
  
    parse(message) {
      const lowercase = message.toLowerCase();
  
      if (lowercase.includes("perguntas")) {
        this.actionProvider.handleQuestionList();
      } else if (lowercase.includes("ia")) {
        this.actionProvider.handleIA();
      } else if (lowercase.includes("projeto")) {
        this.actionProvider.handleProjeto();
      } else if (lowercase.includes("tecnologias")) {
        this.actionProvider.handleTecnologias();
      } else if (lowercase.includes("chatbot")) {
        this.actionProvider.handleChatbot();
      } else {
        this.actionProvider.handleDefault();
      }
    }
  }
  
  export default MessageParser;
  