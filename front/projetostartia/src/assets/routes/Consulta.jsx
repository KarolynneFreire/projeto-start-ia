import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import '../css/Consulta.css';

function Consulta() {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1); // Página inicial
  const [hasMore, setHasMore] = useState(true); // Indicador de mais dados
  const [pesquisa, setPesquisa] = useState({
    nome: '',
    cpf: '',
    isVulneravel: ''
  });

  const fetchPosts = useCallback(async () => {
    try {
      let url = `http://127.0.0.1:8000/v1/api/usuarios/?skip=${(page - 1) * 100}&limit=100`;

      if (pesquisa.nome) {
        url = `http://127.0.0.1:8000/v1/api/usuarios/buscarusuarios/${encodeURIComponent(pesquisa.nome)}?skip=${(page - 1) * 100}&limit=100`;
      }

      if (pesquisa.cpf) {
        url = `http://127.0.0.1:8000/v1/api/usuarios/buscarusuarioscpf/${encodeURIComponent(pesquisa.cpf)}?skip=${(page - 1) * 100}&limit=100`;
      }

      console.log('Fetching URL:', url); // Log da URL para depuração

      const response = await axios.get(url);
      setHasMore(response.data.length > 0);

      if (page === 1) {
        setPosts(response.data);
      } else {
        setPosts(prevPosts => [...prevPosts, ...response.data]);
      }
    } catch (error) {
      console.error('Fetch error:', error); // Log do erro para depuração
    }
  }, [page, pesquisa.nome, pesquisa.cpf]);

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPesquisa(prevPesquisa => ({
      ...prevPesquisa,
      [name]: value
    }));
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setPage(1); // Resetar a página para 1 quando a consulta de pesquisa mudar
    fetchPosts(); // Buscar posts com a nova consulta de pesquisa
  };

  return (
    <div className="consulta-container">
      <form onSubmit={handleSearchSubmit} className="search-form">
        <input
          type="text"
          name="nome"
          value={pesquisa.nome}
          onChange={handleChange}
          placeholder="Pesquisar nome..."
          className="search-input"
        />
        <input
          type="text"
          name="cpf"
          value={pesquisa.cpf}
          onChange={handleChange}
          placeholder="Pesquisar CPF..."
          className="search-input"
        />
        <select
          name="isVulneravel"
          value={pesquisa.isVulneravel}
          onChange={handleChange}
          className="search-input"
        >
          <option value="">Todos</option>
          <option value="sim">Vulnerável</option>
          <option value="não">Não Vulnerável</option>
        </select>
        <button type="submit" className="search-button">Buscar</button>
      </form>

      <div className="user-container">
        {posts.map(post => (
          <button key={post.id} className='btn-pessoa'>
            <h2>{post.nomeCompleto}</h2>
            <p><strong>CPF:</strong> {post.cpf}</p>
            <p><strong>Email:</strong> {post.email}</p>
            <p className={`status ${post.isVulneravel ? 'vulneravel' : 'nao-vulneravel'}`}>
              <strong>Situação:</strong> <span>{post.isVulneravel ? 'Vulnerável' : 'Não Vulnerável'}</span>
            </p>
          </button>
        ))}
        {!hasMore && <p>Não há mais usuários para carregar.</p>}
      </div>
    </div>
  );
}

export default Consulta;
