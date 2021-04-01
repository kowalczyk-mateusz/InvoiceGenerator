import React from 'react';
import styled from 'styled-components';
import {Label, Input, Select, Option, Container} from './CommonStyles'


const Service = ({id, services,invoiceData, serServices, handleChangeData, setInvoiceData}) => {
    


    const data = invoiceData.services[id]
    const Vat = data.vat === 23 ? 1.23 : 1.08
    const PriceVat = parseFloat(data.priceBrutto !== '' ? data.priceBrutto - (data.priceBrutto / Vat) : data.priceNetto * Vat - data.priceNetto)
    const FixedPriceVat = PriceVat.toFixed(2)
    const PriceBrutto = parseFloat(data.priceBrutto !== '' ? data.priceBrutto : data.priceNetto * Vat)
    const FixedPriceBrutto = PriceBrutto.toFixed(2)
    const PriceNetto = parseFloat(data.priceNetto !== '' ? data.priceNetto : data.priceBrutto - (data.priceBrutto - (data.priceBrutto / Vat)))
    const FixedPriceNetto = PriceNetto.toFixed(2)


    const delteServices = (e)=>{
        const newData = {...invoiceData}
        if(newData.services.length>1){
            newData.services.splice(id, 1)
            setInvoiceData({...newData})
        }
        

    }
        
    return (
        <StyledService>
             <button onClick={delteServices}>Usuń</button>
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
            <Input name='priceNetto' type='number' onChange={handleChangeData(id)} disabled={data.priceBrutto !== ''  ? true : false} placeholder={data.priceBrutto !== '' ? FixedPriceNetto : ''}/>
            </Container>
            <Container>
            <Label htmlFor='priceBrutto'>Cena Brutto</Label>
            <Input name='priceBrutto' type='number' onChange={handleChangeData(id)} disabled={data.priceNetto !== '' ? true : false} placeholder={data.priceNetto !== '' ? FixedPriceBrutto : ''}/>
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