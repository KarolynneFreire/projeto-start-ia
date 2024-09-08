import React, { useState } from 'react'; // Corrigindo a importação de useState
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import ChatbotComponent from './Chatbot';  // Importando o chatbot
import './App.css';

function App() {
  const [count, setCount] = useState(0); // Definindo o estado corretamente

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>Edit <code>src/App.jsx</code> and save to test HMR</p>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
      
      {/* Adicionando o chatbot na página */}
      <ChatbotComponent />
    </>
  );
}

export default App;
