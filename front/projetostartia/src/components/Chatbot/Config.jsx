import { createChatBotMessage } from 'react-chatbot-kit';
import ButtonWidget from './ButtonWidget';
import FaqWidget from './FaqWidget';

const botName = 'Assistente';

const config = {
  botName: botName,
  initialMessages: [
    createChatBotMessage(`Olá! Eu sou o ${botName}. Em que posso te ajudar hoje?`, {
      widget: "learningOptions",
    }),
  ],
  widgets: [
    {
      widgetName: "learningOptions",
      widgetFunc: (props) => <ButtonWidget {...props} />,
    },
    {
      widgetName: "faq",
      widgetFunc: (props) => <FaqWidget {...props} />,
    },
  ],
  customStyles: {
    botMessageBox: {
      backgroundColor: "#00B2A9",
    },
    chatButton: {
      backgroundColor: "#00B2A9",
    },
  },
  customComponents: {
    header: () => null // Remove o header padrão
  }
};

export default config;
