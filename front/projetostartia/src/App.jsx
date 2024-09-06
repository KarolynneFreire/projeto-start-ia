import { Outlet } from 'react-router-dom'

import './App.css'
import Navbar from "./assets/components/Navbar"


function App() {
  const flow = {
    "start": {
      "message": "boa tarde !"
    }
  }
  return (
    <>
      <div>
        <Navbar />
        <Outlet />
        <ChatBot flow={flow} />
      </div>
    </>
  )
}

export default App