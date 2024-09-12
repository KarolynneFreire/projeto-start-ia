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
  }
};

export default apiService;
