import React, {useEffect} from 'react';
import {Page, Text, View, Document, StyleSheet, Font} from '@react-pdf/renderer';


const styles = StyleSheet.create({
    page: {
        flexDirection: 'column',
        backgroundColor: '#fff',
        paddingLeft: 30,
        paddingRight: 30,
        paddingTop: 50,
    },
    dateContainer: {
        flexDirection: 'column',
        width: '230px',
        justifyContent: 'center',
    },
    textHeadline: {
        width: '100%',
        backgroundColor: '#d3d3d3',
        fontWeight: 'light',
        textAlign: 'center',
        fontSize: 13,
        borderTopStyle: 'solid',
        borderTopWidth: '1',
        borderTopColor: '#000',

    },
    boldedText: {
        paddingTop: 2,
        paddingBottom: 2,
        width: '100%',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 13,
    },
    emptyView: {
        width: '250px',
    },
    firstRow: {
        marginTop: 10,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    sellerContainer: {
        width: '250px',
        flexDirection: 'column',

    },
    buyerContainer: {
        width: '250px',
        flexDirection: 'column',
    },
    text: {
        fontSize: 13,
    },
    services: {
        flexDirection: 'column',
        borderLeftStyle: 'solid',
        borderLeftWidth: '1',
        borderLeftColor: '#000',
        borderRightStyle: 'solid',
        borderRightWidth: '1',
        borderRightColor: '#000',
    },
    label: {
        flexDirection: 'row',
        width: '534px',
        backgroundColor: '#a0a8bc',
        height: '30px',
        borderTopStyle: 'solid',
        borderTopWidth: '1',
        borderToptColor: '#000',
    },
    headline: {
        justifyContent: 'center',
        marginTop: 15,
        marginBottom: 5,
    }, 
    headlineText: {
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center'
    }, 

        labelslp : {
            width: '27px',
            borderRightStyle: 'solid',
            borderRightWidth: '1',
            borderRightColor: '#000',
        },
        labelsserviceName : {
            width: '214px',
            borderRightStyle: 'solid',
            borderRightWidth: '1',
            borderRightColor: '#000',
        },
        labelsjm : {
            width: '30px',
            borderRightStyle: 'solid',
            borderRightWidth: '1',
            borderRightColor: '#000',
        },
        labelsqty : {
            width: '30px',
            borderRightStyle: 'solid',
            borderRightWidth: '1',
            borderRightColor: '#000',
        },
        labelspriceNetto: {
            width: '52px',
            borderRightStyle: 'solid',
            borderRightWidth: '1',
            borderRightColor: '#000',
        },
        labelsvalueNetto : {
            width: '52px',
            borderRightStyle: 'solid',
            borderRightWidth: '1',
            borderRightColor: '#000',
        },
        labelsvat : {
            width: '35px',
            borderRightStyle: 'solid',
            borderRightWidth: '1',
            borderRightColor: '#000',
        },
        labelsvatPrice : {
            width: '43px',
            borderRightStyle: 'solid',
            borderRightWidth: '1',
            borderRightColor: '#000',
        },
        labelsvalueBrutto : {
            width: '52px',
        },
        labelText: {
            fontSize: 10,
            textAlign: 'center',
            fontWeight: 'bold',
        },
        singleService: {
            flexDirection: 'row',
            width: '534px',
            borderBottomStyle: 'solid',
            borderBottomWidth: '1',
            borderBottomColor: '#000',
            marginRight: 3,
        },
        serviceLp: {
            width: '27px',
            borderRightStyle: 'solid',
            borderRightWidth: '1',
            borderRightColor: '#000',
        },
        serviceServiceName: {
            width: '214px',
            borderRightStyle: 'solid',
            borderRightWidth: '1',
            borderRightColor: '#000',
        },
        serviceJm: {
            width: '30px',
            borderRightStyle: 'solid',
            borderRightWidth: '1',
            borderRightColor: '#000',
        },
        serviceQty: {
            width: '30px',
            borderRightStyle: 'solid',
            borderRightWidth: '1',
            borderRightColor: '#000',
        },
        servicePriceNetto: {
            width: '52px',
            borderRightStyle: 'solid',
            borderRightWidth: '1',
            borderRightColor: '#000',
        },
        serviceValueNetto: {
            width: '52px',
            borderRightStyle: 'solid',
            borderRightWidth: '1',
            borderRightColor: '#000',
        },
        serviceVat: {
            width: '35px',
            borderRightStyle: 'solid',
            borderRightWidth: '1',
            borderRightColor: '#000',
        },
        serviceVatPrice: {
            width: '43px',
            borderRightStyle: 'solid',
            borderRightWidth: '1',
            borderRightColor: '#000',
        },
        serviceValueBrutto: {
            width: '52px',
        },
        serviceText: {
            fontSize: 9,
            textAlign: 'center',
            fontWeight: 'lighter',
        },
        overall: {
        },
        overallContainer: {
            flexDirection: 'row',
            height: '25px',
        }, 
        overallContainerLast: {
            flexDirection: 'row',
            height: '25px',
        }, 
        emptySpace: {
            width: '352px',
        },
        overallBox: {
            width: '42px',
            alignSelf: 'center',
            borderRightStyle: 'solid',
            borderRightWidth: '1',
            borderRightColor: '#000',
            height: '100%',
        },
        overallBoxLast: {
            width: '40.3px',
            height: '100%',
        },
        overallText: {
            fontSize: 9,
            textAlign: 'center',
            fontWeight: 'lighter',
            
        },
        emptyText: {
            fontSize: 10,
            textAlign: 'right',
            fontWeight: 'lighter',
            paddingRight: 2,
        },
        overallContent: {
            flexDirection: 'row',
            borderRightStyle: 'solid',
            borderRightWidth: '1',
            borderRightColor: '#000',
            borderLeftStyle: 'solid',
            borderLeftWidth: '1',
            borderLeftColor: '#000',
            borderBottomStyle: 'solid',
            borderBottomWidth: '1',
            borderBottomColor: '#000',

        }, 
        payment: {
            marginTop: 25,
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-between',
        },
        paymentMethod: {
            width: '250px',
            flexDirection: 'column',
        }, 
        paymentOverall: {
            width: '250px',
            flexDirection: 'column',
        },
        paymentRow: {
            flexDirection: 'row',
            width: '100%',
            borderTopStyle: 'solid',
            borderTopWidth: '1',
            borderTopColor: '#000',
            justifyContent: 'flex-start',
            paddingTop: 5,
            paddingBottom: 5,
        },
        paymentText: {
            fontSize: 10,
            width: '65%',
        },
        paymentTextFirst: {
            fontSize: 10,
            width: '35%',
        }, 
        signature: {
            fontSize: 7,
            marginTop: 45,
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-between',
        }, 
        singleSignature: {
            width: '250px',
            borderTopStyle: 'solid',
            borderTopWidth: '1',
            borderTopColor: '#000',
            textAlign: 'center',
        }
        
});


const MyDocument = ({printData}) =>{
    const masno = [
        {name: 'dsadsa'},
        {name: 'dsadsa'},
        {name: 'dsadsa'},
        {name: 'dsadsa'}
    ]
    
    Font.register( {
        family: 'Open Sans',
        src: `${__dirname}/fonts/Open_Sans/OpenSans-Regular.ttf`,
      });
return(
    <Document>
    <Page size="A4" style={styles.page}>
        <View style={styles.firstRow}>
        <View style={styles.emptyView}></View>
       <View style={styles.dateContainer}>
           <View style={styles.textHeadline}><Text>Miejsce Wystawienia</Text></View>
           <Text style={styles.boldedText}>Katowice</Text>
           <View style={styles.textHeadline}><Text>Data Wystawienia</Text></View>
           <Text style={styles.boldedText}>15-12-2020</Text>
           <View style={styles.textHeadline}><Text>Data sprzedazy</Text></View>
           <Text style={styles.boldedText}>15-12-2020</Text>
       </View>
       </View>
       <View style={styles.firstRow}>
           <View style={styles.sellerContainer}>
                <View style={styles.textHeadline}><Text>Sprzedawca</Text></View>
                <Text style={styles.text}>COMPANY</Text>
                <Text style={styles.text}>NIP: 123456789</Text>
                <Text style={styles.text}>Pogodna 13/56</Text>
                <Text style={styles.text}>40-319 Katowice</Text>
           </View>
           <View style={styles.buyerContainer}>
                <View style={styles.textHeadline}><Text>Nabywca</Text></View>
                <Text style={styles.text}>COMPANY COMPANY COMPANY COMPANY COMPANY</Text>
                <Text style={styles.text}>NIP: 123456789</Text>
                <Text style={styles.text}>Pogodna 13/56</Text>
                <Text style={styles.text}>40-319 Katowice</Text>
           </View>

       </View>
       <View style={styles.headline}><Text style={styles.headlineText}>Faktura VAT 14/2020</Text></View>
       <View style={styles.services}>
        <View style={styles.label}>
            <View style={styles.labelslp}><Text style={styles.labelText}>Lp.</Text></View>
            <View style={styles.labelsserviceName}><Text style={styles.labelText}>Nazwa Towaru lub usługi</Text></View>
            <View style={styles.labelsjm}><Text style={styles.labelText}>Jm.</Text></View>
            <View style={styles.labelsqty}><Text style={styles.labelText}>Ilosc</Text></View>
            <View style={styles.labelspriceNetto}><Text style={styles.labelText}>Cena Netto</Text></View>
            <View style={styles.labelsvalueNetto}><Text style={styles.labelText}>Wartosc Netto</Text></View>
            <View style={styles.labelsvat}><Text style={styles.labelText}>Stawka  Vat</Text></View>
            <View style={styles.labelsvatPrice}><Text style={styles.labelText}>Kwota VAT</Text></View>
            <View style={styles.labelsvalueBrutto}><Text style={styles.labelText}>Wartosc Brutto</Text></View>
        </View>
        <View style={styles.serviceContainer}>
            <View style={styles.singleService}>
                <View style={styles.serviceLp}><Text style={styles.serviceText}>1</Text></View>
                <View style={styles.serviceServiceName}><Text style={styles.serviceText}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt quo id iste.</Text></View>
                <View style={styles.serviceJm}><Text style={styles.serviceText}>szt.</Text></View>
                <View style={styles.serviceQty}><Text style={styles.serviceText}>1</Text></View>
                <View style={styles.servicePriceNetto}><Text style={styles.serviceText}>3 425,93</Text></View>
                <View style={styles.serviceValueNetto}><Text style={styles.serviceText}>3425,93</Text></View>
                <View style={styles.serviceVat}><Text style={styles.serviceText}>8%</Text></View>
                <View style={styles.serviceVatPrice}><Text style={styles.serviceText}>274,07</Text></View>
                <View style={styles.serviceValueBrutto}><Text style={styles.serviceText}>3 700,00</Text></View>
            </View>
            <View style={styles.singleService}>
                <View style={styles.serviceLp}><Text style={styles.serviceText}>1</Text></View>
                <View style={styles.serviceServiceName}><Text style={styles.serviceText}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt quo id iste.</Text></View>
                <View style={styles.serviceJm}><Text style={styles.serviceText}>szt.</Text></View>
                <View style={styles.serviceQty}><Text style={styles.serviceText}>1</Text></View>
                <View style={styles.servicePriceNetto}><Text style={styles.serviceText}>3 425,93</Text></View>
                <View style={styles.serviceValueNetto}><Text style={styles.serviceText}>3425,93</Text></View>
                <View style={styles.serviceVat}><Text style={styles.serviceText}>8%</Text></View>
                <View style={styles.serviceVatPrice}><Text style={styles.serviceText}>274,07</Text></View>
                <View style={styles.serviceValueBrutto}><Text style={styles.serviceText}>3 700,00</Text></View>
            </View>
            <View style={styles.singleService}>
                <View style={styles.serviceLp}><Text style={styles.serviceText}>1</Text></View>
                <View style={styles.serviceServiceName}><Text style={styles.serviceText}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt quo id iste.</Text></View>
                <View style={styles.serviceJm}><Text style={styles.serviceText}>szt.</Text></View>
                <View style={styles.serviceQty}><Text style={styles.serviceText}>1</Text></View>
                <View style={styles.servicePriceNetto}><Text style={styles.serviceText}>3 425,93</Text></View>
                <View style={styles.serviceValueNetto}><Text style={styles.serviceText}>3425,93</Text></View>
                <View style={styles.serviceVat}><Text style={styles.serviceText}>8%</Text></View>
                <View style={styles.serviceVatPrice}><Text style={styles.serviceText}>274,07</Text></View>
                <View style={styles.serviceValueBrutto}><Text style={styles.serviceText}>3 700,00</Text></View>
            </View>
        </View>

       </View>
       <View style={styles.overall}>
            <View style={styles.overallContainer}>
                <View style={styles.emptySpace}><Text style={styles.emptyText}>W tym</Text></View>
                <View style={styles.overallContent}>
                <View style={styles.serviceValueNetto}><Text style={styles.overallText}>3425,93</Text></View>
                <View style={styles.serviceVat}><Text style={styles.overallText}>8%</Text></View>
                <View style={styles.serviceVatPrice}><Text style={styles.overallText}>274,07</Text></View>
                <View style={styles.serviceValueBrutto}><Text style={styles.overallText}>3 700,00</Text></View>
                </View>
            </View>
            <View style={styles.overallContainerLast}>
                <View style={styles.emptySpace}><Text style={styles.emptyText}>Razem</Text></View>
                <View style={styles.overallContent}>
                <View style={styles.serviceValueNetto}><Text style={styles.overallText}>3425,93</Text></View>
                <View style={styles.serviceVat}></View>
                <View style={styles.serviceVatPrice}><Text style={styles.overallText}>274,07</Text></View>
                <View style={styles.serviceValueBrutto}><Text style={styles.overallText}>100 700,00</Text></View>
                </View>
            </View>
        </View>
       <View style={styles.payment}>
           <View style={styles.paymentMethod}>
               <View style={styles.paymentRow}>
               <Text style={styles.paymentTextFirst}>Sposob platnosci</Text>
               <Text style={styles.paymentText}>przelew</Text>
               </View>
               <View  style={styles.paymentRow}>
               <Text style={styles.paymentTextFirst}>Termin platnosci</Text>
               <Text style={styles.paymentText}>14 dni</Text>
               </View>
               <View  style={styles.paymentRow}>
               <Text style={styles.paymentTextFirst}>Numer Konta</Text>
               <Text style={styles.paymentText}>00 0000 0000 0000 0000 0000 0000 </Text>
               </View>
           </View>
           <View style={styles.paymentOverall}>
               <View  style={styles.paymentRow}>
               <Text style={styles.paymentTextFirst}>Do Zaplaty</Text>
               <Text style={styles.paymentText}>3 700,00 PLN</Text>
               </View>
               <View  style={styles.paymentRow}>
               <Text style={styles.paymentTextFirst}>Slownie</Text>
               <Text style={styles.paymentText}>trzy tysiace siedemset 00/100PLN</Text>
               </View>
           </View>
       </View>
       <View style={styles.signature}>
           <View style={styles.singleSignature}>
               <Text>Podpis odoby upoważnionej do wystawienia</Text>
           </View>
           <View  style={styles.singleSignature}>
               <Text>Podpis osoby upoważnionej do odbioru</Text>
           </View>
       </View>
    </Page>
</Document>
)
}
 export default MyDocument