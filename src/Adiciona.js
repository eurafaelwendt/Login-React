import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";

export default function Adiciona(){

    const [titulo, setTitulo] = useState('');
    const [texto, setTexto] = useState('');
    const history = useHistory();
    var storage;

    if (localStorage.getItem('Conteudo') === null) {
        storage = [];
    } else {
        storage = JSON.parse(localStorage.getItem('Conteudo'));
    }

    const [conteudo, setConteudo] = useState(storage);

    const [contadorCadastro, setContadorCadastro] = useState(0);

    const avisosCadastro = [
        { texto: '' },
        { texto: 'Os campos devem ser preenchidos obrigatóriamente!', className: 'danger' },
        { texto: 'Conteúdo cadastrado com sucesso!', className:'success' }
    ];

    const Titulo = (event) => {
        const tit = event.target.value;
        setTitulo(tit);
    }

    const Texto = (event) => {
        const txt = event.target.value;
        setTexto(txt);
    }

    const Salvar = (event) => {

        if (titulo === '' || texto === '') {
            setContadorCadastro(1);
        } else {
            setConteudo([...conteudo, {titulo: titulo, texto: texto}]);
            setContadorCadastro(2);
            setTimeout(function(){ history.push('/home'); }, 1000); 
        }
        event.preventDefault();
    }

    useEffect(() => {
        localStorage.setItem('Conteudo', JSON.stringify(conteudo));
    });

    return(
        <form>
            <h1 style={{marginLeft:'50px'}}>Novo Conteúdo</h1>
            <label>Título:</label>
            <br></br>
            <input placeholder='Título...' onChange={Titulo}></input>
            <br></br>
            <label>Texto:</label>
            <br></br>
            <textarea onChange={Texto} cols='40' rows='20' placeholder='Texto...' style={{borderRadius:'5px', padding:'10px', marginLeft:'10px'}}></textarea>
            <br></br>
            <span style={{marginLeft:'30px'}} className={avisosCadastro[contadorCadastro].className}>{avisosCadastro[contadorCadastro].texto}</span>
            <br></br>
            <button onClick={Salvar} style={{marginLeft:'120px'}}>Salvar</button>
        </form>
    );
}