import React, { useState } from 'react';
import { Chatbot } from 'react-chatbot-kit';
import Draggable from 'react-draggable'; // Importando react-draggable
import 'react-chatbot-kit/build/main.css';
import './Chatbot.css'; // Arquivo CSS para estilização
import botIcon from './assets/icone_chatbot.png';  // Importando a imagem

// Configuração do chatbot sem o cabeçalho padrão
const config = {
  botName: 'Assistente',
  initialMessages: [
    { type: 'bot', id: '1', message: 'Olá! Como posso ajudar você hoje?' },
  ],
  customStyles: {
    botMessageBox: {
      backgroundColor: "#00B2A9",
      borderRadius: "10px", // Arredondando as pontas das caixas de mensagens
    },
    chatButton: {
      backgroundColor: "#00B2A9",
    },
  },
  customComponents: {
    header: () => null, // Remove o cabeçalho padrão do chatbot
  }
};

// O MessageParser interpreta o que o usuário digita
class MessageParser {
  constructor(actionProvider) {
    this.actionProvider = actionProvider;
  }

  parse(message) {
    const lowercase = message.toLowerCase();

    if (lowercase.includes("ia")) {
      this.actionProvider.handleIA();
    } else if (lowercase.includes("projeto")) {
      this.actionProvider.handleProjeto();
    } else {
      this.actionProvider.handleDefault();
    }
  }
}

// O ActionProvider lida com a lógica das respostas do bot
class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }

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

  handleDefault = () => {
    const message = this.createChatBotMessage("Desculpe, não entendi sua pergunta.");
    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  };
}

// Componente principal do chatbot
function ChatbotComponent() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* Botão flutuante no canto inferior direito */}
      {!isOpen && (
        <button className="chatbot-button" onClick={toggleChatbot}>
          <img src={botIcon} alt="Bot Icon" style={{ width: '50px', height: '50px' }} />
        </button>
      )}

      {/* Chatbot com Draggable para permitir movimentação */}
      {isOpen && (
        <Draggable>
          <div id="chatbot-container" className="chatbot-container">
            <div className="chatbot-header"> {/* Cabeçalho movível */}
              Conversar com Assistente
              <button className="close-button" onClick={toggleChatbot}>X</button>
            </div>
            <Chatbot 
              config={config} 
              messageParser={MessageParser} 
              actionProvider={ActionProvider}
              placeholderText="Digite sua mensagem aqui..." 
            />
          </div>
        </Draggable>
      )}
    </div>
  );
}

export default ChatbotComponent;
