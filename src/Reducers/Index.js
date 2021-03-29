import {combineReducers} from 'redux'
import invoiceReducer from './InvoicesReducer'

const rootReducer = combineReducers({
    invoices: invoiceReducer,
})
export default rootReducer