import QuestionButtons from './QuestionButtons';

const config = {
  botName: 'Assistente',
  initialMessages: [
    { type: 'bot', id: '1', message: 'Olá! Como posso ajudar você hoje?' },
  ],
  widgets: [
    {
      widgetName: "questionButtons",
      widgetFunc: (props) => <QuestionButtons {...props} />,
    },
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
