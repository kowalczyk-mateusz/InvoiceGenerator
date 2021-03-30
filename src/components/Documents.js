import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import Navigation from './Navigation'
import {useAuth} from '../context/AuthContext'
import {Link} from 'react-router-dom'
import {loadInvoices} from '../Actions/InvoicesAction'
import app from '../firebase'
import {useDispatch, useSelector} from 'react-redux'

const Documents = () => {
    const dispatch = useDispatch()
    const {currentUser} = useAuth()
    const id = currentUser.uid
    useEffect(()=>{
        // getDocuments()
        dispatch(loadInvoices(id))
    }, [])
    const {allInvoices, isLoading} = useSelector((state)=>state.invoices)
  
   const [data, setData] =useState([])

 
   useEffect(()=>{
    if(isLoading === false){
        setData(...allInvoices)
    }
   }, [isLoading])
    
    // const ref = app.firestore().collection(currentUser.uid)
    // const [documents, setDocuments] = useState([]);
    // const [loading, setLoading] = useState(false);
    // const getDocuments = ( ) =>{
    //     setLoading(true)
    //     ref.onSnapshot((querySnapshot) =>{
    //         const items = [];
    //         querySnapshot.forEach((doc)=>{
    //             items.push(doc.data());
    //         });
    //         setDocuments(items);
    //         setLoading(false);
    //     })
    // }

    return (

        <StyledDocuments>
            <Navigation />
        <AllDocuments>
            {data !== undefined &&(
                data.map((el)=>(
                    <Link to={`document/${el.id}`} key={el.id}><div>
                        <p>{el.id}</p>
                        <p>{el.invoiceNumber}</p>
                    </div>
                    </Link>
                ))
            )}
        </AllDocuments>
        </StyledDocuments>
    );
}


const StyledDocuments  = styled.div`

`
const AllDocuments = styled.div`
div{
    display: flex;
    p{
        padding-right: 2rem;
    }
}
`
export default Documents;