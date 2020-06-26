import React, { Fragment } from 'react';
import { useHistory } from "react-router-dom";

export default function Home() {

    const history = useHistory();
    var storage, conteudo;

    const LogOut = () => {
        localStorage.removeItem('Login');
        history.push('/');
    }

    const Editar = () => {
        history.push('/edit');
    }

    const Adicionar = () => {
        history.push('/Adiciona');
    }

    if (localStorage.getItem('Login') === null) {
        storage = [];
    } else {
        storage = JSON.parse(localStorage.getItem('Login'));
    }

    if (localStorage.getItem('Conteudo') === null) {
        conteudo = [];
    } else {
        conteudo = JSON.parse(localStorage.getItem('Conteudo'));
    }

    const coresQuadro = [
        { className: 'verde' },
        { className: 'azul' },
        { className: 'amarelo' },
        { className: 'cinza' },
        { className: 'laranja' },
        { className: 'rosa' },
    ];

    const Quadros = () => {
        const quadros = conteudo.map((i) => {
        var cor = parseInt(Math.random() * 6);
            return(
                <div className={coresQuadro[cor].className}>
                    <h1 className={coresQuadro[cor].className} style={{border:'none', boxShadow:'none', margin:'0px', padding:'0px', width:'100%'}}>{i.titulo}</h1>
                    <p>{i.texto}</p>
                </div>
            );
        });

        return (
            <div>{quadros}</div>
        );
    }

    return (
        <Fragment>
            <div className='container'>
                <h1>Bem vindo(a) {storage.nome}!</h1>
                <span className='span-home' onClick={LogOut}>&#10094; Sair</span>
                <span className='span-home' onClick={Editar}>&#9998; Editar</span>
                <label className='span-home' onClick={Adicionar}>&#10010; Adicionar</label>
            </div>
            <Quadros></Quadros>
        </Fragment>
    );
}