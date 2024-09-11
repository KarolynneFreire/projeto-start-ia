import React from 'react';

class MessageParser {
  constructor(actionProvider) {
    this.actionProvider = actionProvider;
  }

  parse(message) {
    const lowerCaseMessage = message.toLowerCase();

    if (lowerCaseMessage.includes("faq")) {
      this.actionProvider.handleFaq();
    } else {
      // Caso o usuário não mencione FAQ, podemos adicionar mais comandos aqui
    }
  }
}

export default MessageParser;
