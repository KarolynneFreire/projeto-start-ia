import React from 'react';
import { Outlet } from 'react-router-dom';
import './App.css';
import Navbar from './assets/components/Navbar';
import ChatbotComponent from './components/ChatbotComponent.jsx'; // Caminho corrigido
import { WidgetManagerProvider } from './components/Chatbot/WidgetManagerContext .jsx'; // Import the WidgetManagerContext provider

function App() {
  return (
    <>
      <div className="App">
        <Navbar />
        {/* Render child routes */}
        <Outlet />
      </div>

      {/* Wrap ChatbotComponent with WidgetManagerProvider */}
        <ChatbotComponent />
    </>
  );
}

export default App;
