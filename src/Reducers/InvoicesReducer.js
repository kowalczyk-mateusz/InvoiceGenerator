const initialState = {
    allInvoices: [],
    isLoading: true,
}

const invoiceReducer = (state = initialState, action) =>{
    switch(action.type){
        case 'LOAD_INVOICES' : 
        return{
            ...state,
            isLoading: true,
        }
        case "FETCH_ALL_INVOICES" : 
        return {
            ...state,   
            allInvoices: action.payload.allInvoices,
            isLoading: false,
        }
        default :
        return{ ...state}
    }
}

export default invoiceReducer