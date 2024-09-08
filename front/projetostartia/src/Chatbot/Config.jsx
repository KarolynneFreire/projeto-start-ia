import { createChatBotMessage } from 'react-chatbot-kit';
import DogPicture from './DogPicture';

const botName = 'Assistente';

const config = {
  initialMessages: [createChatBotMessage(`Hi! I'm ${botName}`)],
  botName: botName,
  widgets: [
    {
      widgetName: 'dogPicture',
      widgetFunc: (props) => <DogPicture {...props} />
    }
  ],
  customStyles: {
    botMessageBox: {
      backgroundColor: "#00B2A9",
      borderRadius: "10px", 
    },
    chatButton: {
      backgroundColor: "#00B2A9",
    },
  },
  customComponents: {
    header: () => null, 
  }
};

export default config;