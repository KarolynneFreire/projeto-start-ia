import React from 'react'
import CardUnique from '../../components/CardUnique/CardUnique';
import Banner from '../../components/header/Banner';

import '../css/Home.css'
import Funcao from './../../components/Funcao/Funcao';
import AboutUs from './../../components/AboutUs/AboutUs';
import Carousel from './../../components/Carousel/Carousel';

const Home = () => {
  return (
    <div>
     <Banner></Banner>
     <Funcao></Funcao>
<AboutUs></AboutUs>
 <Carousel></Carousel>

    </div>
  );
};

export default Home