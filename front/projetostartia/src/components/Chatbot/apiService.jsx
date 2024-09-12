// apiService.js
import axios from 'axios';

const API_BASE_URL = 'http://127.0.0.1:8000/v1/api';

const apiService = {
  // Function to fetch user by ID
  getUserById: async (usuarioId) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/usuarios/${usuarioId}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching user by ID:', error);
      return null;  // Handle the error as needed
    }
  },
  getUserByName: async (name) => {
    try {
      const response = await axios.get(`http://127.0.0.1:8000/v1/api/usuarios/buscarnome/${name}`);
      console.log("Resposta da API:", response.data); // Log para verificar o que está retornando
      return response.data; // Verifique se o retorno está correto e mapeado corretamente
    } catch (error) {
      console.error("Erro na requisição da API para o nome:", error);
      return null; // Retorna null se ocorrer algum erro
    }
  },
  getUserByCpf: async (cpf) => {
    try {
      const response = await fetch(`http://127.0.0.1:8000/v1/api/usuarios/buscarcpf/${cpf}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`Erro ao consultar API: ${response.statusText}`);
      }

      const data = await response.json();
      return data; // Retorna os dados do usuário encontrados
    } catch (error) {
      console.error("Erro na requisição da API para o CPF:", error);
      return null; // Retorna null em caso de erro
    }
  },
};

export default apiService;
