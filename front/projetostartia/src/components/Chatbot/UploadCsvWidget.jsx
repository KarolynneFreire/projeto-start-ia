import React, { useState } from 'react';
import apiService from './apiService'; // Importa o serviço de API, que agora contém a função uploadCsv

const UploadCsvWidget = () => {
  const [csvFile, setCsvFile] = useState(null); // Estado para armazenar o arquivo CSV
  const [uploadMessage, setUploadMessage] = useState(''); // Mensagem de feedback para o usuário

  // Função para lidar com a seleção do arquivo CSV
  const handleFileChange = (event) => {
    setCsvFile(event.target.files[0]); // Certifique-se de que o arquivo está sendo capturado corretamente
  };

  // Função para enviar o arquivo CSV
  const handleFileUpload = async () => {
    if (csvFile) {
      const formData = new FormData();
      formData.append('file', csvFile);  // Ensure the correct field name
  
      try {
        console.log("Uploading file:", csvFile.name, " | Type:", csvFile.type);  // Log for debugging
        const response = await apiService.uploadCsv(formData);
        setUploadMessage(`Sucesso: ${response.message}`);  // Assuming response.message contains success info
      } catch (error) {
        setUploadMessage('Erro ao enviar o CSV. Tente novamente.');
        console.error("Upload error details:", error);  // Detailed error log for better debugging
      }
    } else {
      setUploadMessage('Por favor, selecione um arquivo CSV.');
    }
  };
  

  return (
    <div style={styles.container}>
      <input type="file" accept=".csv" onChange={handleFileChange} style={styles.fileInput} />
      <button onClick={handleFileUpload} style={styles.uploadButton}>Enviar CSV</button>
      {uploadMessage && <p>{uploadMessage}</p>}
    </div>
  );
};

// Estilos do widget
const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '10px',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    width: '100%',
    maxWidth: '300px',
  },
  fileInput: {
    marginBottom: '10px',
  },
  uploadButton: {
    padding: '8px 16px',
    backgroundColor: '#007BFF',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default UploadCsvWidget;
