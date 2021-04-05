import React, {useState, useEffect} from 'react';

import {useParams} from 'react-router-dom'
import {useAuth} from '../context/AuthContext'
import app from '../firebase'
import EditData from './EditingData/EditData'
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
                    if(el.id === id){
                        setSingleData(el)
                    }
                })
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
            <EditData singleData={singleData} setSingleData={setSingleData}/>
            )}
        </>
    );
}

export default DocumentId;