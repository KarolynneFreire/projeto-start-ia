import React from 'react';
import { Outlet } from 'react-router-dom';

import './App.css';
import Navbar from './assets/components/Navbar';
import ChatbotComponent from './Chatbot/ChatbotComponent.jsx'; // Caminho corrigido
import './App.css';

function App() {
  const [count, setCount] = useState(0)

  const flow = {
    "start": {
      "message": "boa tarde!"
    }
  }
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
