import React, { useState } from 'react';
import './Carousel.css';

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0); 

    const cards = [
        { id: 1, img: 'https://img.freepik.com/fotos-gratis/mulheres-negras-gravidas-posando_23-2151446179.jpg?t=st=1726081174~exp=1726084774~hmac=004edc5c02eb31bc53c9d88bbac81e99cf6d91f78c4448c8335cfbf08d95080e&w=740' },
        { id: 2, img: 'https://img1.migalhas.uol.com.br/gf_base/empresas/MIGA/imagens/39E32F72709D68E9E7544CD1A6D00F6069EB_cadeirante.jpg' },
        { id: 3, img: 'https://i2.wp.com/www.kdcare.com.br/wp-content/uploads/2019/01/Seguran%C3%A7a-do-idoso-o-que-voc%C3%AA-precisa-saber.jpg?fit=2500%2C1667&ssl=1' },
        { id: 4, img: 'https://www.atribuna.com.br/image/policy:1.9199:1699381648/image.jpg?&f=default' },
        { id: 5, img: 'https://images.impresa.pt/expresso/2018-03-14-medicos-75680641' }
    ];

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length);
    };

    return (
        <div className="carousel-container">
            <h2 className="carousel-title">Alguns Grupos Vulneráveis</h2>
            <div className="carousel">
                <button className="carousel-button" onClick={handlePrev}>
                    &lt;
                </button>
                <div className="carousel-cards">
                    {cards.map((card, index) => (
                        <div
                            key={card.id}
                            className={`carousel-card ${
                                index === currentIndex ? 'active' :
                                index === (currentIndex - 1 + cards.length) % cards.length ? 'prev' :
                                index === (currentIndex + 1) % cards.length ? 'next' : ''
                            }`}
                        >
                            <img src={card.img} alt={`Card ${card.id}`} className="carousel-img" />
                        </div>
                    ))}
                </div>
                <button className="carousel-button" onClick={handleNext}>
                    &gt;
                </button>
            </div>
        </div>
    );
};

export default Carousel;


