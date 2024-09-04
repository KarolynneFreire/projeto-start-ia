import { Outlet } from 'react-router-dom'

import ChatBot from "react-chatbotify"
import './App.css'
import Navbar from "./assets/components/Navbar"


function App() {
  const flow = {
    "start": {
      "message": "boa tarde!"
    }
  }
  return (
    <>
      <div>
        <Navbar />
        <Outlet />
      </div>
      <ChatBot flow={flow}/>
    </>
  )
}

export default App