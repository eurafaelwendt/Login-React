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
        event.preventDefault();
    }

    useEffect(() => {
        localStorage.setItem('Usuários', JSON.stringify(dados));
        setTimeout(function(){ history.push('/login'); }, 2000); 
    });

    const Nao = () => {
        history.push('/Edit');
    }

    return (
        <div>
            <h1>Deseja exluir a sua conta?</h1>
            <button onClick={Nao}>Não</button>
            <button onClick={Sim}>Sim</button>
        </div>
    );
}