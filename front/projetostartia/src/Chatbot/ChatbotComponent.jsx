import React, { useState } from 'react';
import { Chatbot } from 'react-chatbot-kit';
import Draggable from 'react-draggable';
import 'react-chatbot-kit/build/main.css';
import './Chatbot.css'; 
import botIcon from '../assets/icone_chatbot.png';
import ActionProvider from './ActionProvider';
import MessageParser from './MessageParser';
import config from './Config';

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
            <div className="chatbot-header"> 
              Conversa com Assistente
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
