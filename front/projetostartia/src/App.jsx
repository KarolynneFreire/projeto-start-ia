import React from 'react';
import { Outlet } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar.jsx';
import Footer from './components/Footer/Footer';
import ChatbotComponent from './components/ChatbotComponent.jsx'; // Caminho corrigido

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* O componente Home será renderizado pela rota, então remova-o daqui */}
      <Outlet /> {/* Isso renderiza as rotas filhas (Home, Cadastro, Consulta, etc.) */}
      {/* <ChatBot flow={flow} /> */}
      <Footer></Footer>
      <ChatbotComponent />
    </div>

  );
}

export default App;
