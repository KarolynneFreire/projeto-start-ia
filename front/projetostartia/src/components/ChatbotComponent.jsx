import React, { useState } from 'react';
import { Chatbot } from 'react-chatbot-kit';
import Draggable from 'react-draggable';
import 'react-chatbot-kit/build/main.css'; // Importa os estilos básicos do chatbot kit
import './Chatbot/Chatbot.css'; // Importa os estilos personalizados para o chatbot
import botIcon from '../assets/icone_chatbot.png'; // Ícone do chatbot
import ActionProvider from './Chatbot/ActionProvider'; // ActionProvider importado corretamente
import MessageParser from './Chatbot/MessageParser'; // MessageParser para interpretar mensagens
import config from './Chatbot/Config'; // Config do chatbot
import '../../src/components/Chatbot/Chatbot.css';

function ChatbotComponent() {
  const [isOpen, setIsOpen] = useState(false); // Estado para controlar se o chatbot está aberto ou fechado
  const [csvFile, setCsvFile] = useState(null); // Estado para armazenar o arquivo CSV
  const [uploadMessage, setUploadMessage] = useState(''); // Mensagem de retorno para o usuário
  const [showCsvUpload, setShowCsvUpload] = useState(false); // Estado para controlar o botão de upload

  // Função para alternar a visibilidade do chatbot
  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  // Função para lidar com a seleção de arquivo CSV
  const handleFileChange = (event) => {
    setCsvFile(event.target.files[0]);
  };
  
  const handleFileUpload = async () => {
    if (csvFile) {
      try {
        const response = await apiService.uploadCsv(csvFile);  // Passando o arquivo corretamente
        setUploadMessage(`Sucesso: ${response.message}`);
      } catch (error) {
        setUploadMessage('Erro ao enviar CSV.');
      }
    } else {
      setUploadMessage('Por favor, selecione um arquivo CSV.');
    }
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
              actionProvider={ActionProvider} // Apenas passe a classe ActionProvider, não como uma instância
              placeholderText="Digite sua mensagem aqui..." 
            />
            {/* Exibe o botão de upload de CSV apenas se `showCsvUpload` for verdadeiro */}
            {showCsvUpload && (
              <div className="file-upload-section">
                <input type="file" accept=".csv" onChange={handleFileChange} />
                <button className="upload-button" onClick={handleFileUpload}>
                  Enviar CSV
                </button>
                {uploadMessage && <p>{uploadMessage}</p>} {/* Mensagem de sucesso ou erro */}
              </div>
            )}
          </div>
        </Draggable>
      )}
    </div>
  );
}

export default ChatbotComponent;
