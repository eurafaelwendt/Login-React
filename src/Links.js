import React from 'react';
import { Link } from 'react-router-dom';

export default function Links(){
    return (
        <nav>
            <Link to='/login'></Link>
            <Link to='/cadastro'></Link>
            <Link to='/home'></Link>
            <Link to='/edit'></Link>
            <Link to='/usuarios'></Link>
            <Link to='/excluir'></Link>
            <Link to='/adiciona'></Link>
        </nav>
    );
}