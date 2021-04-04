import React from 'react';
import styled from 'styled-components';
import {Label, Input, Container} from '../InvoiceComponents/CommonStyles'
const PaymentInfo = ({invoiceHandler, invoiceData}) => {
    return (
        <StyledPaymentInfo>
            <Container>
            <Label htmlFor='paymentMethod'>Sposób płatności</Label>
            <Input name='paymentMethod' type='text' onBlur={invoiceHandler} defaultValue={invoiceData.paymentMethod}/>
            </Container>
            <Container>
            <Label htmlFor='paymentDeadline'>Termin Płatności</Label>
            <Input name='paymentDeadline' type='text' onBlur={invoiceHandler} defaultValue={invoiceData.paymentDeadline}/>
            </Container>
            <Container>
            <Label htmlFor='accountNumber'>Numer Konta</Label>
            <Input name='accountNumber' type='text' onBlur={invoiceHandler} defaultValue={invoiceData.accountNumber}/>
            </Container>
            <Container>
            <Label htmlFor='splitPayment'>Mechanizm Podzielonej płatnosci</Label>
            <Input name='splitPayment' type='checkbox' onBlur={invoiceHandler} defaultValue={invoiceData.splitPayment}/>
            </Container>
            <Container>
            <Label htmlFor='comments'>Uwagi</Label>
            <Input name='comments' type='text' onBlur={invoiceHandler} defaultValue={invoiceData.comments}/>
            </Container>
        </StyledPaymentInfo>
    );
}

const StyledPaymentInfo = styled.div`
display: flex;
justify-content: center;
`
export default PaymentInfo;