import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

import '../css/Consulta.css'
import UserCard from './../../components/UserCard/UserCard';

function Consulta() {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:4000/posts')

      .then(response => {
        setPosts(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);


  return (
    <div>
      <UserCard></UserCard>
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
              <h2>{post.Cpf}</h2>
              <h2>|</h2>
              <p>{post.Nome}</p>
              <h2>|</h2>
              <p>{post.Rg}</p>
              <h2>|</h2>
              <p>{post.Cep}</p>
              <h2>|</h2>
              <p>{post.Vune}</p>
            </button>
          </div>
        ))}
      </div>
    </div>
    );
}

export default Consulta;