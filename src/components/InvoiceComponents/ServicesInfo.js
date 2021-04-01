import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import Service from './Service'
const ServicesInfo = ({invoiceData, setInvoiceData, services, setServices}) => {


    
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
            <Service id={index} key={index} services={services} invoiceData={invoiceData} setInvoiceData={setInvoiceData} setServices={setServices} handleChangeData={handleChangeData}/>
        ))}
        </StyledServices>
        <button onClick={addNewService}>AddService</button>
        <Overall>
            
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
export default ServicesInfo;