import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import ChatBot from "react-chatbotify"
import './App.css'
import Feature from './components/Feature/Feature'

function App() {
  

  const flow = {
    "start": {
      "message": "boa tarde !"
    }
  }
  return (
    <>
      <Feature />
      <ChatBot flow={flow} />
    </>
  )
}

export default App