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
            <div className='txt-import'>
                <h1>Leitor de Arquivo CSV</h1>
                <div className='arqv-import'>
                    <label htmlFor="file-upload">Arquivo</label>
                    <input
                        type="file"
                        accept='.csv'
                        onChange={lerDadosCsv}
                    /><br /><br />
                </div>
                <button 
                    onClick={enviarDadosParaApi}
                    className='btn-import'
                >
                    Enviar Dados para API
                </button>
            </div>
            {dados.length > 0 && (
                <div className='tabela-box'>
                    <table className='importTabela'>
                        <thead>
                            <tr>
                                <th>Nome Completo</th>
                                <th>Email</th>
                                <th>Cpf</th>
                                <th>Data Nascimento</th>
                                <th>Sexo</th>
                                <th>Rg</th>
                                <th>Idade</th>
                                <th>Nome Mãe</th>
                                <th>Telefone</th>
                                <th>Cep</th>
                                <th>Cidade</th>
                                <th>Rua</th>
                                <th>Uf</th>
                                <th>Bairro</th>
                                <th>Numero Endereco</th>
                                <th>Escolaridade</th>
                                <th>Raça Cor</th>
                                <th>Faixa Etaria</th>
                                <th>Estado Civil</th>
                                <th>PCD</th>
                                <th>Tipo PCD</th>
                                <th>Curso Superior</th>
                                <th>Renda</th>
                                <th>Emprego</th>
                                <th>Numero Moradores</th>
                                <th>Grupo</th>
                            </tr>
                        </thead>
                        <tbody>
                            {dados.map((row, index) => (
                                <tr key={index}>
                                    <td>{row.nomeCompleto || ''}</td>
                                    <td>{row.email || ''}</td>
                                    <td>{row.cpf || ''}</td>
                                    <td>{row.dataNascimento || ''}</td>
                                    <td>{row.sexo || ''}</td>
                                    <td>{row.rg || ''}</td>
                                    <td>{row.idade || ''}</td>
                                    <td>{row.nomeMae || ''}</td>
                                    <td>{row.telefone || ''}</td>
                                    <td>{row.cep || ''}</td>
                                    <td>{row.cidade || ''}</td>
                                    <td>{row.rua || ''}</td>
                                    <td>{row.uf || ''}</td>
                                    <td>{row.bairro || ''}</td>
                                    <td>{row.numeroEndereco || ''}</td>
                                    <td>{row.escolaridade || ''}</td>
                                    <td>{row.racaCor || ''}</td>
                                    <td>{row.faixaEtaria || ''}</td>
                                    <td>{row.estadoCivil || ''}</td>
                                    <td>{row.pcd ? 'True' : 'False'}</td>
                                    <td>{row.tipoPcd || ''}</td>
                                    <td>{row.cursoSuperior || ''}</td>
                                    <td>{row.renda || ''}</td>
                                    <td>{row.emprego || ''}</td>
                                    <td>{row.numeroMoradores || ''}</td>
                                    <td>{row.grupo || ''}</td>
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
