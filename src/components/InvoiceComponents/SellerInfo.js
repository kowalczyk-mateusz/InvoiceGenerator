import React from 'react';
import styled from 'styled-components';
import {Label, Input, Container} from './CommonStyles'

const SellerInfo = ({invoiceHandler, invoiceData}) => {
    return (
        <SellerInfoContainer>
            Sprzedawca: 
            <Container>
            <Label htmlFor='sellerName'>Nazwa</Label>
            <Input name='sellerName' type='text' onChange={invoiceHandler} value={invoiceData.sellerName}/>
            </Container>
            <Container>
            <Label htmlFor='sellerNip'>Nip</Label>
            <Input name='sellerNip' type='text' onChange={invoiceHandler} value={invoiceData.sellerNip}/>
            </Container>
            <Container>
            <Label htmlFor='sellerStreet'>Ulica</Label>
            <Input name='sellerStreet' type='text' onChange={invoiceHandler} value={invoiceData.sellerStreet}/>
            </Container>
            <Container>
            <Label htmlFor='sellerCity'>Miasto</Label>
            <Input name='sellerCity' type='text' onChange={invoiceHandler} value={invoiceData.sellerCity}/>
            </Container>
            <Container>
            <Label htmlFor='sellerCode'>Kod Pocztowy</Label>
            <Input name='sellerCode' type='text' onChange={invoiceHandler} value={invoiceData.sellerCode}/>
            </Container>
        </SellerInfoContainer>
    );
}
const SellerInfoContainer = styled.div`
display: flex;
justify-content: center;
margin-bottom: 2rem;
`
export default SellerInfo;