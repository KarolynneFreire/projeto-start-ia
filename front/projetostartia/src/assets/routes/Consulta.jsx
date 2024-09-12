import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

import '../css/Consulta.css'
import UserCard from './../../components/UserCard/UserCard';

function Consulta() {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:4000/dados')

      .then(response => {
        setPosts(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);


  return (
    <div>
      {/*<UserCard></UserCard>*/}
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
            <strong>Status:</strong>
            <p className={`status ${post.isVulneravel ? 'vulneravel' : 'nao-vulneravel'}`}>
              {post.isVulneravel ? 'Vulnerável' : 'Não Vulnerável'}
            </p>
          </button>
        ))}
      </div>
    </div>
  );
}

export default Consulta;