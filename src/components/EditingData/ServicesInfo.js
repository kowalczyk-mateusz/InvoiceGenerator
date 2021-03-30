import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import Service from './Service'
const ServicesInfo = ({invoiceData, setInvoiceData, services, setServices}) => {
    const [service, setService] = useState({
        singleService: ['']

    })
    const handleChangeData = (id) => (e) =>{
        const value = e.target.value
        let newArray = [...services];
        newArray[id] = {
           ...newArray[id],
           [e.target.name]: value,

        };
        setServices(newArray);
    }
    const addNewService = () =>{
        setService({singleService: [...service.singleService, '']});
        services.push({serviceName: '',
        qty: '',
        priceNetto: '',
        priceBrutto: '',
        vat: 23,})

    }
    return (
        <StyledServicesInfo>
        <button onClick={addNewService}>AddService</button>
        <StyledServices>
        {invoiceData.services.map((services, index)=>(
            <Service id={index} key={index} services={services} invoiceData={invoiceData} setServices={setServices} handleChangeData={handleChangeData}/>
        ))}
        </StyledServices>
        </StyledServicesInfo>
    );
}
const StyledServicesInfo = styled.div`
display: flex;
justify-content: center;
`
const StyledServices = styled.div`

`
export default ServicesInfo;