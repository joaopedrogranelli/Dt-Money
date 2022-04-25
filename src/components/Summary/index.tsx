import React, { useContext } from 'react';
import incomesImg from '../../assets/incomes.svg';
import outcomeImg from '../../assets/outcome.svg';
import totalImg from '../../assets/Total.svg';
import { TransactionContext } from '../../TransactionsContext';

import { Container } from "./styles";

export function Summary () {
    const {transactions} = useContext(TransactionContext);

    return (
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={incomesImg} alt="Entradas" />
                </header>
                <strong>1000,00</strong>
            </div>

            <div>
                <header>
                    <p>Saídas</p>
                    <img src={outcomeImg} alt="Saídas" />
                </header>
                <strong>-500,00</strong>
            </div>

            <div className='highlight-background'>
                <header>
                    <p>Total</p>
                    <img src={totalImg} alt="Total" />
                </header>
                <strong>500,00</strong>
            </div>
            
        </Container>
    )
}