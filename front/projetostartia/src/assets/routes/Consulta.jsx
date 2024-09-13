import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

import '../css/Consulta.css'

function Consulta() {

  const [posts, setPosts] = useState([]);
  const [pesquisa, setPesquisa] = useState({
    nome: '',
    email: '',
    cpf: '',
    cidade: '',
    bairro: '',
    isVulneravel: ''
  });

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/v1/api/usuarios/?skip=0&limit=100')

      .then(response => {
        setPosts(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPesquisa(prevPesquisa => ({
      ...prevPesquisa,
      [name]: value
    }));
  };

  const filteredPosts = posts.filter(post => {
    return (
      (pesquisa.nome === '' || post.nomeCompleto.toLowerCase().includes(pesquisa.nome.toLowerCase())) &&
      (pesquisa.email === '' || post.email.toLowerCase().includes(pesquisa.email.toLowerCase())) &&
      (pesquisa.cpf === '' || post.cpf.includes(pesquisa.cpf)) &&
      (pesquisa.cidade === '' || post.cidade.toLowerCase().includes(pesquisa.cidade.toLowerCase())) &&
      (pesquisa.bairro === '' || post.bairro.toLowerCase().includes(pesquisa.bairro.toLowerCase())) &&
      (pesquisa.isVulneravel === '' || (pesquisa.isVulneravel === 'sim' ? post.isVulneravel : !post.isVulneravel))
    );
  });

  return (
    <div>
      <div className='Consulta-title'>
        <h1>Consulta</h1>
      </div>
      <div className='consulta-pesquisa'>
        <label htmlFor="nome">Nome:</label>
        <input
          type="search"
          id='nome'
          name='nome'
          className='input-pesquisa'
          value={pesquisa.nome}
          onChange={handleChange}
        />
        <label htmlFor="cpf">Cpf:</label>
        <input
          type="search"
          id="cpf"
          name="cpf"
          className='input-pesquisa'
          value={pesquisa.cpf}
          onChange={handleChange}
        />
        <label htmlFor="isVulneravel">Vulneravel: </label>
        <select
          id='isVulneravel'
          name='isVulneravel'
          className='input-pesquisa'
          value={pesquisa.isVulneravel}
          onChange={handleChange}
        >
          <option value="">Todos</option>
          <option value="sim">Sim</option>
          <option value="nao">Não</option>
        </select>
      </div>
      <div className="user-container">
        {filteredPosts.map(post => (
          <button key={post.id} className='btn-pessoa'>
            <h2>{post.nomeCompleto}</h2>
            <p><strong>CPF:</strong> {post.cpf}</p>
            <p><strong>Email:</strong> {post.email}</p>
            <p className={`status ${post.isVulneravel ? 'vulneravel' : 'nao-vulneravel'}`} >
              <strong>Situação:</strong> <div className='div-vul'>{post.isVulneravel ? 'Vulnerabilidade' : 'Não Vulnerável'}</div>
            </p>
          </button>
        ))}
      </div>
    </div >
  );
}

export default Consulta;