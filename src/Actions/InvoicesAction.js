import {useState} from 'react'
import app from '../firebase'

//ACTIONS
export const loadInvoices = (id) => async (dispatch) =>{
    dispatch({
        type: 'LOAD_INVOICES'
    })
    const ref = app.firestore().collection(id)
    const [data, setData] = useState([])
    ref.onSnapshot((querySnapshot)=>{
        const items = [];
        querySnapshot.forEach((doc)=>{
            items.push(doc.data());
        })
        setData(items)
    })
    dispatch({
        type: "FETCH_ALL_INVOICES",
        payload: {
            invoices: data,
        }
    })
}