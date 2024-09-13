import React from 'react';
import { Outlet } from 'react-router-dom';
import ChatbotComponent from './components/ChatbotComponent'
import './App.css';
import Navbar from './assets/components/Navbar';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* O componente Home será renderizado pela rota, então remova-o daqui */}
      <Outlet /> {/* Isso renderiza as rotas filhas (Home, Cadastro, Consulta, etc.) */}
      <ChatbotComponent /> {/* O ChatbotComponent deve estar dentro do ChatbotProvider */}
      <Footer></Footer>
    </div>

  );
}

export default App;
