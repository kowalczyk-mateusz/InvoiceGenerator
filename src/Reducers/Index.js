import {combineReducers} from 'redux'
import invoiceReducer from './InvoicesReducer'
import {firebaseReducer} from 'react-redux-firebase'
import {firestoreReducer} from 'redux-firestore'

const rootReducer = combineReducers({
    invoices: invoiceReducer,
    firebase: firebaseReducer,
    firestore: firestoreReducer,
})
export default rootReducer