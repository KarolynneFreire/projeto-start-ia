import React from 'react'

import '../css/Cadastro.css'

const Cadastro = () => {
    return (
        <div>
            <h1>Cadastro de usuário</h1>
            <h3>Cadastre um novo usuário</h3><br />
            <form action="">
                <h3>Dados Pessoais</h3><br />
                <p>Nome</p>
                <input type="text" className='Cadastro-inputs' placeholder='Insira o nome completo'/>
                <p>Data de nascimento</p>
                <input type="date" className='Cadastro-inputs' />
                <p>Escolaridade</p>
                <select name="Escolaridade" id="Escolaridade" className='Cadastro-inputs-select' aria-placeholder=''>
                    <option value=""></option>
                    <option value="Ensino fundamental incompleto">Ensino fundamental incompleto</option>
                    <option value="Ensino fundamental Completo">Ensino fundamental Completo</option>
                    <option value="Ensino médio inconpleto">Ensino médio inconpleto</option>
                    <option value="Ensino médio Completo">Ensino médio Completo</option>
                    <option value="Técnico/profissionalizante">Técnico/profissionalizante</option>
                    <option value="Superio incompleto">Superio incompleto</option>
                    <option value="Superio Completo">Superio Completo</option>
                </select>
                <p>Raça/cor</p>
                <select name="Etnia" id="Etnia" className='Cadastro-inputs-select'>
                    <option value=""></option>
                    <option value="Preto">Preto</option>
                    <option value="Pardo">Pardo</option>
                    <option value="Branco">Branco</option>
                    <option value="Indígena">Indigína</option>
                    <option value="Amarelo">Amarelo</option>
                </select>
                <p>Renda</p>
                <input type="number" className='Cadastro-inputs' />
                <h3>Endereço</h3>
                <p>Cep</p>
                <input type="number" className='Cadastro-inputs'/>
                <p>Estado</p>
                <input type="text" className='Cadastro-inputs'/>
                <p>Cidade</p>
                <input type="text" className='Cadastro-inputs'/>
                <p>Bairro</p>
                <input type="text" className='Cadastro-inputs'/>
                <p>Rua</p>
                <input type="text" className='Cadastro-inputs'/>
                <p>Nº da casa</p>
                <input type="number" className='Cadastro-inputs'/>
            </form>
        </div>
    )
}

export default Cadastro;