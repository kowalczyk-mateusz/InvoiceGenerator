import React from 'react';
import styled from 'styled-components';
import {Label, Input, Container} from './CommonStyles'

const PaymentInfo = ({invoiceHandler, invoiceData}) => {
    return (
        <StyledPaymentInfo>
            <Container>
            <Label for='paymentMethod'>Sposób płatności</Label>
            <Input name='paymentMethod' type='text' onChange={invoiceHandler} value={invoiceData.paymentMethod}/>
            </Container>
            <Container>
            <Label for='paymentDeadline'>Termin Płatności</Label>
            <Input name='paymentDeadline' type='text' onChange={invoiceHandler} value={invoiceData.paymentDeadline}/>
            </Container>
            <Container>
            <Label for='accountNumber'>Numer Konta</Label>
            <Input name='accountNumber' type='text' onChange={invoiceHandler} value={invoiceData.accountNumber}/>
            </Container>
            <Container>
            <Label for='splitPayment'>Mechanizm Podzielonej płatnosci</Label>
            <Input name='splitPayment' type='checkbox' onChange={invoiceHandler} value={invoiceData.splitPayment}/>
            </Container>
            <Container>
            <Label for='comments'>Uwagi</Label>
            <Input name='comments' type='text' onChange={invoiceHandler} value={invoiceData.comments}/>
            </Container>
        </StyledPaymentInfo>
    );
}

const StyledPaymentInfo = styled.div`
display: flex;
justify-content: center;
`
export default PaymentInfo;