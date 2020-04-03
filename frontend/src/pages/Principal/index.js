import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';

import './styles.css';

import logoImg from '../../assets/logo.png';
import heroesImg from '../../assets/heroes.png';

export default function Logon() {
    const [id, setId] = useState('');
    const history = useHistory();

    async function handleLogin(e) {
        // e.preventDefault();

        // try {
        //     const response = await api.post('session', { id });

        //     localStorage.setItem('ongId', id);
        //     localStorage.setItem('ongName', response.data.name);

        //     history.push('/profile');
        // } catch (err) {
        //     alert('Falha no login, tente novamente.');
        // }
    }

    return(
        <div className="principal-container">
            <section className="form">
                <img className="logo" src={ logoImg } alt="Desafio kukac"/>

                <ul>
                    <h1>Qual desafio de hoje?</h1>

                    <li>
                        <Link className="desafio-link" to="/palindromos">
                            Palíndromos
                        </Link>
                    </li>
                    <li>
                        <Link className="desafio-link" to="/troco_notas">
                            Troco por Notas
                        </Link>
                    </li>
                    {/* <li>
                        <Link className="desafio-link" to="/register">
                            Desafio 3
                        </Link>
                    </li>
                    <li>
                        <Link className="desafio-link" to="/register">
                            Desafio 4
                        </Link>
                    </li> */}
                </ul>
            </section>    

            <img src={ heroesImg } alt="Heroes"/>
        </div>
    );
}