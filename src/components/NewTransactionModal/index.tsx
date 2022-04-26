import { FormEvent, useState, useContext } from 'react';
import Modal from 'react-modal';
import { useTransactions } from '../../hooks/useTransactions';

import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/incomes.svg';
import outCome from '../../assets/outcome.svg';

import { Container, TransactionTypeContainer, RadioBox } from './styles';

interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal ({isOpen, onRequestClose}: NewTransactionModalProps) {
    const { createTransaction } = useTransactions();
    
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState(0);
    const [category, setCategory] = useState('');
    const [type, setType] = useState('');

    async function handleCreateNewTransaction (event: FormEvent) {
        event.preventDefault();

        await createTransaction ({
            title,
            amount,
            category,
            type,
        })

        setTitle('');
        setAmount(0);
        setCategory('');
        setType('');
        onRequestClose();
    };


    return (
        <Modal 
            isOpen={isOpen} 
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
            >

            <button 
            type="button" 
            onClick={onRequestClose} 
            className="react-modal-close"
            >
                <img src={closeImg} alt="Fechar modal" />
            </button>

            <Container onSubmit={handleCreateNewTransaction}>
                
                <h2>Cadastrar transação</h2>

                <input 
                placeholder="Título" 
                value={title}
                onChange={event => setTitle(event.target.value)}
                />
                
                <input 
                type="number" 
                placeholder="Valor" 
                value={amount}
                onChange={event => setAmount(Number(event.target.value))}
                />
                
                <TransactionTypeContainer>

                <RadioBox 
                type='button' 
                activeColor='green'
                isActive={type === 'deposit'}
                onClick={() => {setType('deposit');}}
                >

                    <img src={incomeImg} alt="Entrada" />

                   
                    <span>Entrada</span>
               
                </RadioBox>

                <RadioBox 
                type='button' 
                isActive={type === 'withdraw'}
                activeColor='red'
                onClick={() => {setType('withdraw')}}
                >

                    <img src={outCome} alt="Saída" />

                    <span>Saída</span>
              
               </RadioBox>

                </TransactionTypeContainer>
                
                <input 
                placeholder="Categoria" 
                value={category}
                onChange={event => setCategory(event.target.value)}
                />

                <button type="submit">
                    Cadastrar
                </button>

            </Container>

         
      </Modal>
    );
}

function TransactionsContext(TransactionsContext: any) {
    throw new Error('Function not implemented.');
}
