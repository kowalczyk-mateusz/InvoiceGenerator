import React from 'react';
import styled from 'styled-components';
import {Label, Input, Container} from '../InvoiceComponents/CommonStyles'
const InvoiceInfo = ({invoiceHandler}) => {
    return (
        <InvoiceInfoContainer>
        <Container>
        <Label htmlFor='invoiceNumber'>Numer Faktury</Label>
        <Input type='text' name="invoiceNumber" onChange={invoiceHandler}/>
        </Container>
        <Container>
        <Label htmlFor='releaseDate'>Data Wystawienia</Label>
        <Input type='date' name="releaseDate" onChange={invoiceHandler}/>
        </Container>
        <Container>
        <Label htmlFor='saleDate'>Data Sprzedaży</Label>
        <Input type='date' name="saleDate" onChange={invoiceHandler}/>
        </Container>
        <Container>
        <Label htmlFor='city'>Miejsce wystawienia</Label>
        <Input type='text' name="city" onChange={invoiceHandler}/>
        </Container>
    </InvoiceInfoContainer>
    );
}
const InvoiceInfoContainer = styled.div`
display: flex;
justify-content: center;
margin-bottom: 2rem;
`

export default InvoiceInfo;