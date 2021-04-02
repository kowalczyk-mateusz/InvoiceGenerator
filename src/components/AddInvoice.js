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
        qty: '1',
        priceNetto: '',
        priceBrutto: '',
        vat: 23,
        vatValue: '',
    }])
    const [overall, setOverall] = useState({
        sumNetto : 0.00,
        sumBrutto : 0.00,
        sumVat: 0.00,
        sum: 0.00,
    })
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
        overall: overall,
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
    
      const [loading, setLoading] = useState(true)
      const saveInvoice = () =>{
          setLoading(true)
        setLoading(false)

      }

      useEffect(()=>{
          let sumNetto = 0
          let sumBrutto = 0
          let sum = 0
          let sumVat = 0
          let vat = 1.23
            invoiceData.services.forEach((el)=>{
                if(el.priceNetto !== ''){
                sumNetto += parseInt(el.priceNetto) * parseInt(el.qty) // Netto value
                let numberVat = parseInt(el.vat)
                numberVat === 23 ? vat=1.23 : vat=1.08
                let bruttoValue = parseInt(el.priceNetto) * vat
                sumBrutto += bruttoValue * parseInt(el.qty) // Brutto value
                sum += bruttoValue * parseInt(el.qty) // Sum Value
                sumVat += (bruttoValue - parseInt(el.priceNetto)) * parseInt(el.qty) // Vat value
            } else {
                sumBrutto += parseInt(el.priceBrutto) * parseInt(el.qty) // Brutto Value
                let numberBrutto = parseInt(el.priceBrutto)
                let numberVat = parseInt(el.vat)
                numberVat === 23 ? vat=1.23 : vat=1.08
                let nettoValue = numberBrutto - (numberBrutto - (numberBrutto / vat))
                sumNetto += nettoValue * parseInt(el.qty) // Netto Value
                sum += numberBrutto * parseInt(el.qty) // Sum Value
                sumVat += (numberBrutto - nettoValue) * parseInt(el.qty)
                
            }
            setOverall({...overall, 
                sumNetto: sumNetto.toFixed(2), 
                sumBrutto: sumBrutto.toFixed(2),
                sumVat: sumVat.toFixed(2),
                sum: sum.toFixed(2)
            })
            })
        setInvoiceData({...invoiceData, overall: overall})
      },[invoiceData.services, overall.sumNetto, overall.sumBrutto])

    return (
        <InvoiceContainer>
            
            <InvoiceInfo invoiceHandler={invoiceHandler} invoiceData={invoiceData}/>
            <SellerInfo invoiceHandler={invoiceHandler} invoiceData={invoiceData}/>
            <BuyerInfo invoiceHandler={invoiceHandler} invoiceData={invoiceData}/>
            <ServicesInfo invoiceData={invoiceData} setInvoiceData={setInvoiceData} services={services} setServices={setServices} overall={overall} setOverall={setOverall}/>
            <PaymentInfo invoiceHandler={invoiceHandler} invoiceData={invoiceData}/>
            <button onClick={addNewInvoice}>DODAJ Fakture</button>
            <button onClick={saveInvoice}>Zapisz Dane i pobierz</button>
            {!loading && (
            <PDFDownloadLink document={<MyDocument printData={invoiceData}/>} fileName='Invoice.pdf'>
            {({blob, url, error})=> (loading ? 'Loading document...' : 'Download now!')}
             </PDFDownloadLink>)}
   
        </InvoiceContainer>
    );
}

const InvoiceContainer = styled.div`

`

export default AddInvoice;