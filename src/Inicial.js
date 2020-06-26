/* eslint-disable jsx-a11y/alt-text */
import React, { Fragment } from 'react';
import { useHistory } from "react-router-dom";
// import fundo from "./Imagens/fundo.jpg";

export default function Inicial(){

    const history = useHistory();

    const Entrar = () => {
        history.push('/login');
    }

    return (
        <Fragment>
             <div className='fundo'>
                <div className='inicial'>
                    <img src='Imagens/logo.png' className='logo'></img>
                    <button className='button-inicial'>Artigos</button>
                    <button style={{marginLeft:'20px'}} onClick={Entrar} className='button-inicial'>Entrar</button>
                </div>
                <div className='conteudo'>
                    <input className='input-inicial' type='text' placeholder='Pesquisar artigo...'></input>
                    <button style={{height:'50px', borderRadius:'10px', backgroundColor:'grey'}}>
                        GO
                    </button>
                </div>
                </div>
        </Fragment>
    );
}