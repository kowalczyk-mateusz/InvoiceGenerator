import React from 'react';
import styled from 'styled-components';
import InvoiceInfo from './InvoiceComponents/InvoiceInfo'
import SellerInfo from './InvoiceComponents/SellerInfo'
import BuyerInfo from './InvoiceComponents/BuyerInfo'
import ServicesInfo from './InvoiceComponents/ServicesInfo'
import PaymentInfo from './InvoiceComponents/PaymentInfo'
const AddInvoice = () => {
    return (
        <InvoiceContainer>
            <InvoiceInfo />
            <SellerInfo />
            <BuyerInfo />
            <ServicesInfo />
            <PaymentInfo />
        </InvoiceContainer>
    );
}

const InvoiceContainer = styled.div`

`
export default AddInvoice;