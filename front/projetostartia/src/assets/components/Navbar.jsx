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
            <li><Link to="/" className='Nav-div-link'>Início</Link></li>
            <li><Link to="/start-projeto/cadastro" className='Nav-div-link'>Cadastro</Link></li>
            <li><Link to="" className='Nav-div-link'>Consulta</Link></li>
            <li><Link to="" className='Nav-div-link'>Dados</Link></li>
            <li><Link to="" className='Nav-div-link'>Acessibilidade</Link></li>
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