import React, {useEffect} from 'react';
import styled from 'styled-components';
import {Label, Input, Select, Option, Container} from './CommonStyles'


const Service = ({id, services,invoiceData, setServices, handleChangeData, setInvoiceData, overall, setOverall}) => {
    


    const data = invoiceData.services[id]
    const Vat = data.vat === 23 ? 1.23 : 1.08
    const PriceBrutto = parseInt(data.priceBrutto !== '' ? data.priceBrutto : data.priceNetto * Vat)
    const FixedPriceBrutto = PriceBrutto.toFixed(2)
    const PriceNetto = parseInt(data.priceNetto !== '' ? data.priceNetto : data.priceBrutto - (data.priceBrutto - (data.priceBrutto / Vat)))
    const FixedPriceNetto = PriceNetto.toFixed(2)
    const PriceVat = parseInt(FixedPriceBrutto - FixedPriceNetto)
    const FixedPriceVat = PriceVat.toFixed(2)
    const delteServices = ()=>{
        const newData = {...invoiceData}
        if(newData.services.length>1){
            newData.services.splice(id, 1)
            setInvoiceData({...newData})
        }}



    return (
        <StyledService onBlur={handleChangeData(id)}>
             <button onClick={delteServices}>Usuń</button>
            <Container>
            <Label htmlFor='serviceName'>Nazwa usługi</Label>
            <Input name='serviceName' type='text'/>
            </Container>
            <Container>
            <Label htmlFor='qty'>Ilość</Label>
            <Input name='qty' type='number' defaultValue='1'/>
            </Container>
            <Container>
            <Label htmlFor='priceNetto'>Cena Netto</Label>
            <Input name='priceNetto' type='number' defaultValue={data.priceBrutto !== '' ? FixedPriceNetto : ''}  disabled={data.priceBrutto !== ''  ? true : false}/>
            </Container>
            <Container>
            <Label htmlFor='vatValue'>Wartość Vat</Label>
            <Input name='vatValue' type='number' value={FixedPriceVat}  disabled />
            </Container>
            <Container>
            <Label htmlFor='priceBrutto'>Cena Brutto</Label>
            <Input name='priceBrutto' type='number'defaultValue={data.priceNetto !== '' ? FixedPriceBrutto : ''}  disabled={data.priceNetto !== '' ? true : false}/>
            </Container>
            <Container>
            <Label htmlFor='vat'>Stawka Vat</Label>
            <Select name='vat'>
                <Option defaultValue={23}>23%</Option>
                <Option defaultValue={8}>8%</Option>
            </Select>
            </Container>
            
        </StyledService>
    );
}

const StyledService = styled.form`
display: flex;
justify-content: center;
`
export default Service;