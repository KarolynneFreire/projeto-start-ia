import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'

import '../css/Cadastro.css'



const Cadastro = () => {

    const [cep, setCep] = useState('');
    const [user, setUser] = useState({});
    
    const handleCEPChange = (e) => {
        const newCEP = e.target.value.replace(/\D/g, '');
        setCep(newCEP);
      };

      useEffect(() => {
        const fetchUserByCEP = async () => {
          try {
            const url = `https://brasilapi.com.br/api/cep/v1/${cep}`;
            const response = await axios.get(url);
            setUser(response.data);
            console.log(response.data)
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

    return (
        <div>
            <h1>Cadastro de usuário</h1>
            <p>Cadastre um novo usuário</p><br />
            <form action=''>
                <p>Dados Pessoais</p>
                <span></span><br />
                <div className='container'>{/*Dados Pessoais começo*/}
                    <div className='container-products'>
                        <label htmlFor='nome'>Nome*</label>
                        <input type='text' className='Cadastro-inputs' id='nome' placeholder='Insira o nome completo' /><br />
                        <label htmlFor='data-nasc'>Data de nascimento*</label>
                        <input type='date' className='Cadastro-inputs' id='data-nasc' /><br />
                        <label htmlFor='idade'>Idade</label>
                        <input type='number' className='Cadastro-inputs' id='idade' placeholder='ex: 21' /><br />
                    </div>
                    <div className='container-products'>

                        <label htmlFor='email'>Email</label>
                        <input type='email' className='Cadastro-inputs' id='email' placeholder='seuEmail@email.com' /><br />
                        <label htmlFor='sexo'>Sexo*</label>
                        <select name='sexo' id='sexo' className='Cadastro-inputs-select'>
                            <option value=''></option>
                            <option value='F'>Feminino</option>
                            <option value='M'>Masculino</option>
                        </select><br />
                        <label htmlFor='mae'>Nome da mãe*</label>
                        <input type='text' className='Cadastro-inputs' id='mae' placeholder='insira o nome da mãe' /><br />
                    </div>
                    <div className='container-products'>
                        <label htmlFor='cpf'>Cpf</label>
                        <input type='number' className='Cadastro-inputs' id='cpf' placeholder='insira seu CPF' /><br />
                        <label htmlFor='RG'>RG</label>
                        <input type='number' className='Cadastro-inputs' id='rg' placeholder='insira o seu RG' /><br />
                        <label htmlFor='Num-contato'>Número para contato</label>
                        <input type='number' className='Cadastro-inputs' id='telefone' placeholder='insira o número para contato' /><br />
                    </div>
                </div>{/*Dados Pessoais fim*/}

                <p>Endereço</p>
                <span></span><br />
                <div className='container'>{/*Endereço começo*/}
                    <div className='container-products'>
                        <label htmlFor='cep'>Cep</label>
                        <input type='number' className='Cadastro-inputs' id='cep' placeholder='00000000' value={cep} onChange={handleCEPChange}/><br />
                        <label htmlFor='uf'>Estado</label>
                        <select name='uf' id='uf' className='Cadastro-inputs-select'>
                            <option value={user.state}>{user.state}</option>
                            <option value='AC'>Acre</option>
                            <option value='AL'>Alagoas</option>
                            <option value="AP">Amapá</option>
                            <option value="AM">Amazonas</option>
                            <option value="BA">Bahia</option>
                            <option value="CE">Ceará</option>
                            <option value="DF">Distrito Federal</option>
                            <option value="ES">Espírito Santo</option>
                            <option value="GO">Goiás</option>
                            <option value="Ma">Maranhão</option>
                            <option value="MT">Mato Grosso</option>
                            <option value="MS">Mato Grosso do Sul</option>
                            <option value="MG">Minas Gerais</option>
                            <option value="PA">Pará</option>
                            <option value="PB">Paraíba</option>
                            <option value="PR">Paraná</option>
                            <option value="PE">Pernambuco</option>
                            <option value="PI">Piauí</option>
                            <option value="RJ">Rio de Janeiro</option>
                            <option value="RN">Rio Grande do Norte</option>
                            <option value="RS">Rio Grande do Sul</option>
                            <option value="Ro">Rondônia</option>
                            <option value="RR">Roraima</option>
                            <option value="SC">Santa Catarina</option>
                            <option value="SP">São Paulo</option>
                            <option value="SE">Sergipe</option>
                            <option value="TO">Tocantins</option>
                        </select><br />
                    </div>
                    <div className='container-products'>
                        <label htmlFor='cidade'>Cidade</label>
                        <input type='text' className='Cadastro-inputs' id='cidade' placeholder='ex: Recife' value={user.city}/><br />
                        <label htmlFor='bairro'>Bairro</label>
                        <input type='text' className='Cadastro-inputs' id='bairro' placeholder='ex: Boa Vista' value={user.neighborhood}/><br />
                    </div>
                    <div className='container-products'>
                        <label htmlFor='rua'>Rua</label>
                        <input type='text' className='Cadastro-inputs' id='rua' placeholder='ex: Cais do Apolo' value={user.street}/><br />
                        <label htmlFor='n-endereco'>Nº da casa</label>
                        <input type='number' className='Cadastro-inputs' id='n-endereco' placeholder='ex: 925' /><br />
                    </div>
                </div>{/*Endereço fim*/}

                <p>Pesquisa Social</p>
                <span></span><br />
                <div className='container'>{/*Pesquisa social começo*/}
                    <div className='container-products'>
                        <label htmlFor='escolaridade'>Escolaridade*</label>
                        <select name='escolaridade' id='escolaridade' className='Cadastro-inputs-select'>
                            <option value=''></option>
                            <option value='Ensino fundamental incompleto'>Ensino fundamental incompleto</option>
                            <option value='Ensino fundamental Completo'>Ensino fundamental Completo</option>
                            <option value='Ensino médio inconpleto'>Ensino médio inconpleto</option>
                            <option value='Ensino médio Completo'>Ensino médio Completo</option>
                            <option value='Técnico/profissionalizante'>Técnico/profissionalizante</option>
                            <option value='Superio incompleto'>Superio incompleto</option>
                            <option value='Superio Completo'>Superio Completo</option>
                        </select><br />
                        <div className='for-acad'>
                            <label htmlFor="faculdade">Curso </label>
                            <p>(caso tenha feito o ensino superior)</p>
                        </div>
                        <input type="text" className='Cadastro-inputs' id='faculdade' placeholder='insira seu curso de fromação' /><br />
                        <label htmlFor="emprego">Emprego</label>
                        <input type="text" className='Cadastro-inputs' id='emprego' placeholder='insira seu emprego' /><br />
                    </div>
                    <div className='container-products'>
                        <label htmlFor='etnia'>Raça/cor*</label>
                        <select name='etnia' id='etnia' className='Cadastro-inputs-select'>
                            <option value=''></option>
                            <option value='Preto'>Preto</option>
                            <option value='Pardo'>Pardo</option>
                            <option value='Branco'>Branco</option>
                            <option value='Indígena'>Indigína</option>
                            <option value='Amarelo'>Amarelo</option>
                        </select><br />
                        <label htmlFor='renda'>Renda</label>
                        <input type='number' className='Cadastro-inputs' id='renda' placeholder='ex: 1800.00' /><br />
                        <label htmlFor='n-moradores'>Nº de moradores na residencia</label>
                        <input type='number' className='Cadastro-inputs' id='n-moradores' placeholder='ex: 5' /><br />
                    </div>
                    <div className='container-products'>
                        <label htmlFor='PCD'>Portador de deficiencia*</label>
                        <select name='PCD' id='PCD' className='Cadastro-inputs-select'>
                            <option value=''></option>
                            <option value='S'>Sim</option>
                            <option value='N'>Não</option>
                        </select><br />
                        <label htmlFor='tipo-PCD'>Tipo de dificiencia</label>
                        <select name='tipo-PCD' id='tipo-PCD' className='Cadastro-inputs-select'>
                            <option value=''></option>
                            <option value='fisica'>Deficiência física</option>
                            <option value='auditiva'>Deficiência auditiva</option>
                            <option value='visual'>Deficiência visual</option>
                            <option value='intelectual'>Deficiência intelectual</option>
                            <option value='psicossocial ou por saúde mental'>Deficiência psicossocial ou por saúde mental</option>
                            <option value='múltipla'>Deficiência múltipla</option>
                        </select><br />
                        <label htmlFor="grupo">Grupo</label>
                        <select name='grupo' id='grupo' className='Cadastro-inputs-select'>
                            <option value=''></option>
                            <option value='caminhoneiros'>Caminhoneiros</option>
                            <option value='gest-puer'>Gestantes e puérperas</option>
                            <option value='gest-puer-Nrec'>Gestantes e puérperas não residentes de recife</option>
                            <option value='idosos'>idosos</option>
                            <option value='p-geral'>Público em geral</option>
                            <option value='p-comorbidades'>Pessoa com comorbidades</option>
                            <option value="p-viagem-ext">Pessoa com viagem para o exterior</option>
                            <option value="p-situação-r">Pessoa em situação de rua</option>
                            <option value="sesau-busca-atv">Sesau - Busca ativa</option>
                            <option value="trab-assis-social">Trabalhadores da Assistencia Social</option>
                            <option value="trab-educa">Trabalhadores da Educação</option>
                            <option value="trab-limp-urb">Trabalhadores da limpeza urbana</option>
                            <option value="trab-saude">Trabalhadores da saúde</option>
                            <option value="trab-transp-aereo">Trabalhadores de transporte aéreo</option>
                            <option value="trab-transp-aqua">Trabalhadores de transporte aquaviário</option>
                            <option value="trab-transp-rodo">Trabalhadores de transporte rodoviário</option>
                            <option value="trab-transp-ferro-metro">Trabalhadores de transporte metroviário e ferroviário</option>
                            <option value="trab-indust-banc">Trabalhadores industriais e bancarios</option>
                            <option value="trab-portuario">Trabalhadores portuarios</option>
                            <option value="outros">outros</option>
                        </select><br />
                    </div>
                </div>{/*Pesquisa social fim*/}
                <button type="button" className='form-btn-cadastro'>Enviar</button>
            </form>
        </div>
    )
}

export default Cadastro;