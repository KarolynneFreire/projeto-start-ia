import contextManager from '../Gerenciador/ContextManager';

class DefaultFlow {
  handleMessage(message, actionProvider) {
    if (message.includes('Vulnerável')) {
      contextManager.setContext('vulnerable');
      const botMessage = "Você entrou no fluxo Vulnerável. Digite 'Sair' para encerrar.";
      actionProvider.createChatBotMessage(botMessage);
    } else {
      // Handle normal/default conversations
      const botMessage = "Você está no fluxo padrão. Escolha uma opção.";
      actionProvider.createChatBotMessage(botMessage);
    }
  }
}

const defaultFlow = new DefaultFlow();
export default defaultFlow;
