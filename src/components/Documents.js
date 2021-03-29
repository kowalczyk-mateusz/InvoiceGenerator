import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import Navigation from './Navigation'
import {useAuth} from '../context/AuthContext'
import {Link} from 'react-router-dom'
import app from '../firebase'
const Documents = () => {
const {currentUser} = useAuth()
const ref = app.firestore().collection(currentUser.uid)
const [documents, setDocuments] = useState([]);
const [loading, setLoading] = useState(false);
    const getDocuments = ( ) =>{
        setLoading(true)
        ref.onSnapshot((querySnapshot) =>{
            const items = [];
            querySnapshot.forEach((doc)=>{
                items.push(doc.data());
            });
            setDocuments(items);
            setLoading(false);
        })
    }
    useEffect(()=>{
        getDocuments()
    }, [])
    console.log(documents)
    return (

        <StyledDocuments>
            <Navigation />
        <AllDocuments>
            {loading == false &&(
                documents.map((el)=>(
                    <Link to={`document/${el.id}`}><div>
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