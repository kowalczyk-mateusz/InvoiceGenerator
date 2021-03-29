import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import {useParams} from 'react-router-dom'
import {useAuth} from '../context/AuthContext'
import app from '../firebase'
const DocumentId = () => {
    const {id} = useParams();
    const {currentUser} = useAuth()
    const ref = app.firestore().collection(currentUser.uid)
    const [data, setData] = useState([])
    const [singleData, setSingleData] = useState()
    const [loading, setLoading] = useState(false)

        const getData = ( )=>{
            setLoading(true)
            ref.onSnapshot((querySnapshot) =>{
                const items = [];
                querySnapshot.forEach((doc)=>{
                    items.push(doc.data());
                })
                setData(items)
                setLoading(false)
            })
        }
        const filterData = ( )=>{
                data.map((el)=>{
                    if(el.id == id){
                        setSingleData(el)
                    }
                })
                console.log(singleData)
        }
        useEffect(()=>{
            getData()
        }, [])
        useEffect(()=>{
            filterData()
        }, [data])
    return (
        <>
        {singleData && (
            <>
            <h1>{singleData.invoiceNumber}</h1>
            <h2>{singleData.releaseDate}</h2>
            <h2>{singleData.saleDate}</h2>
            <h2>{singleData.sellerName}</h2>
            <h2>{singleData.id}</h2>
            </>
            )}
        </>
    );
}

export default DocumentId;