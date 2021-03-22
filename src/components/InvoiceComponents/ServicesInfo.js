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
        <StyledServicesInfo>
        <button onClick={addNewService}>AddService</button>
        {service.singleService.map((services, index)=>(
            <Service id={index} key={index}/>
        ))}
        </StyledServicesInfo>
    );
}
const StyledServicesInfo = styled.div`
display: flex;
justify-content: center;
`
export default ServicesInfo;