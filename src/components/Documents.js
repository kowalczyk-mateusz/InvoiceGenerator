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
    const [data, setData] = useState([])
    const {currentUser} = useAuth()
    useEffect(()=>{
        dispatch(loadInvoices())
    }, [])
    const {allInvoices, isLoading} = useSelector((state)=>state.invoices)
    
    setTimeout(()=>{
        setData(allInvoices)
    }, 1000)
    const delteInvoice = (id) =>{
        const userId = currentUser.uid
        const ref = app.firestore().collection(userId)
        ref.doc(id)
        .delete()

    }
    return (

        <StyledDocuments>
            <Navigation />
        <AllDocuments>
            {allInvoices !== [] &&(
                allInvoices.map((el)=>(
                    <>
                    <Link to={`document/${el.id}`} key={el.id}>
                        <div>
                        <p>{el.id}</p>
                        <p>{el.invoiceNumber}</p>
                    </div>
                    </Link>
                    <button onClick={()=>{ delteInvoice(el.id) }}>Delete Invoice</button>

                    </>
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