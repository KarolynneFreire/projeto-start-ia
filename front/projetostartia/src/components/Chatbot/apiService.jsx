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

  // Function to fetch user by name
  getUserByName: async (name) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/usuarios/buscarnome/${name}`);
      console.log("Resposta da API:", response.data); // Log para verificar o que está retornando
      return response.data; // Verifique se o retorno está correto e mapeado corretamente
    } catch (error) {
      console.error("Erro na requisição da API para o nome:", error);
      return null; // Retorna null se ocorrer algum erro
    }
  },

  // Function to fetch user by CPF
  getUserByCpf: async (cpf) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/usuarios/buscarcpf/${cpf}`);
      console.log("Resposta da API para o CPF:", response.data); // Log para depuração
      return response.data;
    } catch (error) {
      console.error("Erro na requisição da API para o CPF:", error);
      return null; // Retorna null em caso de erro
    }
  },

  // Function to upload CSV file
  uploadCsv: async (file) => {
    try {
      // Ensure the file is being logged correctly
      console.log("Tipo de arquivo:", file.type);
      console.log("Nome do arquivo:", file.name);
  
      const formData = new FormData();
      formData.append('file', file);  // Ensure the field name matches the backend expectation
  
      // Log FormData to ensure it's constructed properly
      for (let key of formData.entries()) {
        console.log(key[0] + ', ' + key[1]);
      }
  
      const response = await axios.post(`${API_BASE_URL}/usuarios/upload-csv/`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log("Resposta da API para upload CSV:", response.data); // Log para depuração
      return response.data;
    } catch (error) {
      console.error('Erro ao enviar o arquivo CSV:', error);
      throw error;
    }
  },
};

export default apiService;
