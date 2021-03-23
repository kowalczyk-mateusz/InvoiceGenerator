import React, {useState} from 'react';
import styled from 'styled-components';
import InvoiceInfo from './InvoiceComponents/InvoiceInfo'
import SellerInfo from './InvoiceComponents/SellerInfo'
import BuyerInfo from './InvoiceComponents/BuyerInfo'
import ServicesInfo from './InvoiceComponents/ServicesInfo'
import PaymentInfo from './InvoiceComponents/PaymentInfo'
const AddInvoice = () => {

    const [services, setServices] = useState([{
        serviceName: '',
        qty: '',
        priceNetto: '',
        priceBrutto: '',
        vat: '',
    }])
    const [invoiceData, setInvoiceData] = useState({
        invoiceNumber: '',
        releaseDate: '',
        saleDate: '',
        city: '',
        buyerName: '',
        buyerNip: '',
        buyerStreet: '',
        buyerCity: '',
        buyerCode: '',
        sellerName: '',
        sellerNip: '',
        sellerStreet: '',
        sellerCity: '',
        sellerCode: '',
        services: services,
        paymentMethod: '',
        paymentDeadline: '',
        accountNumber: '',
        splitPayment: true,
        comments: '',

    })


    const invoiceHandler = (e) =>{
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value
            setInvoiceData({
                ...invoiceData,
                [e.target.name]: value,
            });
    }
    return (
        <InvoiceContainer>
            <InvoiceInfo invoiceHandler={invoiceHandler} invoiceData={invoiceData}/>
            <SellerInfo invoiceHandler={invoiceHandler} invoiceData={invoiceData}/>
            <BuyerInfo invoiceHandler={invoiceHandler} invoiceData={invoiceData}/>
            <ServicesInfo invoiceData={invoiceData} setInvoiceData={setInvoiceData} services={services} setServices={setServices}/>
            <PaymentInfo invoiceHandler={invoiceHandler} invoiceData={invoiceData}/>
        </InvoiceContainer>
    );
}

const InvoiceContainer = styled.div`

`
export default AddInvoice;