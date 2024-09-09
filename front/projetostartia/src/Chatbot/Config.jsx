import { createChatBotMessage } from 'react-chatbot-kit';
import ActionProvider from './ActionProvider';
import MessageParser from './MessageParser';
import ButtonWidget from './ButtonWidget';
import DogPicture from './DogPicture';

const botName = 'Assistente';

const config = {
  botName: botName,
  initialMessages: [
    createChatBotMessage(`Olá! Eu sou o ${botName}. O que você gostaria de aprender?`, {
      widget: "learningOptions",
    }),
  ],
  widgets: [
    {
      widgetName: 'learningOptions',
      widgetFunc: (props) => <ButtonWidget {...props} />,
    },
    {
      widgetName: 'dogPicture',
      widgetFunc: (props) => <DogPicture {...props} />,
    }
  ],
  customStyles: {
    botMessageBox: {
      backgroundColor: "#00B2A9",
      borderRadius: "10px",
      padding: "8px",
      color: "#fff",
    },
    chatButton: {
      backgroundColor: "#00B2A9",
      borderRadius: "5px",
    },
  },
  customComponents: {
    header: () => null,
  },
};

export default config;