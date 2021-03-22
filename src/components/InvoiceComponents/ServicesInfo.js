import React, {useState} from 'react';
import styled from 'styled-components';
import Service from './Service'
const ServicesInfo = () => {

    const [service, setService] = useState({
        singleService: [''],
    })

    const addNewService = () =>{
        setService({singleService: [...service.singleService, '']});
    }
    return (
        <>
        <h1 onClick={addNewService}>AddService</h1>
        {service.singleService.map((services, index)=>(
            <Service id={index}/>
        ))}
        </>
    );
}

export default ServicesInfo;