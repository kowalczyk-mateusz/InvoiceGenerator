import React from 'react';
import styled from 'styled-components';
import {Label, Input, Container} from '../InvoiceComponents/CommonStyles'
const PaymentInfo = ({invoiceHandler, invoiceData}) => {
    return (
        <StyledPaymentInfo>
        <Container>
        <Label htmlFor='paymentMethod'>Sposób płatności</Label>
        <Input name='paymentMethod' type='text' onChange={invoiceHandler} value={invoiceData.paymentMethod}/>
        </Container>
        <Container>
        <Label htmlFor='paymentDeadline'>Termin Płatności</Label>
        <Input name='paymentDeadline' type='text' onChange={invoiceHandler} value={invoiceData.paymentDeadline}/>
        </Container>
        <Container>
        <Label htmlFor='accountNumber'>Numer Konta</Label>
        <Input name='accountNumber' type='text' onChange={invoiceHandler} value={invoiceData.accountNumber}/>
        </Container>
        <Container>
        <Label htmlFor='splitPayment'>Mechanizm Podzielonej płatnosci</Label>
        <Input name='splitPayment' type='checkbox' onChange={invoiceHandler} value={invoiceData.splitPayment}/>
        </Container>
        <Container>
        <Label htmlFor='comments'>Uwagi</Label>
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