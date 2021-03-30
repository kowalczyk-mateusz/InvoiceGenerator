import {combineReducers} from 'redux'
import invoiceReducer from './InvoicesReducer'
import {firebaseReducer} from 'react-redux-firebase'

const rootReducer = combineReducers({
    // invoices: invoiceReducer,
    firebase: firebaseReducer,
})
export default rootReducer