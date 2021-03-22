import React from 'react';
import styled from 'styled-components';
import {Label, Input} from './CommonStyles'

const InvoiceInfo = () => {
    return (
        <InvoiceInfoContainer>
            <Label htmlFor='invoiceNumber'>Numer Faktury</Label>
            <Input type='name' name="invoiceNumber"/>
            <Label htmlFor='releaseDate'>Data Wystawienia</Label>
            <Input type='date' name="releaseDate"/>
            <Label htmlFor='saleDate'>Data Sprzedaży</Label>
            <Input type='date' name="saleDate"/>
            <Label htmlFor='city'>Miejsce wystawienia</Label>
            <Input name="city"/>
        </InvoiceInfoContainer>
    );
}

const InvoiceInfoContainer = styled.div`

`
export default InvoiceInfo;