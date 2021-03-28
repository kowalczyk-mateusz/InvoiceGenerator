import React from 'react';
import styled from 'styled-components';
import {Label, Input, Container} from './CommonStyles'

const BuyerInfo = ({invoiceHandler, invoiceData}) => {
    return (
        <BuyerInfoContainer>
            Nabywca:
            <Container>
            <Label htmlFor='buyerName'>Nazwa</Label>
            <Input name='buyerName' type='text' onChange={invoiceHandler} value={invoiceData.buyerName} />
            </Container>
            <Container>
            <Label htmlFor='buyerNip'>Nip</Label>
            <Input name='buyerNip' type='text' onChange={invoiceHandler} value={invoiceData.buyerNip} />
            </Container>
            <Container>
            <Label htmlFor='buyerStreet'>Ulica</Label>
            <Input name='buyerStreet' type='text' onChange={invoiceHandler} value={invoiceData.buyerStreet} />
            </Container>
            <Container>
            <Label htmlFor='buyerCity'>Miasto</Label>
            <Input name='buyerCity' type='text' onChange={invoiceHandler} value={invoiceData.buyerCity} />
            </Container>
            <Container>
            <Label htmlFor='buyerCode'>Kod Pocztowy</Label>
            <Input name='buyerCode' type='text' onChange={invoiceHandler} value={invoiceData.buyerCode} />
            </Container>
        </BuyerInfoContainer>
    );
}

const BuyerInfoContainer = styled.div`
display: flex;
justify-content: center;
margin-bottom: 2rem;
`
export default BuyerInfo;