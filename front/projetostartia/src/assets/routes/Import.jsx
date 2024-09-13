import React, { useState } from 'react'
import Papa from 'papaparse'

import '../css/import.css'


const Import = () => {

    const [dados, setDados] = useState([])

    const lerDadosCsv = (e) => {

        const arquivo = e.target.files[0]

        if (arquivo) {

            Papa.parse(arquivo, {

                header: true,
                dynamicTyping: true,
                complete: (result) => {
                    setDados(result.data);
                },
                error: (error) => {
                    alert('Erro ao analisar o arquivo CSV', error.message);
                }
            })

        }
    }

    const enviarDadosParaApi = () => {
        dados.forEach((row, index) => {
            const data = {
                id: (index + 1).toString(),
                nomeCompleto: row.nome,
                email: row.email,
                cpf: row.cpf,
                dataNascimento: row.dataNascimento,
                rg: row.rg,
                idade: row.idade,
                faixaEtaria: row.faixa_etaria,
                nomeMae: row.nomeMae,
                telefone: row.telefone,
                cep: row.cep,
                cidade: row.cidade,
                rua: row.endereco,
                bairro: row.bairro,
                numeroEndereco: row['nº'],
                cursoSuperior: row.cursoSuperior,
                renda: row.renda,
                emprego: row.emprego,
                numeroMoradores: row['nºmoradores'],
                uf: row.UF,
                sexos: row.sexo,
                escolaridades: row.escolaridade,
                racaCor: row.raca_cor,
                estadosCivil: row.estado,
                deficiencias: row.tipoPcd,
                pcd: row.pcd,
                grupos: row.grupo
            }

            fetch('http://localhost:4000/dados', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            .then(response => response.json())
            .then(data => {
                console.log('Sucesso:', data);
                if (index === dados.length - 1) {
                    alert('Todos os dados foram enviados com sucesso!');
                    setTimeout(() => {
                        window.location.reload();
                    }, 2000);
                }
            })
            .catch((error) => {
                console.error('Erro:', error);
                alert('Erro ao enviar os dados para a API');
            });
        });
    }

    return (
        <div className='importCsv'>

            <div className='txt-import'>
                <h1 clas>Leitor de Arquivo CSV</h1>
                <div className='arqv-import'>
                    <label
                        htmlFor="file-upload">Arquivo</label>
                    <input
                        type="file"
                        accept='.csv'
                        onChange={lerDadosCsv}
                    /><br /><br />
                </div>
                <button 
                onClick={enviarDadosParaApi}
                className='btn-import'
                >Enviar Dados para API</button>
            </div>
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
                            <th>Nome Mâe</th>
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
                                <td>{row.nome}</td>
                                <td>{row.email}</td>
                                <td>{row.cpf}</td>
                                <td>{row.dataNascimento}</td>
                                <td>{row.sexo}</td>
                                <td>{row.rg}</td>
                                <td>{row.idade}</td>
                                <td>{row.nomeMae}</td>
                                <td>{row.telefone}</td>
                                <td>{row.cep}</td>
                                <td>{row.cidade}</td>
                                <td>{row.endereco}</td>
                                <td>{row.UF}</td>
                                <td>{row.bairro}</td>
                                <td>{row.nº}</td>
                                <td>{row.escolaridade}</td>
                                <td>{row.raca_cor}</td>
                                <td>{row.faixa_etaria}</td>
                                <td>{row.estado}</td>
                                <td>{row.pcd}</td>
                                <td>{row.tipoPcd}</td>
                                <td>{row.cursoSuperior}</td>
                                <td>{row.renda}</td>
                                <td>{row.emprego}</td>
                                <td>{row.nºmoradores}</td>
                                <td>{row.grupo}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Import;