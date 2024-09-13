import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import '../css/Consulta.css';

function Consulta() {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1); // Página inicial
  const [hasMore, setHasMore] = useState(true); // Indicador de mais dados

  const fetchPosts = useCallback(async () => {
    try {
      const response = await axios.get(`http://127.0.0.1:8000/v1/api/usuarios/?skip=${(page - 1) * 100}&limit=100`);
      setPosts(prevPosts => [...prevPosts, ...response.data]);
      setHasMore(response.data.length > 0);
    } catch (error) {
      console.error(error);
    }
  }, [page]);

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight || !hasMore) return;
      setPage(prevPage => prevPage + 1);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasMore]);

  return (
    <div>
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
        {!hasMore && <p>Não há mais usuários para carregar.</p>}
      </div>
    </div>
  );
}

export default Consulta;
