import React, {useState} from 'react';
import styled from 'styled-components';
import InvoiceInfo from './InvoiceInfo'
import SellerInfo from './SellerInfo'
import BuyerInfo from './BuyerInfo'
import ServicesInfo from './ServicesInfo'
import PaymentInfo from './PaymentInfo'
import {useAuth} from '../../context/AuthContext'
import {useParams} from 'react-router-dom'
import app from '../../firebase'
const EditData = ({singleData, setSingleData}) => {

    const {id} = useParams()
    console.log(id)
    const {currentUser} = useAuth()
    const ref = app.firestore().collection(currentUser.uid)
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

    const updateFile = () =>{
            ref.doc(id)
            .update(singleData)
    }
    return (
        <InvoiceContainer>
            <InvoiceInfo invoiceHandler={invoiceHandler} invoiceData={singleData}/>
            <SellerInfo invoiceHandler={invoiceHandler} invoiceData={singleData}/>
            <BuyerInfo invoiceHandler={invoiceHandler} invoiceData={singleData}/>
            <ServicesInfo invoiceData={singleData} setInvoiceData={setSingleData} services={services} setServices={setServices}/>
            <PaymentInfo invoiceHandler={invoiceHandler} invoiceData={singleData}/>
            <button onClick={updateFile}>Update Files</button>
            <button>Download Files</button>
        </InvoiceContainer>
    );
}
const InvoiceContainer = styled.div`

`

export default EditData;