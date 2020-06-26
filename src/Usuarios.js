import React, { Fragment } from 'react';

export default function Usuarios(){

    var storage;

    if (localStorage.getItem('Usuários') === null) {
        storage = [];
    } else {
        storage = JSON.parse(localStorage.getItem('Usuários'));
    }

    const TableHead = () => {
        return (
            <thead>
                <tr>
                    <th>Usuários</th>
                    <th>Nomes</th>
                </tr>
            </thead>
        );
    }
    
    const TableBody = () => {
        const linhas = storage.map((user) => {
                return (
                    <tr>
                        <td>{user.usuario}</td>
                        <td>{user.nome}</td>
                    </tr>
                );
            });
        
        return (
            <tbody>
                {linhas}
            </tbody>
        );
    }

    return (
        <Fragment>
            <table>
                <TableHead></TableHead>
                <TableBody></TableBody>
            </table>
        </Fragment>
    );
}