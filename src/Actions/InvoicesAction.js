
import app from '../firebase'

//ACTIONS
export const loadInvoices = (id) => async (dispatch) =>{
    dispatch({
        type: 'LOAD_INVOICES'
    })
    const ref = app.firestore().collection(id)
    const data = []
     await ref.onSnapshot((querySnapshot)=>{
        const items = [];
        querySnapshot.forEach((doc)=>{
            items.push(doc.data());
        })
        data.push(items)
    })
    
    
    dispatch({
        type: "FETCH_ALL_INVOICES",
        payload: {
            allInvoices: data,
        }
    })
}