import { Outlet } from 'react-router-dom'

import './App.css'
import Navbar from "./assets/components/Navbar"


function App() {
  return (
    <>
      <div>
        <Navbar />
        <Outlet />
      </div>
    </>
  )
}

export default App