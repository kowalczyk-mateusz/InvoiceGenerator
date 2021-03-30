const initialState = {
    allInvoices: [],
    singleInvoice: [],
    isLoading: true,
}

const invoiceReducer = (state = initialState, action) =>{
    switch(action.type){
        case "FETCH_ALL_INVOICES" : 
        return {
            ...state,   
            allInvoices: action.payload.allInvoices,
            isLoading: false,
        }
        case 'LOAD_INVOICES' : 
        return{
            ...state,
            isLoading: true,
        }
        default :
        return{ ...state}
    }
}

export default invoiceReducer