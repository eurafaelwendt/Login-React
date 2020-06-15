import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";

export default function Login() {

    const history = useHistory();

    const [contadorCadastro, setContadorCadastro] = useState(0);
    const [contadorEntrada, setContadorEntrada] = useState(0);
    var storage;

    const avisosCadastro = [
        { texto: '' },
        { texto: 'O campo deve ser preenchido obrigatóriamente!', className: 'danger' },
        { texto: 'O nome digitado já existe!', className: 'warning' },
        { texto: 'Cadastro realizado com sucesso!', className:'success' }
    ];

    const avisosEntrada = [
        { texto: '' },
        { texto: 'Usuário digitado não encontrado!', className: 'danger' }
    ];

    if (localStorage.getItem('Usuários') === null) {
        storage = [];
    } else {
        storage = JSON.parse(localStorage.getItem('Usuários'));
    }

    const [usuarios, setUsuarios] = useState(storage);
    const [value, setValue] = useState('');

    // Pega o conteúdo digitado no input
    const Conteudo = event => {

        const texto = event.target.value;

        setTimeout(() => {
            setValue(texto);
        }, 0)
    }

    // Verifica e cadastra um novo usuário
    const Cadastro = (event) => {

        const valida = usuarios.find(usuario => usuario.nome === value);
        if (value === '') {
            setContadorEntrada(0);
            setContadorCadastro(1);
        } else if (valida) {
            setContadorEntrada(0);
            setContadorCadastro(2);
        } else {
            setUsuarios([
                ...usuarios,
                { nome: value }
            ]);
            setContadorEntrada(0);
            setContadorCadastro(3);
        }
        event.preventDefault(5000);
    }

    useEffect(() => {
        localStorage.setItem('Usuários', JSON.stringify(usuarios));
    });

    // Verifica e realiza a autenticação do usuário
    const Entrar = (event) => {

        const login = usuarios.find(usuario => usuario.nome === value);

        if (value === '') {
            setContadorCadastro(1);
        } else if (login) {
            setContadorCadastro(0);
            history.push('/home');
        } else {
            setContadorCadastro(0);
            setContadorEntrada(1);
        }
        event.preventDefault();
    }

    return (
        <form>
            <h1>Empresas Moura</h1>
            <input autoComplete='off' type='text' name='name' placeholder='Nome...' onChange={Conteudo}></input>
            <br />
            <span className={avisosCadastro[contadorCadastro].className}>{avisosCadastro[contadorCadastro].texto}</span>
            <span className={avisosEntrada[contadorEntrada].className}>{avisosEntrada[contadorEntrada].texto}</span>
            <br />
            <button onClick={Entrar}>Entrar</button>
            <button onClick={Cadastro}>Cadastrar</button>
        </form>
    );
}