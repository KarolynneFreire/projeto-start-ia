import React from 'react'

import '../css/Cadastro.css'

const Cadastro = () => {
    return (
        <div>
            <h1>Cadastro de usuário</h1>
            <p>Cadastre um novo usuário</p><br />
            <form action=''>
                <p>Dados Pessoais</p>
                <span></span><br />
                <div className='container'>{/*Dados Pessoais começo*/}
                    <div className='container-products'>
                        <label htmlFor="">Nome*</label>
                        <input type='text' className='Cadastro-inputs' placeholder='Insira o nome completo' /><br />
                        <label htmlFor="">Data de nascimento*</label>
                        <input type='date' className='Cadastro-inputs' /><br />
                        <label htmlFor="idade">Idade</label>
                        <input type="number" className='Cadastro-inputs' /><br />
                    </div>
                    <div className='container-products'>

                        <label htmlFor="">Email</label>
                        <input type="email" className='Cadastro-inputs' /><br />
                        <label htmlFor="">Sexo*</label>
                        <select name='sexo' id='sexo' className='Cadastro-inputs-select'>
                            <option value=""></option>
                            <option value="F">Feminino</option>
                            <option value="M">Masculino</option>
                        </select><br />
                        <label htmlFor="mae">Nome da mãe*</label>
                        <input type="text" className='Cadastro-inputs' /><br />
                    </div>
                    <div className='container-products'>
                        <label htmlFor="cpf">Cpf</label>
                        <input type="number" className='Cadastro-inputs' /><br />
                        <label htmlFor="RG">RG</label>
                        <input type="number" className='Cadastro-inputs' /><br />
                        <label htmlFor="Num-contato">Número para contato</label>
                        <input type="number" className='Cadastro-inputs' /><br />
                    </div>
                </div>{/*Dados Pessoais fim*/}

                <p>Endereço</p>
                <span></span><br />
                <div className='container'>{/*Endereço começo*/}
                    <div className='container-products'>
                        <label htmlFor="">Cep</label>
                        <input type='number' className='Cadastro-inputs' /><br />
                        <label htmlFor="">Estado</label>
                        <input type='text' className='Cadastro-inputs' /><br />
                    </div>
                    <div className='container-products'>
                        <label htmlFor="">Cidade</label>
                        <input type='text' className='Cadastro-inputs' /><br />
                        <label htmlFor="">Bairro</label>
                        <input type='text' className='Cadastro-inputs' /><br />
                    </div>
                    <div className='container-products'>
                        <label htmlFor="">Rua</label>
                        <input type='text' className='Cadastro-inputs' /><br />
                        <label htmlFor="">Nº da casa</label>
                        <input type='number' className='Cadastro-inputs' /><br />
                    </div>
                </div>{/*Endereço fim*/}

                <p>Pesquisa Social</p>
                <span></span><br />
                <div className='container'>{/*Pesquisa social começo*/}
                    <div className='container-products'>
                        <label htmlFor="">Escolaridade*</label>
                        <select name='Escolaridade' id='Escolaridade' className='Cadastro-inputs-select' aria-placeholder=''>
                            <option value=''></option>
                            <option value='Ensino fundamental incompleto'>Ensino fundamental incompleto</option>
                            <option value='Ensino fundamental Completo'>Ensino fundamental Completo</option>
                            <option value='Ensino médio inconpleto'>Ensino médio inconpleto</option>
                            <option value='Ensino médio Completo'>Ensino médio Completo</option>
                            <option value='Técnico/profissionalizante'>Técnico/profissionalizante</option>
                            <option value='Superio incompleto'>Superio incompleto</option>
                            <option value='Superio Completo'>Superio Completo</option>
                        </select><br />
                        <label htmlFor="">Raça/cor*</label>
                        <select name='Etnia' id='Etnia' className='Cadastro-inputs-select'>
                            <option value=''></option>
                            <option value='Preto'>Preto</option>
                            <option value='Pardo'>Pardo</option>
                            <option value='Branco'>Branco</option>
                            <option value='Indígena'>Indigína</option>
                            <option value='Amarelo'>Amarelo</option>
                        </select><br />
                    </div>
                    <div className='container-products'>
                        <label htmlFor="">Renda</label>
                        <input type='number' className='Cadastro-inputs' /><br />
                        <label htmlFor="">Nº de moradores na residencia</label>
                        <input type="number" className='Cadastro-inputs' /><br />
                    </div>
                    <div className='container-products'>
                        <label htmlFor="PCD">Portador de deficiencia*</label>
                        <select name='PCD' id='PCD' className='Cadastro-inputs-select'>
                            <option value=""></option>
                            <option value="S">Sim</option>
                            <option value="N">Não</option>
                        </select><br />
                        <label htmlFor="tipo-PCD">Tipo de dificiencia</label>
                        <select name='tipo-PCD' id='tipo-PCD' className='Cadastro-inputs-select'>
                            <option value=""></option>
                            <option value="fisica">Deficiência física</option>
                            <option value="auditiva">Deficiência auditiva</option>
                            <option value="visual">Deficiência visual</option>
                            <option value="intelectual">Deficiência intelectual</option>
                            <option value="psicossocial ou por saúde mental">Deficiência psicossocial ou por saúde mental</option>
                            <option value="múltipla">Deficiência múltipla</option>
                        </select><br />
                    </div>
                </div>{/*Pesquisa social fim*/}
                {/*grupo mt grande para colocar agr preguiça*/}
            </form>
        </div>
    )
}

export default Cadastro;