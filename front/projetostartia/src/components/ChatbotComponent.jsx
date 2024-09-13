import React, { useState } from 'react';
import { Chatbot } from 'react-chatbot-kit';
import Draggable from 'react-draggable';
import 'react-chatbot-kit/build/main.css'; // Importa os estilos básicos do chatbot kit
import './Chatbot/Chatbot.css'; // Importa os estilos personalizados para o chatbot
import botIcon from '../assets/icone_chatbot.png'; // Importa o ícone do chatbot
import ActionProvider from './Chatbot/ActionProvider'; // Importa o ActionProvider para lidar com ações
import MessageParser from './Chatbot/MessageParser'; // Importa o MessageParser para interpretar mensagens
import config from './Chatbot/Config'; // Configuração do chatbot
import '../../src/components/Chatbot/Chatbot.css'

function ChatbotComponent() {
  const [isOpen, setIsOpen] = useState(false); // Estado para controlar se o chatbot está aberto ou fechado

  // Função para alternar a visibilidade do chatbot
  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* Ícone flutuante do bot que é exibido quando o chatbot está fechado */}
      {!isOpen && (
        <button className="chatbot-button" onClick={toggleChatbot}>
          <img src={botIcon} alt="Bot Icon" className="chatbot-icon" />
        </button>
      )}

      {/* Contêiner do chatbot que pode ser arrastado pela tela */}
      {isOpen && (
        <Draggable>
  <div className="chatbot-container">
    <div className="chatbot-header">
      Conversa com Assistente
      <button className="close-button-chat" onClick={toggleChatbot}>
      <span className="close-icon">X</span>
        </button>
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
