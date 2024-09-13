import React from 'react';
import './CardUnique.css'; 

const CardUnique = () => {
  return (
    <div className="card-unique-container">
      <div className="card-unique-image">
        <img src="https://www.psicologo.com.br/wp-content/uploads/saude-mental-para-idosos.jpg" alt="" srcset="" />
      </div>
      <div className="card-unique-content">
        <p className="card-unique-date">26 December 2019</p>
        <h2 className="card-unique-title">Lorem Ipsum Dolor2</h2>
        <p className="card-unique-description">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae
          voluptate repellendus magni illo ea animi?
        </p>
        <button className="card-unique-button">Read More</button>
      </div>
    </div>
  );
};

export default CardUnique;
