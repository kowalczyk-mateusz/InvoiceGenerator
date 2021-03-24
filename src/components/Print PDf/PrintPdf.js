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



});
const MyDocument = ({printData}) =>{
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
    </Page>
</Document>
)
}
 export default MyDocument