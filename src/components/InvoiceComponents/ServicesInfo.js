import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import Service from './Service'
import {Label, Input} from './CommonStyles'
const ServicesInfo = ({invoiceData, setInvoiceData, services, setServices, overall, setOverall}) => {


    
    const [service, setService] = useState({
        singleService: ['']

    })



   
    const addNewService = () =>{
        setService({singleService: [...service.singleService, '']});
        services.push({serviceName: '',
        qty: '',
        priceNetto: '',
        priceBrutto: '',
        vat: 23,})

    }

    const handleChangeData = (id) => (e) =>{
        const value = e.target.value
        let newArray = [...services];
        newArray[id] = {
           ...newArray[id],
           [e.target.name]: value,

        };
        setServices(newArray);
    }
    useEffect(()=>{

        setInvoiceData({
            ...invoiceData,
            services: services,
        })

    }, [services])
    return (
        <StyledServicesInfo>
        
        <StyledServices>
        {invoiceData.services.map((services, index)=>(
            <Service id={index} key={index} services={services} invoiceData={invoiceData} setInvoiceData={setInvoiceData} setServices={setServices} handleChangeData={handleChangeData} overall={overall} setOverall={setOverall}/>
        ))}
        </StyledServices>
        <button onClick={addNewService}>AddService</button>
            <Overall>
                Razem
                <div>
                    <Label>Wartość Netto</Label>
                    <Input disabled value={overall.sumNetto}/>
                </div>
                <div>
                    <Label>Kwota Vat</Label>
                    <Input disabled value={overall.sumVat}/>
                </div>
                <div>
                    <Label>Wartosc Brutto</Label>
                    <Input disabled value={overall.sumBrutto}/>
                </div>
                <div>
                    <Label>Razem</Label>
                    <Input disabled value={overall.sum}/>
                </div>
            <OverallContainer></OverallContainer>
            <Sum></Sum>
            </Overall>
        </StyledServicesInfo>
    );
}
const StyledServicesInfo = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
button {
    align-self: center;
    width: 5rem;
    height: 2rem;
}
`
const StyledServices = styled.div`

`
const Overall = styled.div`
`
const OverallContainer = styled.div`

`
const Sum = styled.div`

`
export default ServicesInfo;