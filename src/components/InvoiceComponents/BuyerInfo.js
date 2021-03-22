import React from 'react';
import styled from 'styled-components';
import {Label, Input} from './CommonStyles'

const BuyerInfo = () => {
    return (
        <BuyerInfoContainer>
            Nabywca:
            <Label for='buyerName'>Nazwa</Label>
            <Input name='buyerName' type='text'/>
            
            <Label for='buyerNip'>Nip</Label>
            <Input name='buyerNip' type='text'/>

            <Label for='buyerStreet'>Ulica</Label>
            <Input name='buyerStreet' type='text'/>

            <Label for='buyerCity'>Miasto</Label>
            <Input name='buyerCity' type='text'/>

            <Label for='buyerCode'>Kod Pocztowy</Label>
            <Input name='buyerCode' type='text'/>
        </BuyerInfoContainer>
    );
}

const BuyerInfoContainer = styled.div`

`
export default BuyerInfo;