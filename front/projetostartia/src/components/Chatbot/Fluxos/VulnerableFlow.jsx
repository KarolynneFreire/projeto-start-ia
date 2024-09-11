import contextManager from '../Gerenciador/ContextManager';

class VulnerableFlow {
  handleMessage(message, actionProvider) {
    if (message.includes('Sair')) {
      actionProvider.handleExitFlow();
    } else {
      // Handle vulnerable-related conversations here
      const botMessage = "Você está no fluxo Vulnerável. Digite 'Sair' para encerrar.";
      actionProvider.createChatBotMessage(botMessage);
    }
  }
}

const vulnerableFlow = new VulnerableFlow();
export default vulnerableFlow;
