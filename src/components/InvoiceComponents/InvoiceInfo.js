import React from 'react';
import styled from 'styled-components';
import {Label, Input, Container} from './CommonStyles'

const InvoiceInfo = () => {
    return (
        <InvoiceInfoContainer>
            <Container>
            <Label htmlFor='invoiceNumber'>Numer Faktury</Label>
            <Input type='name' name="invoiceNumber"/>
            </Container>
            <Container>
            <Label htmlFor='releaseDate'>Data Wystawienia</Label>
            <Input type='date' name="releaseDate"/>
            </Container>
            <Container>
            <Label htmlFor='saleDate'>Data Sprzedaży</Label>
            <Input type='date' name="saleDate"/>
            </Container>
            <Container>
            <Label htmlFor='city'>Miejsce wystawienia</Label>
            <Input name="city"/>
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