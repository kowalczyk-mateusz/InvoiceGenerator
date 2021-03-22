import React from 'react';
import styled from 'styled-components';
import {Label, Input, Container} from './CommonStyles'

const BuyerInfo = () => {
    return (
        <BuyerInfoContainer>
            Nabywca:
            <Container>
            <Label for='buyerName'>Nazwa</Label>
            <Input name='buyerName' type='text'/>
            </Container>
            <Container>
            <Label for='buyerNip'>Nip</Label>
            <Input name='buyerNip' type='text'/>
            </Container>
            <Container>
            <Label for='buyerStreet'>Ulica</Label>
            <Input name='buyerStreet' type='text'/>
            </Container>
            <Container>
            <Label for='buyerCity'>Miasto</Label>
            <Input name='buyerCity' type='text'/>
            </Container>
            <Container>
            <Label for='buyerCode'>Kod Pocztowy</Label>
            <Input name='buyerCode' type='text'/>
            </Container>
        </BuyerInfoContainer>
    );
}

const BuyerInfoContainer = styled.div`
display: flex;
justify-content: center;
margin-bottom: 2rem;
`
export default BuyerInfo;