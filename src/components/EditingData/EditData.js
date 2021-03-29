import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import InvoiceInfo from './InvoiceInfo'
import SellerInfo from './SellerInfo'
import BuyerInfo from './BuyerInfo'
import ServicesInfo from './ServicesInfo'
import PaymentInfo from './PaymentInfo'
import {v4 as uuidv4} from 'uuid'
const EditData = ({singleData, setSingleData}) => {
    const [services, setServices] = useState([{
        serviceName: '',
        qty: '',
        priceNetto: '',
        priceBrutto: '',
        vat: 23,
    }])

    const invoiceHandler = (e) =>{
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value
        setSingleData({
                ...singleData,
                [e.target.name]: value,
            });
    }
    return (
        <InvoiceContainer>
            <InvoiceInfo invoiceHandler={invoiceHandler} invoiceData={singleData}/>
            <SellerInfo invoiceHandler={invoiceHandler} invoiceData={singleData}/>
            <BuyerInfo invoiceHandler={invoiceHandler} invoiceData={singleData}/>
            <ServicesInfo invoiceData={singleData} setInvoiceData={setSingleData} services={services} setServices={setServices}/>
            <PaymentInfo invoiceHandler={invoiceHandler} invoiceData={singleData}/>
            <button>Update Files</button>
            <button>Download Files</button>
        </InvoiceContainer>
    );
}
const InvoiceContainer = styled.div`

`

export default EditData;