import React from 'react';
import styled from 'styled-components';
import {Label, Input, Container} from './CommonStyles'

const SellerInfo = () => {
    return (
        <SellerInfoContainer>
            Sprzedawca: 
            <Container>
            <Label for='sellerName'>Nazwa</Label>
            <Input name='sellerName' type='text'/>
            </Container>
            <Container>
            <Label for='sellerNip'>Nip</Label>
            <Input name='sellerNip' type='text'/>
            </Container>
            <Container>
            <Label for='sellerStreet'>Ulica</Label>
            <Input name='sellerStreet' type='text'/>
            </Container>
            <Container>
            <Label for='sellerCity'>Miasto</Label>
            <Input name='sellerCity' type='text'/>
            </Container>
            <Container>
            <Label for='sellerCode'>Kod Pocztowy</Label>
            <Input name='sellerCode' type='text'/>
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