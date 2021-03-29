import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import InvoiceInfo from './InvoiceComponents/InvoiceInfo'
import SellerInfo from './InvoiceComponents/SellerInfo'
import BuyerInfo from './InvoiceComponents/BuyerInfo'
import ServicesInfo from './InvoiceComponents/ServicesInfo'
import PaymentInfo from './InvoiceComponents/PaymentInfo'
import {v4 as uuidv4} from 'uuid'
import app from '../firebase'
import { PDFDownloadLink} from '@react-pdf/renderer';
import MyDocument from './Print PDf/PrintPdf'
import {useAuth} from '../context/AuthContext'
const AddInvoice = () => {
    
    const  {currentUser} = useAuth()
    const ref = app.firestore().collection(currentUser.uid)

    const [services, setServices] = useState([{
        serviceName: '',
        qty: '',
        priceNetto: '',
        priceBrutto: '',
        vat: 23,
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
        id: uuidv4(),
    })


    const invoiceHandler = (e) =>{
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value
            setInvoiceData({
                ...invoiceData,
                [e.target.name]: value,
            });
    }
    const [data, setData] = useState({})
    useEffect(()=>{
        setData(invoiceData)
    }, [invoiceData])
          
    const addNewInvoice = () =>{
            ref.doc(data.id)
            .set(data)
      }
    
      const [printData, setPrintData] = useState({})
      const [loading, setLoading] = useState(true)
      const saveInvoice = () =>{
          setLoading(true)
          setPrintData({...invoiceData})
          setTimeout(()=>{
              setLoading(false)
          }, 2000)

      }

    return (
        <InvoiceContainer>
            <InvoiceInfo invoiceHandler={invoiceHandler} invoiceData={invoiceData}/>
            <SellerInfo invoiceHandler={invoiceHandler} invoiceData={invoiceData}/>
            <BuyerInfo invoiceHandler={invoiceHandler} invoiceData={invoiceData}/>
            <ServicesInfo invoiceData={invoiceData} setInvoiceData={setInvoiceData} services={services} setServices={setServices}/>
            <PaymentInfo invoiceHandler={invoiceHandler} invoiceData={invoiceData}/>
            <button onClick={addNewInvoice}>DODAJ Fakture</button>
            <button onClick={saveInvoice}>Zapisz Dane i pobierz</button>
            {!loading && (
            <PDFDownloadLink document={<MyDocument printData={printData}/>} fileName='Invoice.pdf'>
            {({blob, url, error})=> (loading ? 'Loading document...' : 'Download now!')}
             </PDFDownloadLink>)}
   
        </InvoiceContainer>
    );
}

const InvoiceContainer = styled.div`

`

export default AddInvoice;