import React from 'react';
import Nav from './Navigation'
import AddInvoice from './AddInvoice'
import {Route} from 'react-router-dom'
import Documents from './Documents'
const Dashboard = () => {

    return (
      <>
    <Nav />
    <AddInvoice/>
      </>
    );
}

export default Dashboard;