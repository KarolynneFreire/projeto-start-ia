import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

import '../css/Consulta.css'

function Consulta() {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/v1/api/usuarios/?skip=0&limit=100')

      .then(response => {
        setPosts(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);


  return (
    <div>
      <div className='consulta-pesquisa'>
        <input type="search" id='nome' className='input-pesquisa' />
        <input type="search" name="" id="" className='input-pesquisa' />
        <input type="search" name="" id="" className='input-pesquisa' />
        <input type="search" name="" id="" className='input-pesquisa' />
        <input type="search" name="" id="" className='input-pesquisa' />
      </div>
      <div className="user-container">
        {posts.map(post => (
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
    </div>
  );
}

export default Consulta;