  import React from 'react';
  import './Funcao.css'; 
  

    const Funcao = () => {
      const cardsData = [
        {
          number: "01",
          text: "Cadastre uma pessoa e veja se ela é vulnerável ou não.",
        },
        {
          number: "02",
          text: "Pesquise pessoas por nome para ter mais detalhes.",
        },
        {
          number: "03",
          text: "Visualise graficos sobre demanda e ganhe produtividade.",
        }
      ];
    
      return (
        <div className="cards-container">
          {cardsData.map((card, index) => (
            <div key={index} className="card">
              <div className="card-header">
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

