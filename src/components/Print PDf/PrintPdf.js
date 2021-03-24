import React from 'react';
import {Page, Text, View, Document, StyleSheet} from '@react-pdf/renderer';
import ReactPDF from '@react-pdf/renderer';
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
        fontSize: 15,
    },
    emptyView: {
        width: '250px',
    },
    firstRow: {
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
        fontSize: 15,
    },
    label: {
        flexDirection: 'row',
    }



});
const MyDocument = ({printData}) =>{
    const masno = [
        {name: 'dsadsa'},
        {name: 'dsadsa'},
        {name: 'dsadsa'},
        {name: 'dsadsa'}
    ]
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
       <View style={styles.headline}><Text>Faktura VAT 14/2020</Text></View>
       <View style={styles.services}>
        <View style={styles.label}>
            <View><Text>Lp.</Text></View>
            <View><Text>Nazwa Towaru lub usługi</Text></View>
            <View><Text>Jm.</Text></View>
            <View><Text>Ilość</Text></View>
            <View><Text>Cena Netto</Text></View>
            <View><Text>Wartość Netto</Text></View>
            <View><Text>Stawka VAT</Text></View>
            <View><Text>Kwota VAT</Text></View>
            <View><Text>Wartość Brutto</Text></View>
        </View>
        <View style={styles.serviceContainer}>
            <View style={styles.singleService}>
                <View><Text>1</Text></View>
                <View><Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt quo id iste.</Text></View>
                <View><Text>szt.</Text></View>
                <View><Text>1</Text></View>
                <View><Text>3 425,93</Text></View>
                <View><Text>3425,93</Text></View>
                <View><Text>8%</Text></View>
                <View><Text>274,07</Text></View>
                <View><Text>3 700,00</Text></View>
            </View>
        </View>
        <View style={styles.overall}>
            <View style={styles.overallContainer}>
                <View style={styles.emptySpace}></View>
                <View><Text>3425,93</Text></View>
                <View><Text>8%</Text></View>
                <View><Text>274,07</Text></View>
                <View><Text>3 700,00</Text></View>
            </View>
            <View style={styles.overallContainer}>
                <View style={styles.emptySpace}></View>
                <View><Text>3425,93</Text></View>
                <View><Text></Text></View>
                <View><Text>274,07</Text></View>
                <View><Text>3 700,00</Text></View>
            </View>
        </View>
       </View>
       <View style={styles.payment}>
           <View style={styles.paymentMethod}>
               <View>
               <Text>Sposob płatności</Text>
               <Text>przelew</Text>
               </View>
               <View>
               <Text>Termin płatnośći</Text>
               <Text>14 dni</Text>
               </View>
               <View>
               <Text>Numer Konta</Text>
               <Text>00 0000 0000 0000 0000 0000 0000 </Text>
               </View>
           </View>
           <View style={styles.paymentOverall}>
               <View>
               <Text>Do Zapłaty</Text>
               <Text>3 700,00 PLN</Text>
               </View>
               <View>
               <Text>Słownie</Text>
               <Text>trzy tysiące siedemset 00/100PLN</Text>
               </View>
           </View>
       </View>
       <View style={styles.signature}>
           <View>
               <Text>Podpis odoby upoważnionej do wystawienia</Text>
           </View>
           <View>
               <Text>Podpis osoby upoważnionej do odbioru</Text>
           </View>
       </View>
    </Page>
</Document>
)
}
 export default MyDocument