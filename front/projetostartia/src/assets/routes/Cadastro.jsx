import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import InputMask from 'react-input-mask';

import '../css/Cadastro.css'


const Cadastro = () => {

    const [cep, setCep] = useState('');
    const [uf, setUf] = useState([]);
    const [ufSelecionado, setUfSelecionado] = useState('');
    const [sexos, setSexos] = useState([]);
    const [sexosSelecionado, setSexosSelecionados] = useState([]);
    const [escolaridades, setEscolaridades] = useState([]);
    const [escolaridadesSelecionado, setEscolaridadesSelecionado] = useState([]);
    const [racaCor, setRacaCor] = useState([]);
    const [racaCorSelecionado, setRacaCorSelecionado] = useState([]);
    const [pcd, setPcd] = useState([]);
    const [pcdSelecionado, setPcdSelecionado] = useState([]);
    const [deficiencias, setDeficiencias] = useState([]);
    const [deficienciasSelecionado, setDeficienciasSelecionado] = useState([]);
    const [estadosCivil, setEstadosCivil] = useState([]);
    const [estadosCivilSelecionado, setEstadosCivilSelecionado] = useState([]);
    const [grupos, setGrupos] = useState([]);
    const [gruposSelecionado, setGruposSelecionado] = useState([]);
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
    const [erro, setErro] = useState('');
    const [mensagemSucesso, setMensagemSucesso] = useState('');

    const cidade = user.city
    const bairro = user.neighborhood
    const rua = user.street

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

    const determinarFaixaEtaria = (idade) => {
        if (idade <= 19) return "0 a 19 anos";
        if (idade <= 24) return "20 a 24 anos";
        if (idade <= 29) return "25 a 29 anos";
        if (idade <= 34) return "30 a 34 anos";
        if (idade <= 39) return "35 a 39 anos";
        if (idade <= 44) return "40 a 44 anos";
        if (idade <= 49) return "45 a 49 anos";
        if (idade <= 54) return "50 a 54 anos";
        if (idade <= 59) return "55 a 59 anos";
        if (idade <= 64) return "60 a 64 anos";
        if (idade <= 69) return "65 a 69 anos";
        if (idade <= 74) return "70 a 74 anos";
        if (idade <= 79) return "75 a 79 anos";
        if (idade <= 84) return "80 a 84 anos";
        if (idade <= 89) return "85 a 89 anos";
        if (idade <= 94) return "90 a 94 anos";
        if (idade <= 99) return "95 a 99 anos";
        return "100 anos +";
    };

    useEffect(() => { //cep api
        const fetchUserByCEP = async () => {
            try {
                const url = `https://brasilapi.com.br/api/cep/v1/${cep}`;
                const response = await axios.get(url);
                setUser(response.data);
                const ufEncontrado = uf.find(
                    (estado) => estado.sigla.toUpperCase() === response.data.state.toUpperCase()
                );
                if (ufEncontrado) {
                    setUfSelecionado(ufEncontrado.sigla);
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

    useEffect(() => { //Uf api
        const fetchUf = async () => {
            try {
                const response = await axios.get('http://localhost:4000/uf');
                setUf(response.data);
            } catch (error) {
                console.error('Error fetching Uf:', error);
            }
        };

        fetchUf();
    }, []);

    useEffect(() => { //sexo api
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

    useEffect(() => { //escolaridade api
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

    useEffect(() => { //racaCor api
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

    useEffect(() => { //pcd api
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

    useEffect(() => { //deficiencias api
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

    useEffect(() => { //grupos api
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

    useEffect(() => { //estadoCivil api
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

    const handleSubmit = async (e) => { //envio de dados api
        console.log('teste')
        e.preventDefault();
        setErro('');

        if (nomeCompleto && dataNascimento && email && cpf && rg) {
            const idadeCalculada = calcularIdade(dataNascimento);

            if (idadeCalculada > 120) {
                setErro('Por favor, insira uma data de nascimento válida.');
                return;
            }

            const faixaEtaria = determinarFaixaEtaria(idade);
            const cpfApenasNumeros = cpf.replace(/\D/g, '');
            const rgApenasnumeros = rg.replace(/\D/g, '');
            const cepApenasNumeros = parseInt(cep.replace(/\D/g, ''), 10);
            const numeroEnderecoNumeros = parseInt(numeroEndereco);
            const rendaPfloat = parseFloat(renda);
            const numeroMoradoresNumeros = parseInt(numeroMoradores);



            const dados = {
                nomeCompleto,
                email,
                cpf: cpfApenasNumeros,
                dataNascimento,
                sexo: sexosSelecionado, // Correspondente a "sexo"
                rg: rgApenasnumeros,
                idade,
                nomeMae,
                telefone,
                cep: cepApenasNumeros,
                cidade,
                rua,
                uf: ufSelecionado,
                bairro,
                numeroEndereco: numeroEnderecoNumeros,
                escolaridade: escolaridadesSelecionado, // Correspondente a "escolaridade"
                racaCor: racaCorSelecionado,
                faixaEtaria,
                estadoCivil: estadosCivilSelecionado, // Correspondente a "estadoCivil"
                pcd: pcdSelecionado === 'sim' ? true : false,
                tipoPcd: deficienciasSelecionado, // Correspondente a "tipoPcd"
                cursoSuperior,
                renda: rendaPfloat,
                emprego,
                numeroMoradores: numeroMoradoresNumeros,
                grupo: gruposSelecionado // Correspondente a "grupo"
            };

            // const jsonString = JSON.stringify(dados);
            try {
                const response = await axios.post('http://localhost:4000/dados', dados);
                console.log('sucesso', response.data)
                setMensagemSucesso('Formulário enviado com sucesso!');

                setTimeout(() => {
                    window.location.reload();
                }, 2000);

            } catch (error) {
                console.error('error', error);
            }
        } else {
            setErro('Por favor, preencha todos os campos obrigatórios, marcados com *');
        }
    };

    return (
        <div className='Cadastro'>
            <h1>Cadastro de usuário</h1>
            <p>Cadastre um novo usuário</p><br />
            <form onSubmit={handleSubmit} className='form-cadastro'>
                <p>Dados Pessoais</p>
                <span></span><br />
                <div className='container'> {/*Dados Pessoais começo*/}
                    <div className='container-products'> {/*Nome/dataNasc/Idade*/}
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
                    <div className='container-products'> {/*Email/Sexo/NomeMae*/}
                        <label htmlFor='email'>Email*</label>
                        <input type='email'
                            className='Cadastro-inputs'
                            id='email'
                            placeholder='seuEmail@email.com'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        /><br />
                        <label htmlFor='sexo'>Sexo*</label>
                        <select name='sexo'
                            id='sexo'
                            className='Cadastro-inputs-select'
                            value={sexosSelecionado}
                            onChange={(e) => setSexosSelecionados(e.target.value)}
                        ><option value="">Selecione uma opção</option>
                            {sexos.map((sexo) => (
                                <option key={sexo.value} value={sexo.value}>
                                    {sexo.descricao}
                                </option>
                            ))}
                        </select><br />
                        <label htmlFor='nomeMae'>Nome da mãe</label>
                        <input type='text'
                            className='Cadastro-inputs'
                            id='nomeMae'
                            placeholder='insira o nome da mãe'
                            value={nomeMae}
                            onChange={(e) => setnomeMae(e.target.value)}
                        /><br />
                    </div>
                    <div className='container-products'> {/*Cpf/Rg/Telefone*/}
                        <label htmlFor='cpf'>Cpf*</label>
                        <InputMask
                            mask="999.999.999-99"
                            value={cpf}
                            onChange={(e) => setCpf(e.target.value)}
                            className='Cadastro-inputs'>
                            {(inputProps) => <input {...inputProps} type="text" id="cpf" />}
                        </InputMask>
                        <br />
                        <label htmlFor='RG'>RG*</label>
                        <InputMask
                            mask="9.999.999"
                            value={rg}
                            onChange={(e) => setRg(e.target.value)}
                            className='Cadastro-inputs'>
                            {(inputProps) => <input {...inputProps} type="text" id="rg" />}
                        </InputMask>
                        <br />
                        <label htmlFor='Num-contato'>Número para contato</label>
                        <InputMask
                            mask="(99)99999-9999"
                            value={telefone}
                            onChange={(e) => setTelefone(e.target.value)}
                            className='Cadastro-inputs'>
                            {(inputProps) => <input {...inputProps} type="text" id="telefone" />}
                        </InputMask>
                        <br />
                    </div>
                </div>{/*Dados Pessoais fim*/}

                <p>Endereço</p>
                <span></span><br />
                <div className='container'>{/*Endereço começo*/}
                    <div className='container-products'> {/*Cep/Uf*/}
                        <label htmlFor='cep'>Cep</label> {/*Cep*/}
                        <input type='number'
                            className='Cadastro-inputs'
                            id='cep'
                            placeholder='00000000'
                            value={cep}
                            onChange={handleCEPChange}
                        /><br />
                        <label htmlFor='Estado'>Estado</label>{/*Uf*/}
                        <select name='uf'
                            id='uf'
                            className='Cadastro-inputs-select'
                            value={ufSelecionado}
                            onChange={(e) => setUfSelecionado(e.target.value)}
                        ><option value="">Selecione um estado</option>
                            {uf.map((uf) => (
                                <option key={uf.sigla} value={uf.sigla}>
                                    {uf.nome}
                                </option>
                            ))}
                        </select><br />
                    </div>
                    <div className='container-products'> {/*Cidade/Bairro*/}
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
                    <div className='container-products'> {/*Rua/Endereço*/}
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
                    <div className='container-products'> {/*Escolaridade/CursoSuperior/Emprego*/}
                        <label htmlFor='escolaridade'>Escolaridade*</label>
                        <select name='escolaridade'
                            id='escolaridade'
                            className='Cadastro-inputs-select'
                            value={escolaridadesSelecionado}
                            onChange={(e) => setEscolaridadesSelecionado(e.target.value)}>
                            <option value="">Selecione uma opção</option>
                            {escolaridades.map((escolaridades) => (
                                <option key={escolaridades.value} value={escolaridades.value}>
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
                    <div className='container-products'> {/*RacaCor/Renda/Moradores*/}
                        <label htmlFor='etnia'>Raça/cor*</label>
                        <select name='etnia'
                            id='etnia'
                            className='Cadastro-inputs-select'
                            value={racaCorSelecionado}
                            onChange={(e) => setRacaCorSelecionado(e.target.value)}
                        ><option value="">Selecione uma opção</option>
                            {racaCor.map((racaCor) => (
                                <option key={racaCor.value} value={racaCor.value}>
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
                    <div className='container-products'> {/*Pcd?/TipoDefi/Grupo/EstadoCivil*/}
                        <label htmlFor='PCD'>Portador de deficiencias?*</label>
                        <select name='PCD'
                            id='PCD'
                            className='Cadastro-inputs-select'
                            value={pcdSelecionado}
                            onChange={(e) => setPcdSelecionado(e.target.value)}
                        ><option value="">Selecione uma opção</option>
                            {pcd.map((pcd) => (
                                <option key={pcd.value} value={pcd.value}>
                                    {pcd.descricao}
                                </option>
                            ))}
                        </select><br />
                        <label htmlFor='tipo-PCD'>Tipo de dificiencia</label>
                        <select name='tipo-PCD'
                            id='tipo-PCD'
                            className='Cadastro-inputs-select'
                            value={deficienciasSelecionado}
                            onChange={(e) => setDeficienciasSelecionado(e.target.value)}>
                            <option value="">Selecione uma opção</option>
                            {deficiencias.map((deficiencia) => (
                                <option key={deficiencia.value} value={deficiencia.value}>
                                    {deficiencia.descricao}
                                </option>
                            ))}
                        </select><br />
                        <label htmlFor="grupo">Grupo</label>
                        <select name='grupo'
                            id='grupo'
                            className='Cadastro-inputs-select'
                            value={gruposSelecionado}
                            onChange={(e) => setGruposSelecionado(e.target.value)}>
                            <option value="">Selecione uma opção</option>
                            {grupos.map((grupo) => (
                                <option key={grupo.value} value={grupo.value}>
                                    {grupo.descricao}
                                </option>
                            ))}
                        </select><br />
                        <label htmlFor='estadoCivil'>Estado Civil*</label>
                        <select name='estadoCivil'
                            id='estadoCivil'
                            className='Cadastro-inputs-select'
                            value={estadosCivilSelecionado}
                            onChange={(e) => setEstadosCivilSelecionado(e.target.value)}>
                            <option value="">Selecione uma opção</option>
                            {estadosCivil.map((estado) => (
                                <option key={estado.value} value={estado.value}>
                                    {estado.descricao}
                                </option>
                            ))}
                        </select><br />
                    </div>
                </div>{/*Pesquisa social fim*/}
                {erro && <div className="erro">{erro}</div>}
                {mensagemSucesso && (<div className="sucesso">{mensagemSucesso}</div>)}
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