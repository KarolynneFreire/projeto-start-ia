class MessageParser {
  constructor(actionProvider) {
    this.actionProvider = actionProvider;
  }

  parse(message) {
    const lowerCaseMessage = message.toLowerCase();

    // Check if the message contains 'faq' to trigger FAQ
    if (lowerCaseMessage.includes("faq")) {
      this.actionProvider.handleFaq();
    }

    // Check if the message contains a user ID command
    if (lowerCaseMessage.startsWith('user')) {
      const userId = lowerCaseMessage.split(' ')[1]; // Extract the ID
      if (!isNaN(userId)) {
        this.actionProvider.handleUserById(userId); // Trigger the API call
      } else {
        const errorMsg = this.actionProvider.createChatBotMessage(
          "Por favor, forneça um ID de usuário válido."
        );
        this.actionProvider.updateChatbotState(errorMsg);
      }
    }

    // Add other message conditions as needed
  }
}

export default MessageParser;
