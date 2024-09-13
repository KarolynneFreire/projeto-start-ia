class MessageParser {
  constructor(actionProvider, state) {
    this.actionProvider = actionProvider;
    this.state = state; // Recebe o estado global do bot para verificar o estado `waitingForUserId`, `waitingForUserName`, `waitingForUserCpf` ou `waitingForCsvUpload`
  }

  parse(message) {
    const lowerCaseMessage = message.toLowerCase();

    console.log("Mensagem recebida do usuário:", message); // Log para debug

    // Verifica se o bot está aguardando um ID, Nome, CPF ou CSV
    if (this.state.waitingForUserId) {
      console.log("Esperando ID do usuário, mensagem recebida:", message);
      this.actionProvider.handleUserIdInput(message.trim()); // Chama a função para manipular o ID inserido
    } else if (this.state.waitingForUserName) {
      console.log("Esperando Nome do usuário, mensagem recebida:", message);
      this.actionProvider.handleUserNameInput(message.trim()); // Chama a função para manipular o Nome inserido
    } else if (this.state.waitingForUserCpf) {
      console.log("Esperando CPF do usuário, mensagem recebida:", message);
      this.actionProvider.handleUserCpfInput(message.trim()); // Chama a função para manipular o CPF inserido
    } else if (this.state.waitingForCsvUpload) {
      console.log("Esperando upload de arquivo CSV, mensagem recebida:", message);
      this.actionProvider.handleCsvUpload(message.trim()); // Chama a função para manipular o upload de CSV
    } else {
      // Se o bot não estiver esperando ID, Nome, CPF ou CSV, verifica os comandos
      if (lowerCaseMessage.includes("consultar usuário pelo id")) {
        console.log("Comando de consulta por ID reconhecido. Solicitando ID...");
        this.actionProvider.handleUserConsultationRequestById(); // Solicita o ID
      } else if (lowerCaseMessage.includes("consultar usuário pelo nome")) {
        console.log("Comando de consulta por Nome reconhecido. Solicitando Nome...");
        this.actionProvider.handleUserConsultationRequestByName(); // Solicita o Nome
      } else if (lowerCaseMessage.includes("consultar usuário pelo cpf")) {
        console.log("Comando de consulta por CPF reconhecido. Solicitando CPF...");
        this.actionProvider.handleUserConsultationRequestByCpf(); // Solicita o CPF
      } else if (lowerCaseMessage.includes("cadastrar usuários em massa")) {
        console.log("Comando de upload CSV reconhecido. Solicitando arquivo CSV...");
        this.actionProvider.handleCsvUploadRequest(); // Solicita o arquivo CSV
      } else if (lowerCaseMessage.includes("faq")) {
        console.log("FAQ solicitado");
        this.actionProvider.handleFaq(); // Manipula o FAQ
      } else {
        console.log("Nenhuma ação correspondente encontrada.");
      }
    }
  }
}

export default MessageParser;
