import React from 'react';
import styled from 'styled-components';
import {Label, Input, Select, Option, Container} from './CommonStyles'

const Service = ({id}) => {
    console.log(id)
    return (
        <StyledService>
            <Container>
            <Label for={`serviceName${id}`}>Nazwa usługi</Label>
            <Input name={`serviceName${id}`} type='text'/>
            </Container>
            <Container>
            <Label for={`qty${id}`}>Ilość</Label>
            <Input name={`qty${id}`} type='number'/>
            </Container>
            <Container>

            <Label for={`priceNetto${id}`}>Cena Netto</Label>
            <Input name={`priceNetto${id}`} type='number'/>
            </Container>
            <Container>
            <Label for={`priceBrutto${id}`}>Cena Brutto</Label>
            <Input name={`priceBrutto${id}`} type='number'/>
            </Container>
            <Container>
            <Label for='serviceName'>Stawka Vat</Label>
            <Select name={`vat${id}`}>
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