import { Link } from 'react-router-dom'

import '../css/Navbar.css'

import logoNavBar from '../Img/Cras.png'

const Navbar = () => {
  return (
    <nav>
      <header>
        <ul>
          <img src={logoNavBar} alt="" className='Nav-img' />
          <div className='Nav-div'>
            <li>Início</li>
            <li>Cadastro</li>
            <li>Consulta</li>
            <li>Dados</li>
            <li>Acessibilidade</li>
            <div className='Nav-div'>
              <p>|</p>
              <button className='Nav-button-fontsize'>A-</button>
              <button className='Nav-button-fontsize'>A+</button>
            </div>
          </div>
          <button className='Nav-button-perfil'>Perfil</button>
        </ul>
      </header>
    </nav>
  )
}

export default Navbar;