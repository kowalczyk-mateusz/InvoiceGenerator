import React from 'react';
import styled from 'styled-components';
import {Label, Input} from './CommonStyles'

const SellerInfo = () => {
    return (
        <SellerInfoContainer>
            Sprzedawca: 
            <Label for='sellerName'>Nazwa</Label>
            <Input name='sellerName' type='text'/>
            
            <Label for='sellerNip'>Nip</Label>
            <Input name='sellerNip' type='text'/>

            <Label for='sellerStreet'>Ulica</Label>
            <Input name='sellerStreet' type='text'/>

            <Label for='sellerCity'>Miasto</Label>
            <Input name='sellerCity' type='text'/>

            <Label for='sellerCode'>Kod Pocztowy</Label>
            <Input name='sellerCode' type='text'/>

        </SellerInfoContainer>
    );
}
const SellerInfoContainer = styled.div`

`
export default SellerInfo;