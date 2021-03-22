import React from 'react';
import styled from 'styled-components';
import {Label, Input, Select, Option} from './CommonStyles'

const Service = ({id}) => {
    console.log(id)
    return (
        <StyledService>
            <Label for={`serviceName${id}`}>Nazwa usługi</Label>
            <Input name={`serviceName${id}`} type='text'/>

            <Label for={`qty${id}`}>Ilość</Label>
            <Input name={`qty${id}`} type='number'/>

            <Label for={`priceNetto${id}`}>Cena Netto</Label>
            <Input name={`priceNetto${id}`} type='number'/>

            <Label for={`priceBrutto${id}`}>Cena Brutto</Label>
            <Input name={`priceBrutto${id}`} type='number'/>

            <Label for='serviceName'>Stawka Vat</Label>
            <Select name={`vat${id}`}>
                <Option>23%</Option>
                <Option>8%</Option>
            </Select>
        </StyledService>
    );
}

const StyledService = styled.div`

`
export default Service;