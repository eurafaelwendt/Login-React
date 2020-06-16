import React, { Fragment } from 'react';
import { useHistory } from "react-router-dom";

export default function Home() {

    const history = useHistory();
    var storage;
    
    const LogOut = () => {
        localStorage.removeItem('Login');
        history.push('/login');
    }

    const Editar = () => {
        history.push('/edit');
    }

    if (localStorage.getItem('Login') === null) {
        storage = [];
    } else {
        storage = JSON.parse(localStorage.getItem('Login'));
    }

    return (
        <Fragment>
            <h1>Bem vindo(a) {storage.nome}!</h1>
            <button onClick={LogOut}>Logout</button>
            <button onClick={Editar}>Editar</button>
        </Fragment>
    );
}