import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";

export default function () {

    const history = useHistory();
    var login, storage;

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

    const Sim = (event) => {
        const novo = dados.filter(dados => (dados.usuario !== login.usuario))
        setDados(novo);
        setTimeout(function(){ history.push('/login'); }, 1000);
        event.preventDefault();
    }

    useEffect(() => {
        localStorage.setItem('Usuários', JSON.stringify(dados)); 
    });

    const Nao = () => {
        history.push('/Edit');
    }

    return (
        <div className='container'>
            <h1>Deseja excluir sua conta?</h1>
            <button onClick={Nao}>Não</button>
            <button style={{backgroundColor:'red'}} onClick={Sim}>Sim</button>
        </div>
    );
}