import React from 'react';
import { Outlet } from 'react-router-dom';
import './App.css';
import Navbar from './assets/components/Navbar';
import ChatbotComponent from './components/ChatbotComponent.jsx'; // Caminho corrigido

function App() {

  return (
  <>
<div className="App">
      <Navbar />
      {/* O componente Home será renderizado pela rota, então remova-o daqui */}
      <Outlet /> {/* Isso renderiza as rotas filhas (Home, Cadastro, Consulta, etc.) */}
      {/* <ChatBot flow={flow} /> */}
    </div>
  );

      {/* Adicionando o chatbot na página */}
      <ChatbotComponent /> {/* Certifique-se de que este componente está na pasta correta */}
    </>
  );
}

export default App;
