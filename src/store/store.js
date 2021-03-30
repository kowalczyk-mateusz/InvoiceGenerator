import thunk from 'redux-thunk'
import {ReactReduxFirebaseProvider, getFirebase} from 'react-redux-firebase'
import {createStore, applyMiddleware, compose} from 'redux'
import {createFirestoreInstance, getFirestore} from 'redux-firestore'
import app from '../firebase'
import rootReducer from '../Reducers/Index.js'

  const composeEnchancer =
  process.env.NODE_ENV === 'development'
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
    : compose;

const store = createStore(
  rootReducer,
   composeEnchancer(applyMiddleware(thunk)));


export default store