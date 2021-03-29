const initialState = {
    invoices: [],
    singleInvoice: [],
    isLoading: true,
}

const invoiceReducer = (state = initialState, action) =>{
    switch(action.type){
        case "FETCH_ALL_INVOICES" : 
        return {
            ...state,   
            invoices: action.payload.invoices,
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