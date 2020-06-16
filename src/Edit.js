import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";

export default function Edit() {

    const history = useHistory();
    var login;
    var storage;

    const [nome, setNome] = useState('');
    const [usuario, setUsuario] = useState('');
    const [senha, setSenha] = useState('');
    const [senhan, setSenhaN] = useState('');
    const [contadorCadastro, setContadorCadastro] = useState(0);

    const avisosCadastro = [
        { texto: '' },
        { texto: 'Os campos devem ser preenchidos obrigatóriamente!', className: 'danger' },
        { texto: 'O nome de usuário deve ser diferente do atual!', className: 'warning' },
        { texto: 'Informações editadas com sucesso!', className: 'success' },
        { texto: 'Senhas digitadas não são iguais!', className: 'warning' }
    ];

    const Voltar = () => {
        history.push('/home');
    }

    if (localStorage.getItem('Login') === null) {
        login = [];
    } else {
        login = JSON.parse(localStorage.getItem('Login'));
    }

    if (localStorage.getItem('Usuários') === null) {
        storage = [];
    } else {
        storage = JSON.parse(localStorage.getItem('Usuários'));
    }

    const [dados, setDados] = useState(storage);
    const [dados_login, setDados_Login] = useState(login);

    const Verifica = (event) => {

        const validaUsuario = dados.find(dados => dados.usuario === usuario);

        if (nome === '' || usuario === '' || senha === '' || senhan === '') {
            setContadorCadastro(1);
        } else if (validaUsuario) {
            setContadorCadastro(2);
        } else if (senha !== senhan) {
            setContadorCadastro(4);
        } else {
            dados.filter(dados => {
                if (dados.nome === dados_login.nome && dados.usuario === dados_login.usuario && dados.senha === dados_login.senha && dados.senhan === dados_login.senhan) {

                    dados.nome = nome;
                    dados.usuario = usuario;
                    dados.senha = senha;
                    dados.senhan = senhan;

                    dados_login.nome = nome;
                    dados_login.usuario = usuario;
                    dados_login.senha = senha;
                    dados_login.senhan = senhan;

                    setContadorCadastro(3);
                }
            })
            setDados(dados);
            setDados_Login(dados_login);
        }
        setTimeout(function(){ history.push('/home'); }, 2000); 
        event.preventDefault();
    }

    useEffect(() => {
        localStorage.setItem('Login', JSON.stringify(dados_login));
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

    const Excluir = () => {
        history.push('/excluir');
    }

    return (
        <form>
            <h1>Informações</h1>
            <input onChange={Nome} type='text' placeholder='Novo nome...'></input>
            <br />
            <span>Nome atual: {login.nome}</span>
            <input onChange={Usuario} type='text' placeholder='Novo usuário...'></input>
            <br />
            <span>Usuario atual: {login.usuario}</span>
            <input onChange={Senha} type='text' placeholder='Nova senha...'></input>
            <br />
            <span>Senha atual: {login.senha}</span>
            <input onChange={SenhaN} type='text' placeholder='Senha Novamente...'></input>
            <br />
            <span>Senha atual: {login.senhan}</span>
            <br />
            <span className={avisosCadastro[contadorCadastro].className}>{avisosCadastro[contadorCadastro].texto}</span>
            <br />
            <button onClick={Voltar}>Voltar</button>
            <button onClick={Verifica}>Salvar</button>
            <button onClick={Excluir}>Excluir conta</button>
        </form>
    );
}