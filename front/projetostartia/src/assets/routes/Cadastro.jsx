import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'

import '../css/Cadastro.css'



const Cadastro = () => {

    const [cep, setCep] = useState('');
    const [estados, setEstados] = useState([]);
    const [estadoSelecionado, setEstadoSelecionado] = useState('');
    const [sexos, setSexos] = useState([]);
    const [escolaridades, setEscolaridades] = useState([]);
    const [racaCor, setRacaCor] = useState([]);
    const [pcd, setPcd] = useState([]);
    const [deficiencias, setDeficiencias] = useState([]);
    const [estadosCivil, setEstadosCivil] = useState([]);
    const [grupos, setGrupos] = useState([]);
    const [user, setUser] = useState({});
    const [nomeCompleto, setNomeCompleto] = useState('');
    const [dataNascimento, setDataNascimento] = useState('');
    const [idade, setIdade] = useState('');
    const [email, setEmail] = useState('');
    const [nomeMae, setnomeMae] = useState('');
    const [cpf, setCpf] = useState('');
    const [rg, setRg] = useState('');
    const [telefone, setTelefone] = useState('');
    const [numeroEndereco, setnumeroEndereco] = useState('');
    const [cursoSuperior, setcursoSuperior] = useState('');
    const [emprego, setEmprego] = useState('');
    const [renda, setRenda] = useState('');
    const [numeroMoradores, setnumeroMoradores] = useState('');

    const calcularIdade = (dataNasc) => {
        const hoje = new Date();
        const nascimento = new Date(dataNasc);
        let idadeCalculada = hoje.getFullYear() - nascimento.getFullYear();
        const mes = hoje.getMonth() - nascimento.getMonth();
        if (mes < 0 || (mes === 0 && hoje.getDate() < nascimento.getDate())) {
            idadeCalculada--;
        }
        return idadeCalculada;
    };

    const handleDataNascimentoChange = (e) => {
        const novaDataNascimento = e.target.value;
        setDataNascimento(novaDataNascimento);
        setIdade(calcularIdade(novaDataNascimento));
    };

    const handleCEPChange = (e) => {
        const newCEP = e.target.value.replace(/\D/g, '');
        setCep(newCEP);
    };

    const calcularFaixaEtaria = (dataNasc) => {
        const idade = calcularIdade(dataNasc);
    
        if (idade >= 0 && idade <= 11) {
            return 'Infantil';
        } else if (idade >= 12 && idade <= 17) {
            return 'Adolescente';
        } else if (idade >= 18 && idade <= 59) {
            return 'Adulto';
        } else if (idade >= 60) {
            return 'Idoso';
        } else {
            return 'Faixa etária desconhecida';
        }
    };

    const cidade = user.city
    const bairro = user.neighborhood
    const rua = user.street

    useEffect(() => {
        const fetchUserByCEP = async () => {
            try {
                const url = `https://brasilapi.com.br/api/cep/v1/${cep}`;
                const response = await axios.get(url);
                setUser(response.data);
                const estadoEncontrado = estados.find(
                    (estado) => estado.sigla.toUpperCase() === response.data.state.toUpperCase()
                );
                if (estadoEncontrado) {
                    setEstadoSelecionado(estadoEncontrado.sigla);
                }

                console.log(response.data);
            } catch (error) {
                console.error('Error fetching user data:', error);
                setError(error);
            } finally {
                console.log('Finally block executed');
            }
        };

        if (cep.length === 8) { // Check for valid CEP length (adjust if needed)
            fetchUserByCEP();
        }
    }, [cep]);

    useEffect(() => {
        const fetchEstados = async () => {
            try {
                const response = await axios.get('http://localhost:4000/estados');
                setEstados(response.data);
            } catch (error) {
                console.error('Error fetching estados:', error);
            }
        };

        fetchEstados();
    }, []);

    useEffect(() => {
        const fetchSexos = async () => {
            try {
                const response = await axios.get('http://localhost:4000/sexos');
                setSexos(response.data);
            } catch (error) {
                console.error('Error fetching estados:', error);
            }
        };

        fetchSexos();
    }, []);

    useEffect(() => {
        const fetchEscolaridades = async () => {
            try {
                const response = await axios.get('http://localhost:4000/escolaridades');
                setEscolaridades(response.data);
            } catch (error) {
                console.error('Error fetching estados:', error);
            }
        };

        fetchEscolaridades();
    }, []);

    useEffect(() => {
        const fetchRacaCor = async () => {
            try {
                const response = await axios.get('http://localhost:4000/racaCor');
                setRacaCor(response.data);
            } catch (error) {
                console.error('Error fetching estados:', error);
            }
        };

        fetchRacaCor();
    }, []);

    useEffect(() => {
        const fetchPcd = async () => {
            try {
                const response = await axios.get('http://localhost:4000/pcd');
                setPcd(response.data);
            } catch (error) {
                console.error('Error fetching pcd:', error);
            }
        };

        fetchPcd();
    }, []);

    useEffect(() => {
        const fetchDeficiencias = async () => {
            try {
                const response = await axios.get('http://localhost:4000/deficiencias');
                setDeficiencias(response.data);
            } catch (error) {
                console.error('Error fetching deficiencias:', error);
            }
        };

        fetchDeficiencias();
    }, []);

    useEffect(() => {
        const fetchGrupos = async () => {
            try {
                const response = await axios.get('http://localhost:4000/grupos');
                setGrupos(response.data);
            } catch (error) {
                console.error('Error fetching grupos:', error);
            }
        };

        fetchGrupos();
    }, []);

    useEffect(() => {
        const fetchEstadosCivil = async () => {
            try {
                const response = await axios.get('http://localhost:4000/estadosCivil');
                setEstadosCivil(response.data);
            } catch (error) {
                console.error('Error fetching estadosCivil:', error);
            }
        };

        fetchEstadosCivil();
    }, []);

    const handleSubmit = async (e) => {
        console.log('teste')
        e.preventDefault();
        if (nomeCompleto && dataNascimento && email && cpf && rg) {
            const dados = {
                nomeCompleto, email, cpf, dataNascimento, sexos, rg, idade, nomeMae, telefone, cep, cidade, rua, uf, bairro, numeroEndereco, escolaridades, racaCor,
                estadosCivil, pcd, deficiencias, cursoSuperior, renda, emprego, numeroMoradores, grupo
            };
            try {
                const response = await axios.post('http://localhost:4000/dados', dados);
                console.log('sucesso', response.data)
            } catch (error) {
                console.error('error', error);
            }
        } else {
            console.log('Por favor, preencha todos os campos obrigatórios.')
        }
    };

    return (
        <div className='Cadastro'>
            <h1>Cadastro de usuário</h1>
            <p>Cadastre um novo usuário</p><br />
            <form onSubmit={handleSubmit} className='form-cadastro'>
                <p>Dados Pessoais</p>
                <span></span><br />
                <div className='container'>{/*Dados Pessoais começo*/}
                    <div className='container-products'>
                        <label htmlFor='nomeCompleto'>Nome*</label>
                        <input type='text'
                            className='Cadastro-inputs'
                            id='nomeCompleto'
                            placeholder='Insira o nome completo'
                            value={nomeCompleto}
                            onChange={(e) => setNomeCompleto(e.target.value)}
                        /><br />
                        <label htmlFor='data-nasc'>Data de nascimento*</label>
                        <input type='date'
                            className='Cadastro-inputs'
                            id='dataNascimento'
                            value={dataNascimento}
                            onChange={handleDataNascimentoChange}
                        /><br />
                        <label htmlFor='idade'>Idade</label>
                        <input type='number'
                            className='Cadastro-inputs'
                            id='idade'
                            placeholder='ex: 21'
                            value={idade}
                            readOnly
                        /><br />
                    </div>
                    <div className='container-products'>
                        <label htmlFor='email'>Email</label>
                        <input type='email'
                            className='Cadastro-inputs'
                            id='email'
                            placeholder='seuEmail@email.com'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        /><br />
                        <label htmlFor='sexo'>Sexo*</label>
                        <select name='sexo' id='sexo' className='Cadastro-inputs-select'>
                            {sexos.map((sexo) => (
                                <option key={sexo.id} value={sexo.id}>
                                    {sexo.descricao}
                                </option>
                            ))}
                        </select><br />
                        <label htmlFor='nomeMae'>Nome da mãe*</label>
                        <input type='text'
                            className='Cadastro-inputs'
                            id='nomeMae'
                            placeholder='insira o nome da mãe'
                            value={nomeMae}
                            onChange={(e) => setnomeMae(e.target.value)}
                        /><br />
                    </div>
                    <div className='container-products'>
                        <label htmlFor='cpf'>Cpf</label>
                        <input type='number'
                            className='Cadastro-inputs'
                            id='cpf'
                            placeholder='insira seu CPF'
                            value={cpf}
                            onChange={(e) => setCpf(e.target.value)}
                        /><br />
                        <label htmlFor='RG'>RG</label>
                        <input type='number'
                            className='Cadastro-inputs'
                            id='rg'
                            placeholder='insira o seu RG'
                            value={rg}
                            onChange={(e) => setRg(e.target.value)}
                        /><br />
                        <label htmlFor='Num-contato'>Número para contato</label>
                        <input type='number'
                            className='Cadastro-inputs'
                            id='telefone'
                            placeholder='insira o número para contato'
                            value={telefone}
                            onChange={(e) => setTelefone(e.target.value)}
                        /><br />
                    </div>
                </div>{/*Dados Pessoais fim*/}

                <p>Endereço</p>
                <span></span><br />
                <div className='container'>{/*Endereço começo*/}
                    <div className='container-products'>
                        <label htmlFor='cep'>Cep</label>
                        <input type='number'
                            className='Cadastro-inputs'
                            id='cep'
                            placeholder='00000000'
                            value={cep}
                            onChange={handleCEPChange}
                        /><br />
                        <label htmlFor='Estado'>Estado</label>
                        <select name='uf'
                            id='uf'
                            className='Cadastro-inputs-select'
                            value={estadoSelecionado}
                            onChange={(e) => setEstadoSelecionado(e.target.value)}
                        >
                            {estados.map((estado) => (
                                <option key={estado.sigla} value={estado.sigla}>
                                    {estado.nome}
                                </option>
                            ))}
                        </select><br />
                    </div>
                    <div className='container-products'>
                        <label htmlFor='cidade'>Cidade</label>
                        <input type='text'
                            className='Cadastro-inputs'
                            id='cidade'
                            placeholder='ex: Recife'
                            value={cidade}
                        /><br />
                        <label htmlFor='bairro'>Bairro</label>
                        <input type='text'
                            className='Cadastro-inputs'
                            id='bairro'
                            placeholder='ex: Boa Vista'
                            value={bairro}
                        /><br />
                    </div>
                    <div className='container-products'>
                        <label htmlFor='rua'>Rua</label>
                        <input type='text'
                            className='Cadastro-inputs'
                            id='rua'
                            placeholder='ex: Cais do Apolo'
                            value={rua}
                        /><br />
                        <label htmlFor='n-endereco'>Nº da casa</label>
                        <input type='number'
                            className='Cadastro-inputs'
                            id='n-endereco'
                            placeholder='ex: 925'
                            value={numeroEndereco}
                            onChange={(e) => setnumeroEndereco(e.target.value)}
                        /><br />
                    </div>
                </div>{/*Endereço fim*/}

                <p>Pesquisa Social</p>
                <span></span><br />
                <div className='container'>{/*Pesquisa social começo*/}
                    <div className='container-products'>
                        <label htmlFor='escolaridade'>Escolaridade*</label>
                        <select name='escolaridade' id='escolaridade' className='Cadastro-inputs-select'>
                            {escolaridades.map((escolaridades) => (
                                <option key={escolaridades.id} value={escolaridades.id}>
                                    {escolaridades.descricao}
                                </option>
                            ))}
                        </select><br />
                        <div className='for-acad'>
                            <label htmlFor="faculdade">Curso Superior </label>
                            <p>(caso tenha feito o ensino superior)</p>
                        </div>
                        <input type="text"
                            className='Cadastro-inputs'
                            id='faculdade'
                            placeholder='insira seu cursoSuperior de fromação'
                            value={cursoSuperior}
                            onChange={(e) => setcursoSuperior(e.target.value)}
                        /><br />
                        <label htmlFor="emprego">Emprego</label>
                        <input type="text"
                            className='Cadastro-inputs'
                            id='emprego'
                            placeholder='insira seu emprego'
                            value={emprego}
                            onChange={(e) => setEmprego(e.target.value)}
                        /><br />
                    </div>
                    <div className='container-products'>
                        <label htmlFor='etnia'>Raça/cor*</label>
                        <select name='etnia' id='etnia' className='Cadastro-inputs-select'>
                            {racaCor.map((racaCor) => (
                                <option key={racaCor.id} value={racaCor.id}>
                                    {racaCor.descricao}
                                </option>
                            ))}
                        </select><br />
                        <label htmlFor='renda'>Renda</label>
                        <input type='number'
                            className='Cadastro-inputs'
                            id='renda'
                            placeholder='ex: 1800.00'
                            value={renda}
                            onChange={(e) => setRenda(e.target.value)}
                        /><br />
                        <label htmlFor='n-moradores'>Nº de moradores na residencia</label>
                        <input type='number'
                            className='Cadastro-inputs'
                            id='n-moradores'
                            placeholder='ex: 5'
                            value={numeroMoradores}
                            onChange={(e) => setnumeroMoradores(e.target.value)}
                        /><br />
                    </div>
                    <div className='container-products'>
                        <label htmlFor='PCD'>Portador de deficiencias*</label>
                        <select name='PCD' id='PCD' className='Cadastro-inputs-select'>
                            {pcd.map((pcd) => (
                                <option key={pcd.id} value={pcd.id}>
                                    {pcd.descricao}
                                </option>
                            ))}
                        </select><br />
                        <label htmlFor='tipo-PCD'>Tipo de dificiencia</label>
                        <select name='tipo-PCD' id='tipo-PCD' className='Cadastro-inputs-select'>
                            {deficiencias.map((deficiencia) => (
                                <option key={deficiencia.id} value={deficiencia.id}>
                                    {deficiencia.descricao}
                                </option>
                            ))}
                        </select><br />
                        <label htmlFor="grupo">Grupo</label>
                        <select name='grupo' id='grupo' className='Cadastro-inputs-select'>
                            {grupos.map((grupo) => (
                                <option key={grupo.id} value={grupo.value}>
                                    {grupo.descricao}
                                </option>
                            ))}
                        </select><br />
                        <label htmlFor='estadoCivil'>Estado Civil*</label>
                        <select name='estadoCivil' id='estadoCivil' className='Cadastro-inputs-select'>
                            {estadosCivil.map((estado) => (
                                <option key={estado.id} value={estado.id}>
                                    {estado.descricao}
                                </option>
                            ))}
                        </select><br />
                    </div>
                </div>{/*Pesquisa social fim*/}
                <div className='btn-enviar'>
                    <button type="submit"
                        className='button-real'
                        onClick={handleSubmit}
                    >Enviar</button>
                </div>
            </form>
        </div>
    )
}

export default Cadastro;