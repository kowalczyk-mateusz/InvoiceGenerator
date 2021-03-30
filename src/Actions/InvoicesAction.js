
import app from '../firebase'

export const loadInvoices = () => async (dispatch, getState) =>{
    dispatch({
        type: 'LOAD_INVOICES'
    })
    const userId = getState().firebase.auth.uid;
    const ref = app.firestore().collection(userId)
    const data = []
     await ref.onSnapshot((querySnapshot)=>{
        querySnapshot.forEach((doc)=>{
            data.push(doc.data());
        })
    })
    
    dispatch({
        type: "FETCH_ALL_INVOICES",
        payload: {
            allInvoices: data,
        }
    })
}

