import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import Service from './Service'
const ServicesInfo = ({invoiceData, setInvoiceData, services, setServices}) => {


    
    const [service, setService] = useState({
        singleService: ['']

    })

    const calculateBruttoPrice = (nettoPrice, id) => {
        let vat = services[id].vat === 23 ? 1.23 : 1.08;
        let price = parseFloat(nettoPrice * vat)
        return price.toFixed(2)
    }
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
        <button onClick={addNewService}>AddService</button>
        <StyledServices>
        {service.singleService.map((services, index)=>(
            <Service id={index} key={index} services={services} setServices={setServices} handleChangeData={handleChangeData} calculateBruttoPrice={calculateBruttoPrice}/>
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