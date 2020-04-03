import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api';

import './styles.css';

import logoImg from '../../assets/logo.png';

export default function Palindromos() {
    const history = useHistory();

    const [minNumber, setMinNumber] = useState('');
    const [maxNumber, setMaxNumber] = useState('');
    const [palindromes, setPalindromes] = useState([]);

    async function handlePalindromos(e) {
        e.preventDefault();

        try {
            const response = await api.post('/palindromes', { minNumber, maxNumber });
            setPalindromes(response.data.palindromes);
        } catch (err) {
            alert('Falha na requisição, tente novamente.');
        }
    }

    return(
        <div className="palindromos-container">
            <div className="content">
                <section>
                    <img src={ logoImg } alt="Desafio kukac"/>

                    <h1>Números Palíndromos</h1>
                    <p>
                        Números palíndromos são aqueles que escritos da direita para esquerda ou da esquerda para direita tem o mesmo valor. Exemplo: 929, 44, 97379. 
                        Fazer um algoritmo que imprima todos os números palíndromos entre um intervalo que será escolhido pelo usuário da aplicação.
                    </p>

                    <Link className="back-link" to="/">
                        <FiArrowLeft size={ 16 } color="#e02041" />
                        Voltar para Página Principal
                    </Link>
                </section>
                
                <form onSubmit={ handlePalindromos }>
                    <h1>Insira os valores abaixo:</h1>

                    <input 
                        placeholder="Número mínimo"
                        type="number"
                        value={ minNumber }
                        onChange={ e => setMinNumber(e.target.value) }
                    />
                    <input 
                        placeholder="Número máximo"
                        type="number"
                        value={ maxNumber }
                        onChange={ e => setMaxNumber(e.target.value) }
                    />

                    <button className="button" type="submit">Calcular</button>

                    <h1>Resposta:</h1>

                    <textarea 
                        placeholder="Resposta"
                        value={ palindromes.join("\n") }
                    />
                </form>
            </div>
        </div>
    );
}