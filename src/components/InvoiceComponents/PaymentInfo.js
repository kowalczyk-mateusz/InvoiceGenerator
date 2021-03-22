import React from 'react';
import styled from 'styled-components';
import {Label, Input} from './CommonStyles'

const PaymentInfo = () => {
    return (
        <StyledPaymentInfo>
            <Label for='paymentMethod'>Sposób płatności</Label>
            <Input name='paymentMethod' type='text'/>
            
            <Label for='paymentDeadline'>Termin Płatności</Label>
            <Input name='paymentDeadline' type='text'/>

            <Label for='accountNumber'>Numer Konta</Label>
            <Input name='accountNumber' type='text'/>

            <Label for='splitPayment'>Mechanizm Podzielonej płatnosci</Label>
            <Input name='splitPayment' type='checkbox'/>

            <Label for='comments'>Uwagi</Label>
            <Input name='comments' type='text'/>
        </StyledPaymentInfo>
    );
}

const StyledPaymentInfo = styled.div`

`
export default PaymentInfo;