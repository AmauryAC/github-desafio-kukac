import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api';

import './styles.css';

import logoImg from '../../assets/logo.png';

export default function TrocoNotas() {
    const history = useHistory();

    const [purchPrice, setPurchPrice] = useState('');
    const [amountPaid, setAmountPaid] = useState('');
    const [amountByNotes, setAmountByNotes] = useState([]);
    const [totalNotes, setTotalNotes] = useState('');

    async function handleTrocoNotas(e) {
        e.preventDefault();

        try {
            const response = await api.post('/cashier', { purchPrice, amountPaid });
            setAmountByNotes(response.data.amountByNotes);
            setTotalNotes(response.data.totalNotes);
            //alert(response)
        } catch (err) {
            alert('Falha na requisição, tente novamente.');
        }
    }

    return(
        <div className="troco-notas-container">
            <div className="content">
                <section>
                    <img src={ logoImg } alt="Desafio kukac"/>

                    <h1>Troco por Notas</h1>
                    <p>
                        Suponha que um caixa disponha apenas de notas de 1, 10 e 100 reais. Considerando que alguém está pagando uma compra, escreva um algoritmo que mostre o número mínimo de notas que o caixa deve fornecer como troco.
                        Mostre também: o valor da compra, o valor do troco e a quantidade de cada tipo de nota do troco. Suponha que o sistema monetário não utilize moedas.
                        O valor da compra e o valor de dinheiro entregue ao caixa deve ser informado pelo usuário.
                    </p>

                    <Link className="back-link" to="/">
                        <FiArrowLeft size={ 16 } color="#e02041" />
                        Voltar para Página Principal
                    </Link>
                </section>
                
                <form onSubmit={ handleTrocoNotas }>
                    <h1>Insira os valores abaixo:</h1>

                    <input 
                        placeholder="Valor da Compra"
                        type="number"
                        value={ purchPrice }
                        onChange={ e => setPurchPrice(e.target.value) }
                    />
                    <input 
                        placeholder="Valor Pago"
                        type="number"
                        value={ amountPaid }
                        onChange={ e => setAmountPaid(e.target.value) }
                    />

                    <button className="button" type="submit">Calcular</button>

                    <h1>Resposta:</h1>

                    <textarea 
                        placeholder="Resposta"
                        value={ JSON.stringify(amountByNotes, undefined, 3) }
                    />
                </form>
            </div>
        </div>
    );
}