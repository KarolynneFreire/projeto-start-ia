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
      <div>
        {posts.map(post => (
          <div key={post.Nome} className='dados-pessoa'>
            <button className='btn-pessoa'>
              <h2>{post.id}</h2>
              <h2>|</h2>
              <p>{post.nomeCompleto}</p>
              <h2>|</h2>
              <p>{post.email}</p>
              <h2>|</h2>
              <p>{post.isVulneravel}</p>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Consulta;