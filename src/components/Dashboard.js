import React, {useState, useEffect} from 'react';
import firebase from 'firebase/app'
import Nav from './Navigation'
import app from '../firebase'
import {useAuth} from '../context/AuthContext'
import AddInvoice from './AddInvoice'
const Dashboard = () => {
      // const [data, setData] = useState([])
      // const [data2, setData2] = useState([])
      // const [loading, setLoading] = useState(false)
      // const ref = app.firestore().collection('12345')

      // function getName(){
      //   setLoading(true);
      //   ref.onSnapshot((querySnapshot) =>{
      //     const items = [];
      //     querySnapshot.forEach((doc)=>{
      //       items.push(doc.data());
      //     });
      //     setData(items)
      //     setLoading(false);
      //   })
      // }
      // function getname2(){
      //   setLoading(true);
      //   ref.get().then((item)=>{
      //     const items = item.docs.map((doc)=>doc.data());
      //     setData2(items);
      //     setLoading(false);
      //   })
      // }
      // useEffect(()=>{
      //   getName();
      //   getname2();
      // }, [])

      // console.log("data: ", data)
      // console.log("data2", data2)
      
    return (
      <>
    <Nav />
    <AddInvoice />
      </>
    );
}

export default Dashboard;