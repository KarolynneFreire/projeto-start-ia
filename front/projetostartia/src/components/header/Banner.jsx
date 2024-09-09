import React from 'react';
import './Banner.css'; // Arquivo CSS para estilização

const Banner = () => {
  return (
    <section className="banner">
      <div className="banner-content">
        <h1>Bem-vindo ao nosso site</h1>
        <p>Descubra como podemos ajudá-lo a economizar tempo e aumentar sua produtividade</p>
        <button className='button-real'>Começar</button>
      </div>
    </section>
  );
};

export default Banner;
