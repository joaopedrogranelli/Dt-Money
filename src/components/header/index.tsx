import { useState } from 'react';
import LogoImg from '../../assets/logo.svg';
import { Container, Content } from './style';


interface HeaderProps {
    onOpenNewTransactionModal: () => void;
}

export function Header ({onOpenNewTransactionModal}: HeaderProps) {
    return (
        <Container>
            <Content>
            <img src={LogoImg} alt="dtmoney" />
            <button type="button" onClick={onOpenNewTransactionModal}>
                Nova transação
            </button>
            </Content>
        </Container>
    )
}