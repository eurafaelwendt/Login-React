import React, { useState } from 'react';
import { useHistory } from "react-router-dom";

export default function Login() {

    const history = useHistory();
    const [contadorEntrada, setContadorEntrada] = useState(0);
    var storage;

    const Voltar = () => {
        history.push('/');
    }

    const avisosEntrada = [
        { texto: '' },
        { texto: 'Usuário ou senha não encontrado!', className: 'danger' },
        { texto: 'Os campos devem ser preenchidos obrigatóriamente!', className: 'danger'}
    ];

    if (localStorage.getItem('Usuários') === null) {
        storage = [];
    } else {
        storage = JSON.parse(localStorage.getItem('Usuários'));
    }

    const [usuarios] = useState(storage);
    const [usuario, setUsuario] = useState('');
    const [senha, setSenha] = useState('');

    // Pega o conteúdo digitado no input Usuário
    const inputUsuario = event => {

        var texto = event.target.value;
        setUsuario(texto);
    }

    // Pega o conteúdo digitado no input Senha
    const inputSenha = event => {

        var texto = event.target.value;
        setSenha(texto);
    }

    // Verifica e realiza a autenticação do usuário
    const Entrar = (event) => {

        const pass = usuarios.find(nome => {
            if (nome.usuario === usuario){
                if (nome.senha === senha){
                    return nome;
                }
            }
        });

        if (usuario === '' || senha === '') {
            setContadorEntrada(2);
        } else if (pass) {
            localStorage.setItem('Login', JSON.stringify(pass));
            history.push('/home');
        } else {
            setContadorEntrada(1);
        }
        event.preventDefault();
    }

    const Users = () => {
        history.push('/usuarios');
    }

    return (
        <form>
            <h1 style={{marginLeft:'110px'}}>Entrar</h1>
            <input autoComplete='off' type='text' name='name' placeholder='Usuário...' onChange={inputUsuario}></input>
            <br></br>
            <input autoComplete='off' type='password' name='pass' placeholder='Senha...' onChange={inputSenha}></input>
            <br />
            <p style={{marginLeft:'60px', color: 'grey'}}>Não tem uma conta? <a href='/cadastro' style={{textDecoration:'none', color:'#3498DB'}}>Crie uma!</a></p>
            <span style={{marginLeft:'30px'}} className={avisosEntrada[contadorEntrada].className}>{avisosEntrada[contadorEntrada].texto}</span>
            <br />
            <button style={{marginLeft:'55px'}} onClick={Voltar}>Voltar</button>
            <button onClick={Entrar}>Entrar</button>
            {/* <button onClick={Cadastro}>Cadastrar-se</button> */}
            <br></br>
            <button style={{marginLeft:'85px'}} onClick={Users}>Listar usuários</button>
        </form>
    );
}