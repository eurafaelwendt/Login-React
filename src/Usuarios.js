import React, { Fragment } from 'react';
import { useHistory } from "react-router-dom";

export default function Usuarios(){

    const history = useHistory();
    var storage;

    if (localStorage.getItem('Usuários') === null) {
        storage = [];
    } else {
        storage = JSON.parse(localStorage.getItem('Usuários'));
    }
    
    // const [lista] = useState(storage);
    // console.log(storage[1].usuario);

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

    const Voltar = () => {
        history.push('/login');
    }

    return (
        <Fragment>
            <table>
            <TableHead></TableHead>
            <TableBody></TableBody>
        </table>
        <button style={{width:'100px'}} onClick={Voltar}>Voltar</button>
        </Fragment>
    );
}