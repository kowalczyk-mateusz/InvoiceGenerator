import React from 'react';
import styled from 'styled-components';
import {Label, Input, Container} from '../InvoiceComponents/CommonStyles'
const InvoiceInfo = ({invoiceHandler, invoiceData}) => {
    return (
        <InvoiceInfoContainer>
            <Container>
            <Label htmlFor='invoiceNumber'>Numer Faktury</Label>
            <Input type='text' name="invoiceNumber" onBlur={invoiceHandler} defaultValue={invoiceData.invoiceNumber}/>
            </Container>
            <Container>
            <Label htmlFor='releaseDate'>Data Wystawienia</Label>
            <Input type='date' name="releaseDate" onBlur={invoiceHandler} defaultValue={invoiceData.releaseDate}/>
            </Container>
            <Container>
            <Label htmlFor='saleDate'>Data Sprzedaży</Label>
            <Input type='date' name="saleDate" onBlur={invoiceHandler} defaultValue={invoiceData.saleDate}/>
            </Container>
            <Container>
            <Label htmlFor='city'>Miejsce wystawienia</Label>
            <Input type='text' name="city" onBlur={invoiceHandler} defaultValue={invoiceData.city}/>
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