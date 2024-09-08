import React from "react";

const QuestionButtons = (props) => {
  const handleClick = (type) => {
    if (type === "ia") {
      props.actionProvider.handleIA();
    } else if (type === "projeto") {
      props.actionProvider.handleProjeto();
    } else if (type === "tecnologias") {
      props.actionProvider.handleTecnologias();
    } else if (type === "chatbot") {
      props.actionProvider.handleChatbot();
    }
  };

  return (
    <div>
      <button onClick={() => handleClick("ia")} className="question-button">
        O que é IA?
      </button>
      <button onClick={() => handleClick("projeto")} className="question-button">
        Qual é o propósito deste projeto?
      </button>
      <button onClick={() => handleClick("tecnologias")} className="question-button">
        Quais tecnologias são usadas neste projeto?
      </button>
      <button onClick={() => handleClick("chatbot")} className="question-button">
        Como funciona este chatbot?
      </button>
    </div>
  );
};

export default QuestionButtons;
