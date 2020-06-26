import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";

export default function Cadastrar(){

    const history = useHistory();
    var storage;

    // function Voltar(){
    //     history.push('/login');
    // }

    if (localStorage.getItem('Usuários') === null) {
        storage = [];
    } else {
        storage = JSON.parse(localStorage.getItem('Usuários'));
    }

    const [dados, setDados] = useState(storage);

    const [nome, setNome] = useState('');
    const [usuario, setUsuario] = useState('');
    const [senha, setSenha] = useState('');
    const [senhan, setSenhaN] = useState('');
    const [contadorCadastro, setContadorCadastro] = useState(0);

    const avisosCadastro = [
        { texto: '' },
        { texto: 'Os campos devem ser preenchidos obrigatóriamente!', className: 'danger' },
        { texto: 'O usuário digitado já existe!', className: 'warning' },
        { texto: 'Cadastro realizado com sucesso!', className:'success' },
        { texto: 'Senhas digitadas não são iguais!', className:'warning' }
    ];

    // Verifica e cadastra um novo usuário
    const Cadastro = (event) => {

        const validaUsuario = dados.find(dados => dados.usuario === usuario);
        
        if (nome === '' || usuario === '' || senha === '' || senhan === '') {
            setContadorCadastro(1);
        } else if (validaUsuario) {
            setContadorCadastro(2);
        } else if (senha !== senhan){
            setContadorCadastro(4);
        } else {
            setDados([
                ...dados,
                { nome: nome, usuario: usuario, senha: senha, senhan: senhan }
            ]);
            setContadorCadastro(3);
            setTimeout(function(){ history.push('/login'); }, 1000); 
        }
        event.preventDefault();
    }

    useEffect(() => {
        localStorage.setItem('Usuários', JSON.stringify(dados));
    });

    const Nome = (event) => {
        var texto = event.target.value;
        setNome(texto);
    }
    const Usuario = (event) => {
        var texto = event.target.value;
        setUsuario(texto);
    }
    const Senha = (event) => {
        var texto = event.target.value;
        setSenha(texto);
    }
    const SenhaN = (event) => {
        var texto = event.target.value;
        setSenhaN(texto);
    }

    return (
        <form>
            <h1 style={{marginLeft:'80px'}}>Cadastre-se</h1>
            <input onChange={Nome} type='text' placeholder='Nome...'></input>
            <input onChange={Usuario} type='text' placeholder='Usuário...'></input>
            <input onChange={Senha} type='password' placeholder='Senha...'></input>
            <input onChange={SenhaN} type='password' placeholder='Senha Novamente...'></input>
            <br/>
            <span style={{marginLeft:'30px'}} className={avisosCadastro[contadorCadastro].className}>{avisosCadastro[contadorCadastro].texto}</span>
            <br/>
            {/* <button style={{marginLeft:'50px'}} onClick={Voltar}>Voltar</button> */}
            <button style={{marginLeft:'110px'}} onClick={Cadastro}>Cadastrar</button>
        </form>
    );
}