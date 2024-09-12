  import React from 'react';
  import './Funcao.css'; // Importa os estilos CSS
  

    const Funcao = () => {
      const cardsData = [
        {
          number: "01",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          buttonText: "Read More"
        },
        {
          number: "02",
          text: "Sed do eiusmod tempor incididunt ut labore et dolore magna.",
          buttonText: "Read More"
        },
        {
          number: "03",
          text: "Aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
          buttonText: "Read More"
        }
      ];
    
      return (
        <div className="cards-container">
          {cardsData.map((card, index) => (
            <div key={index} className="card">
              <div className="card-header">
                {/* Colocando o nome "Passo" ao lado do número */}
                <h1>
                  {card.number}
                </h1>
              </div>
              <div className="card-body">
                <p>{card.text}</p>
              </div>
            </div>
          ))}
        </div>
      );
    };
    
    export default Funcao;

