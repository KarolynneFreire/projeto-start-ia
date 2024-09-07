import React from 'react';
import { Outlet } from 'react-router-dom';

import './App.css';
import Navbar from './assets/components/Navbar';
import Home from './assets/routes/Home';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Outlet />
      {/* Uncomment the following line to enable the ChatBot component */}
      {/* <ChatBot flow={flow} /> */}
    </div>
  );
}

export default App;
