import React, { useState } from 'react';
import Papa from 'papaparse';
import '../css/import.css';

const Import = () => {
    const [dados, setDados] = useState([]);
    const [arquivo, setArquivo] = useState(null);

    const lerDadosCsv = (e) => {
        const arquivoSelecionado = e.target.files[0];
        if (arquivoSelecionado) {
            setArquivo(arquivoSelecionado);
            Papa.parse(arquivoSelecionado, {
                header: true,
                dynamicTyping: true,
                complete: (result) => {
                    setDados(result.data);
                },
                error: (error) => {
                    alert('Erro ao analisar o arquivo CSV: ' + error.message);
                }
            });
        }
    };

    const enviarDadosParaApi = () => {
        if (!arquivo) {
            alert('Por favor, selecione um arquivo CSV.');
            return;
        }

        const formData = new FormData();
        formData.append('file', arquivo);

        fetch('http://127.0.0.1:8000/v1/api/upload-csv/', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            console.log('Sucesso:', data);
            alert('Arquivo enviado com sucesso!');
            setArquivo(null);
            setDados([]);
        })
        .catch((error) => {
            console.error('Erro:', error);
            alert('Erro ao enviar o arquivo para a API');
        });
    };

    return (
        <div className='importCsv'>
            <h1 className='header'>Importar Arquivo CSV</h1>
            <div className='upload-container'>
                <input
                    type="file"
                    id="file-upload"
                    accept='.csv'
                    onChange={lerDadosCsv}
                    className='file-input'
                />
                <label htmlFor="file-upload" className='file-label'>Escolha um arquivo CSV</label>
                <button 
                    onClick={enviarDadosParaApi}
                    className='btn-import'
                >
                    Enviar para a API
                </button>
            </div>
            {dados.length > 0 && (
                <div className='table-container'>
                    <table className='importTabela'>
                        <thead>
                            <tr>
                                {Object.keys(dados[0]).map((key, index) => (
                                    <th key={index}>{key.replace(/([A-Z])/g, ' $1').toUpperCase()}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {dados.map((row, index) => (
                                <tr key={index}>
                                    {Object.values(row).map((value, i) => (
                                        <td key={i}>{value || ''}</td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default Import;
