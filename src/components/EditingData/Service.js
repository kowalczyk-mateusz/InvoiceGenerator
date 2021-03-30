import React from 'react';
import styled from 'styled-components';
import {Label, Input, Select, Option, Container} from '../InvoiceComponents/CommonStyles'
const Service = ({id, services,invoiceData, serServices, handleChangeData}) => {
    return (
        <StyledService>
        <Container>
        <Label htmlFor='serviceName'>Nazwa usługi</Label>
        <Input name='serviceName' type='text' onChange={handleChangeData(id)}/>
        </Container>
        <Container>
        <Label htmlFor='qty'>Ilość</Label>
        <Input name='qty' type='number' onChange={handleChangeData(id)}/>
        </Container>
        <Container>
        <Label htmlFor='priceNetto'>Cena Netto</Label>
        <Input name='priceNetto' type='number' onChange={handleChangeData(id)}/>
        </Container>
        <Container>
        <Label htmlFor='priceBrutto'>Cena Brutto</Label>
        <Input name='priceBrutto' type='number' onChange={handleChangeData(id)}/>
        </Container>
        <Container>
        <Label htmlFor='vat'>Stawka Vat</Label>
        <Select name='vat' onChange={handleChangeData(id)}>
            <Option value={23}>23%</Option>
            <Option value={8}>8%</Option>
        </Select>
        </Container>
        
    </StyledService>
    );
}

const StyledService = styled.div`
display: flex;
justify-content: center;
`
export default Service;