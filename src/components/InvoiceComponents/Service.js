import React from 'react';
import styled from 'styled-components';
import {Label, Input, Select, Option, Container} from './CommonStyles'

const Service = ({id, services, serServices, handleChangeData}) => {
    
    return (
        <StyledService>
            <Container>
            <Label for='serviceName'>Nazwa usługi</Label>
            <Input name='serviceName' type='text' onChange={handleChangeData(id)}/>
            </Container>
            <Container>
            <Label for='qty'>Ilość</Label>
            <Input name='qty' type='number' onChange={handleChangeData(id)}/>
            </Container>
            <Container>
            <Label for='priceNetto'>Cena Netto</Label>
            <Input name='priceNetto' type='number' onChange={handleChangeData(id)}/>
            </Container>
            <Container>
            <Label for='priceBrutto'>Cena Brutto</Label>
            <Input name='priceBrutto' type='number' onChange={handleChangeData(id)}/>
            </Container>
            <Container>
            <Label for='vat'>Stawka Vat</Label>
            <Select name='vat' onChange={handleChangeData(id)}>
                <Option>23%</Option>
                <Option>8%</Option>
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