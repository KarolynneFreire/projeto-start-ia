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

    return (
        <div className='importCsv'>
            <h1 clas>Leitor de Arquivo CSV</h1>

            <div>
                <label htmlFor="csv">Arquivo </label>
                <input type="file" accept='.csv' onChange={lerDadosCsv} /><br /><br />
            </div>

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
                        <tr>
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
                            <td>{row.endereco}</td>//
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
    )
}

export default Import;